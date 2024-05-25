"use server";

import { cookies } from "next/headers";

export async function cookiesHandler(data) {
  const cookiesTools = cookies();
  cookiesTools.set("GA", "111");
}
