"use server";

import { FormDataSchema } from "@/libs/schema";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library';
import { cookies } from "next/headers";
import { metadataLocales } from "@/app/i18n/metadata"

// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;

const serviceAccountAuth = new JWT({
  email: GOOGLE_CLIENT_EMAIL,
  key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
  ],
});

const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

const appendSpreadsheet = async (row) => {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow(row);
    return {
      success: true,
    }
  } catch (e) {
    return { success: false, error: e.message };
  }
};

export async function addEntry(formData) {
  const {success, error, data: {name,phone,services,comments,contact}} =  FormDataSchema.safeParse(formData);

  if (success) {
    const newRow = {
      Date: new Date().toLocaleString(),
      Name: name,
      Phone: phone,
      Services: services,
      Comments: comments,
      Contact: contact,
    };

    try {
      await appendSpreadsheet(newRow);
      return {
        "success": true,
      }
    } catch (error) {
      return { success: false };
    }
  }
}

export async function cookiesHandler(data) {
  const cookiesTools = cookies();
  cookiesTools.set("GA", "111");
}

export async function getMetadata(lang) {
  return metadataLocales[lang];
}