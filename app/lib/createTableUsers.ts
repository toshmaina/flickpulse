import { sql } from "@vercel/postgres";

export const createTableUsers = async () => {
  //TODO every question should be unique as well as the answer
  //REMEMBER TO BE VERY KEEN WHEN CONSTRUCTING MODELS
  
  try {
    const result = await sql`CREATE TABLE IF  NOT EXISTS credentials
     (id  SERIAL PRIMARY KEY , question varchar(255) NOT NULL UNIQUE, answer varchar(255) NOT NULL);`;
    console.log(result)
    if (!result?.rows) throw new Error("Could not create table credentials");
  } catch (error) {
    error instanceof Error && console.log(error.message);
  }
};