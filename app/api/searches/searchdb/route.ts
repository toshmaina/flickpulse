import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

const POST  = async (req: NextRequest, res: NextResponse) => {
/*     const { searchParams } = new URL(req.url);
    const dataObj = Object.fromEntries(searchParams);
    const { searchTerm } = dataObj; */
    //const search = searchParams.get('searchTerm');
    // console.log(search);
    
    const data: string = await req.json();
    const search = data.replaceAll("%20", " ");
    console.log(search);
    try {
        const rows = await sql`INSERT INTO  topSearches (searchTerm  ) VALUES(${search});`;
        if(rows?.rows) throw new Error(`Could not insert the search`);
    } catch (error) {
        if (error instanceof Error) return  NextResponse.json(error);
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
     const result = await sql`SELECT * FROM Search;`;
     return NextResponse.json({result},{ statusText: 'success'  }); 

   
    
}
 export default POST;