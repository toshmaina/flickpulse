import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST  = async (req: NextRequest) => {
/*     const { searchParams } = new URL(req.url);
    const dataObj = Object.fromEntries(searchParams);
    const { searchTerm } = dataObj; */
    //const search = searchParams.get('searchTerm');
    // console.log(search);
    
    const data = await req.json();
    //const search:string = data.replaceAll("%20", " ");
    //console.log(search);
    console.log(data);
    
    try {
        const rows = await sql`INSERT INTO   topSearches (searchTerm) VALUES(${data.searchTerm});`;
        
        if (!rows?.rows) throw new Error('Could not insert the search');
        return NextResponse.json(rows)
    } catch (error) {
        if (error instanceof Error) return  NextResponse.json(error,{statusText: 'error'});
    }
   // const result = await sql`SELECT * FROM pets`
  //  return NextResponse.json({message:"query successful"})
    
 /*    return NextResponse.json(data); */
/*     try {
         if (!search) throw new Error("The search term cannot be empty");s
        await sql`INSERT INTO Search ( Searchterm ) VALUES (${search});`;    
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    } */
/*     const result = await sql`SELECT *  FROM Pets;`;
    console.log(result);
    
     return NextResponse.json({result},{ statusText: 'success'  }); */    
}
