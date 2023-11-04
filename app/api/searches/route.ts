import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST  = async (req: NextRequest, res: NextResponse) => {
/*     const { searchParams } = new URL(req.url);
    const dataObj = Object.fromEntries(searchParams);
    const { searchTerm } = dataObj; */
    //const search = searchParams.get('searchTerm');
    // console.log(search);
    
    const search: string = await req.json();
    try {
        const res: QueryResult<QueryResultRow> = await sql`CREATE TABLE search (id INTEGER PRIMARY KEY AUTOINCREMENT, searchTerm  VARCHAR(255) NOT NULL);`;
         if (!Boolean(search)) throw new Error("The search term cannot be empty");
        Boolean(search) && await sql`INSERT INTO search ( searchTerm ) VALUES (${search});`;
       
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
     return NextResponse.json({ statusText: 'success' }, { status: 200 });

   
    
 }