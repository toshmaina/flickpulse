"use client"


import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { landingPageImage } from "../carousel/page";
import { createTableUsers } from "../lib/createTableUsers";
import { postNewUserToTableUsers } from "../lib/postNewUserToUsers";
const page:React.FC =  () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    await createTableUsers()
    await postNewUserToTableUsers({  email, password })
    setPassword("")
    setEmail("")
    console.log("Success")
    console.log();
   
  };
  
  
  
    
  return (
     
          <>
             <img 
              width={500} height={500}
          alt="carousel1"
              src={landingPageImage} className="h-screen w-screen  " />
         
                    <div className="bg-gradient-radial w-screen h-screen    z-10   absolute top-0 left-0  from-black/0 via-black/50  to-black/100"/>
          <div className="absolute top-10 z-50  left-0  w-full flex  justify-between   items-center"></div> 
          <form action="" onSubmit={async (e) => await handleSubmit(e)} className="absolute text-white z-50 my-0 mx-auto   gap-4   top-[10%]  left-[40%] bg-black/80  w-[26rem] h-[75%] ">
              <h2 className="text-lg font-montserrat  text-center mt-5 ">Sign In</h2>
        <input
          value={email}
          onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          type="email"
          required
          className="bg-transparent h-12  w-[60%]  my-0  focus:placeholder:-translate-y-3  placeholder:absolute placeholder:z-50   placeholder:pb-0  focus:placeholder:text-xs   outline-0 ring-0    border-b-2   border-x-0 border-t-0  mt-10  ml-20  " placeholder="Email or Phone number " />
              <div className="flex items-center ">
          <input
             value={password}
          onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
            type={showPassword ? 'password' : 'text'} className="bg-transparent h-12  w-[60%]   focus:placeholder:-translate-y-3  placeholder:absolute placeholder:z-50   placeholder:pb-0  focus:placeholder:text-xs   outline-0 ring-0    border-b-2   border-x-0 border-t-0  mt-10  ml-20" placeholder="Password " />
                  <button type="button" className="absolute right-28  top-[12rem]   transition   " onClick={() => setShowPassword((showPassword) => !showPassword)}> {
                    showPassword ? <BsEye/> : <BsEyeSlash/>  
          }</button>
         
        </div>
        <div className=" mt-16  w-full flex items-center justify-center">
 <button type="submit" className="text-white rounded-md font-montserrat   bg-[#de593bee] py-2 px-4 w-[60%] "> Sign in</button>
        </div>
        <div className="flex items-center gap-20   mt-8 ml-20 ">
          <div className="flex items-center gap-2 ">
            <input type="checkbox" id="remember me" className="w-4 h-4 outline-none border-none bg-white  cursor-pointer"/>
            <label htmlFor="remember me" className="text-xs   ">Remember me</label>
          </div>
          <p className="text-xs hover:text-slate-gray"><Link href='/frequentlyaskedquestions' >Need Help? </Link></p>
</div>
          </form>
          </>
           

  );
}

export default page;
