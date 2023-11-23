import { sql } from "@vercel/postgres";

const dropTableFAQs = async () => {
    const query = await sql`DROP TABLE IF EXISTS FAQs;`;
    console.log(query);
    
}

export default dropTableFAQs;
