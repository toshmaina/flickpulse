import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST  = async (req: NextRequest, res: NextResponse) => {
/*     const { searchParams } = new URL(req.url);
    const dataObj = Object.fromEntries(searchParams);
    const { searchTerm } = dataObj; */
    //const search = searchParams.get('searchTerm');
    // console.log(search);
    
    const search: string = await req.json();
    try {
         if (!search) throw new Error("The search term cannot be empty");
          await sql`INSERT INTO Search ( searchTerm ) VALUES (${search});`;
       
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
    const result = await sql`SELECT * FROM Search;`;
     return NextResponse.json({result},{ statusText: 'success'  });

   
    
 }