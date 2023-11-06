import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST  = async (req: NextRequest, res: NextResponse) => {
/*     const { searchParams } = new URL(req.url);
    const dataObj = Object.fromEntries(searchParams);
    const { searchTerm } = dataObj; */
    //const search = searchParams.get('searchTerm');
    // console.log(search);
    
    const data: string = await req.json();
    const search = data.replaceAll("%20"," ")

    console.log(search);
    
    try {
         if (!search) throw new Error("The search term cannot be empty");
        const result = await sql`INSERT INTO Search ( Searchterm ) VALUES (${search});`;
        console.log(result);
        return NextResponse.json({ result });
      
        
       
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
   /*  const result = await sql`SELECT * FROM Search;`;
     return NextResponse.json({result},{ statusText: 'success'  }); */

   
    
 }