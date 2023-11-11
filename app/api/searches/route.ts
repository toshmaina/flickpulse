import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    await sql`DROP TABLE IF EXISTS search`;
    await sql`DROP TABLE IF EXISTS Search`; 
    const result =
        await sql`CREATE TABLE
                 topSearches (id INTEGER PRIMARY KEY , searchTerm  VARCHAR(255));`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}