import { postNewUserToTableUsers } from "@/app/lib/postNewUserToUsers";

export const POST = async (request: Request) => {
    const {username, password} = await  request.json()
   return  await postNewUserToTableUsers(username, password);
} 