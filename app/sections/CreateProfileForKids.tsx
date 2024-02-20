"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CreateProfileForKids = () => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      
    
      
      className="flex justify-between bg-black sm:px-16 px-8 sm:py-24 py-12 items-center max-lg:flex-col max-w-screen  my-0 mx-auto max-sm:mt-12  gap-10">
      <div
          data-aos="fade-down"
          data-aos-duration="1500"
        
        className="flex flex-1 items-center justify-center  ">
            <img   src={"https://occ-0-2435-32.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"  } alt="movie night " className="object-contain" />
        </div>
      <div
             data-aos="fade-up"
          data-aos-duration="1500"
        
        className="flex flex-col flex-1">
        <h2 className=" text-4xl font-bold text-white  capitalize font-palanquin lg:max-w-lg ">
        <span className=" text-coral-red">  Create profiles </span> for kids 
        </h2>          
        <p className=" mt-4   lg:max-w-lg font-montserrat text-white  text-lg leading-7">
Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-white  text-lg leading-7 "> 
        </p>
        <div className="mt-11">
        <button className="font-montserrat   bg-[#de593bee]  rounded-full  text-white  flex  justify-center items-center px-7 py-3      text-lg border-0  leading-none    h-fit">  
        Get Started 
    </button> 

        </div>
     
      </div>
       
          {/*  <hr  className="h-4 w-full  bg-gray-500  absolute bottom-0 left-0  bg-red "/> */}
         {/*  //width={570} height={522} */}

    </section>
  );
}

export default CreateProfileForKids;
