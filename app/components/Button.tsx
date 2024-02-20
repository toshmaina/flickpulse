
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

import { getUser } from "../lib/getKindeUser";
const user: KindeUser | null = await getUser();
const Button = () =>
(user?.id ?
    <button
               
        className="text-white lg:mr-[14rem] mr-5 rounded-md font-montserrat   bg-[#de593bee] py-1.5 px-3 "> <LoginLink>Sign in</LoginLink></button>
    : <button
        className="text-white lg:mr-[14rem] mr-5 rounded-md font-montserrat   bg-[#de593bee] py-1.5 px-3 "> <LogoutLink>Sign out</LogoutLink></button>
);


export default Button;
