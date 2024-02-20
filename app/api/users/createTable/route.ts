import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const GET = async ():Promise<NextResponse<QueryResult<QueryResultRow>> | NextResponse<Error> | undefined> => {
      try {
    const result:QueryResult<QueryResultRow> = await sql`CREATE TABLE IF  NOT EXISTS users
     (id  SERIAL PRIMARY KEY , email varchar(255) NOT NULL UNIQUE, password varchar(255) NOT NULL);`;
    console.log(result)
          if (!result?.rows) throw new Error("Could not create table credentials");
          return NextResponse.json(result,{statusText: 'success'})
      } catch (error) {
        if (error instanceof Error) return NextResponse.json(error, { statusText: error.message });
      
  }
}