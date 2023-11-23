"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const WatchFromAnyWhere = () => {

  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
      
<section className="flex justify-between bg-black sm:px-16 px-8 sm:py-24 py-12 items-center max-lg:flex-col max-w-screen  my-0 mx-auto max-sm:mt-12  gap-10">
        <div
          
         data-aos="zoom-in-up"
            data-aos-duration="1500"
         data-aos-easing="linear"
          className="flex flex-col flex-1">
        <h2 className=" text-4xl text-white font-bold capitalize font-palanquin lg:max-w-lg ">
       Watch 
        <span className=" text-coral-red"> everywhere  </span> 
        </h2>          
        <p className=" mt-4   lg:max-w-lg font-montserrat text-white  text-lg leading-7">

Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-white  text-lg leading-7 "> 
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
        <button className="font-montserrat   bg-[#de593bee]  rounded-full  text-white  flex  justify-center items-center px-7 py-3      text-lg border-0  leading-none    h-fit">  
        Get Started 
    </button> 

        </div>
     
      </div>
        <div
          
          data-aos="zoom-in-down"
            data-aos-duration="1500"
         data-aos-easing="linear"
          
          className="flex flex-1 items-center justify-center  ">
          <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-ke.png"} alt="movie night " className="z-5 " />
          <video
            
          className="absolute  -z-50 top-10  w-96  h-auto"
            data-uia="nmhp-card-animation-asset-video" autoPlay playsInline muted loop >
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-ke.m4v" type="video/mp4" />
          </video>
        </div>
         {/*  //width={570} height={522} */}
{/*  <hr  className="h-4 w-full  bg-gray-500  absolute bottom-0 left-0  bg-red "/> */}
        </section>
        
  );
}

export default WatchFromAnyWhere;
