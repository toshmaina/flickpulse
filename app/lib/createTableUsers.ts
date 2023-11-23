import { sql } from "@vercel/postgres";

export const createTableUsers = async () => {
  //TODO every question should be unique as well as the answer
  //REMEMBER TO BE VERY KEEN WHEN CONSTRUCTING MODELS
  try {
    const result =  await sql`CREATE TABLE IF  NOT EXISTS users
     (id  SERIAL PRIMARY KEY , email  varchar(255) NOT NULL UNIQUE , password varchar(255) NOT NULL UNIQUE 
     );`;
    console.log(result);
      if (!result?.rows ) throw new Error("Could not create table FAQs");
  } catch (error) {
      error instanceof Error && console.log(error.message);
  }
}