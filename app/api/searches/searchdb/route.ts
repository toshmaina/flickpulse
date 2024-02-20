import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST  = async (req: NextRequest) => {
    const data = await req.json();
    console.log(data)
    try {    
        const rows = await sql`INSERT INTO   topSearches (searchTerm)  VALUES ( ${data}) ;`;
        if (!rows?.rows) throw new Error('Could not insert the search');
        return NextResponse.json(rows,{statusText: 'success'});
      
    } catch (error) {
       return  NextResponse.json(error ,{statusText: error instanceof Error ? error?.message: ''});
    }

  
    
}
