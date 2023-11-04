import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
    await sql`CREATE TABLE Search (id INTEGER PRIMARY KEY AUTOINCREMENT, searchTerm  VARCHAR(255) NOT NULL);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}