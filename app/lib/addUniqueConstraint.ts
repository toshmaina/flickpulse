/* import { sql } from "@vercel/postgres";
const addUniqueConstraint = async () => {
try {
    const query = await sql`ALTER TABLE FAQs  ADD CONSTRAINT unique_quiz_key  UNIQUE(question);`;
    console.log(query);
    if (query.rows) throw new Error("Could not add constraint to table");
} catch (error) {
    error instanceof Error && console.log(error);
}   
}
export default addUniqueConstraint; */
