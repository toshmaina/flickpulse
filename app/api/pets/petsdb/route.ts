import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';



interface ErrorReturnedType{
  status: number
  statusText: string
}
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const data = Object.fromEntries(searchParams);
    
    console.log(data);
    
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
 
  try {
    if (!petName || !ownerName) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  } catch (error) {
    return NextResponse.json(
      { error }, {
      status: 500,
      statusText: error instanceof Error ? error.message : undefined
    });
  }
 
  const pets = await sql`SELECT * FROM Pets;`;
  return NextResponse.json({ pets }, { status: 200 ,statusText: "OK" });
}