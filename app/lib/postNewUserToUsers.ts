import { sql } from "@vercel/postgres";

export const postNewUserToTableUsers= async (username:string,password:string) => {
try {
    const result = await sql`INSERT INTO users
        (email, password) 
     VALUES
        (${username}, ${password}) ON CONFLICT (email,password) DO NOTHING ;`;
    if (!result?.rows) throw new Error("Could not insert into users table"); 
} catch (error) {
    error instanceof Error && console.log(error.message); 
}
} 