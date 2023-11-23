import { sql } from "@vercel/postgres";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

export const GET = async() => {
try {
    const result = await sql`SELECT *  FROM topSearches;`;
  return NextResponse.json({ result }, { status: 200 ,statusText: 'success' });  
} catch (error) {
    return NextResponse.json({ error }, { status: 500 ,statusText: 'server error' });
}
}

