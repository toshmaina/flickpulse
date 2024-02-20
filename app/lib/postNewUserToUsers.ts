import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";
interface CredentialsType {
    email: string;
    password: string;
}

export const postNewUserToTableUsers = async ({email, password}:CredentialsType):Promise<Error|string | undefined > => {
    try {
        const result: QueryResult<QueryResultRow> = await sql`INSERT INTO users
        (email, password) 
     VALUES
        (${email}, ${password});`;
        if (!result?.rows) throw new Error("Could not insert into users table");
        else if (Array.isArray(result?.rows) && result?.rows[0]) return "inserted into users"
        else return undefined;
    } catch (error) {
        error instanceof Error && console["error"](error["message"]);
        return error as Error;
    }
};