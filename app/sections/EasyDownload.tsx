"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EasyDownload = () => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
      <section className="flex justify-between bg-black sm:px-16 px-8 sm:py-24 py-12 items-center max-lg:flex-col max-w-screen  my-0 mx-auto max-sm:mt-12  gap-10">
      <div
        data-aos="fade-right"
        
        data-aos-duration="1500"
         data-aos-easing="linear"
     data-aos-anchor-placement="top-bottom"
        className="flex flex-1 flex-col  items-center    ">
        <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"} alt="movie night " className="" />
        < img  className=" relative top-2  left-0  h-12 w-10  " alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
        </div>
      <div
        
        data-aos="fade-left"
        
        data-aos-duration="1500"
         data-aos-easing="linear"
     data-aos-anchor-placement="center-bottom"
        className="flex flex-col flex-1">
        <h2 className=" text-4xl text-white  font-bold capitalize font-palanquin lg:max-w-lg ">
       
          <span className=" text-coral-red"> Download  </span>
           your shows to watch offline
        </h2>          
        <p className=" mt-4   lg:max-w-lg font-montserrat text-white  text-lg leading-7">

Save your favorites easily and always have something to watch.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-white  text-lg leading-7 "> 
         
        </p>
        <div className="mt-11">
        <button className="font-montserrat   bg-[#de593bee]  rounded-full  text-white  flex  justify-center items-center px-7 py-3      text-lg border-0  leading-none    h-fit">  
        Get Started 
    </button> 

        </div>
     
      </div>
       {/* <hr  className="h-4 w-full  bg-gray-500  absolute bottom-0 left-0  bg-red "/> */}
         {/*  //width={570} height={522} */}

    </section>
  );
}

export default EasyDownload;
