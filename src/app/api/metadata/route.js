import { NextResponse } from "next/server"

import {metadataLocales} from "@/app/i18n/metadata"

export async function GET(req) {
    
    return NextResponse.json({
        metadataLocales
    })
}