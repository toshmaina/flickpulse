import { sql } from "@vercel/postgres";
import { answer5, answer6, question5, question6 } from "../constants";

export const postQuesionsToFAQsTable = async () => {
try {
    const result = await sql`INSERT INTO UniqueFAQs
        (question, answer)
     VALUES
        (${question5}, ${answer5}),
        (${question6}, ${answer6})
        ON  CONFLICT(question)  DO NOTHING
        ;`;
    if (!result?.rows) throw new Error("Could not insert into UniqueFAQ's table"); 
} catch (error) {
    error instanceof Error && console.error(error.message); 
}
} 