import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST  = async (req: NextRequest, res: NextResponse) => {
/*     const { searchParams } = new URL(req.url);
    const dataObj = Object.fromEntries(searchParams);
    const { searchTerm } = dataObj; */
    //const search = searchParams.get('searchTerm');
    // console.log(search);
    
    const data: string = await req.json();
    const search = data.replaceAll("%20", " ");
    console.log(search);
    try {
        const rows = await sql`INSERT INTO Search (searchTerm , Time ) VALUES(${search}, 2:59);`;
        if(rows?.rows) throw new Error(`Could not insert the search`);
    } catch (error) {
        return error instanceof Error && NextResponse.json(error);
    }
    const result = await sql`SELECT * FROM pets`
    return NextResponse.json(result)
    
 /*    return NextResponse.json(data); */
/*     try {
         if (!search) throw new Error("The search term cannot be empty");
        await sql`INSERT INTO Search ( Searchterm ) VALUES (${search});`;    
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    } */
   /*  const result = await sql`SELECT * FROM Search;`;
     return NextResponse.json({result},{ statusText: 'success'  }); */

   
    
 }