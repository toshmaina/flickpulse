import { createTableFAQs } from "@/app/lib/createTableFAQs";
import { postQuesionsToFAQsTable } from "@/app/lib/postFAQs";
import { QueryResultRow, sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";



export const GET = async (request:Request ) => {
    await createTableFAQs();
    await postQuesionsToFAQsTable();
    const origin: string | null  = request.headers.get('origin');
    try {
        const remainingTokens:number = await limiter.removeTokens(1);
        if (remainingTokens < 0) {
            return new NextResponse(null, {
                status: 429,
                statusText: "Too Many Requests",
                headers: {
                    'Access-Control-Allow-Origin': origin || '*',
                    'Content-Type': 'text/plain'
              }
            })
        }
        const results = await sql`SELECT * FROM UniqueFAQs;`;
        if (!results?.rows?.[0]) throw new Error(`Could not get questions from database`);
        const data: QueryResultRow[] = results.rows;
       // console.log(data);
        return NextResponse.json(data, { status: 200, statusText: 'OK' });
    } catch (error) {
        if (error instanceof Error) return NextResponse.json(error, { status: 500, statusText: 'Error' });
    }
};

