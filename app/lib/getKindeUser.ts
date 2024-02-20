import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getUser = async ():Promise<KindeUser |null > => {

      const {getUser} = getKindeServerSession()
       const user = await getUser();
       return user;

}
