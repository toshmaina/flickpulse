"use client"


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const { href: movieNight }: URL = new URL("../../public/assets/imgs/MovieNight.svg", import.meta.url);



const Unlimited = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return(
<section className="flex justify-between bg-black sm:px-16 px-8 sm:py-24 py-12 items-center max-lg:flex-col  max-w-[100%] w-full  my-0 mx-auto max-sm:mt-12  gap-10">
      <div  
       data-aos="fade-up"
          data-aos-duration="1500"
      className="flex flex-col flex-1">
        <h2 className=" text-4xl text-white font-bold capitalize font-palanquin lg:max-w-lg ">
        Enjoy
        <span className=" text-coral-red">  on your </span> TV
        </h2>          
        <p className=" mt-4   lg:max-w-lg font-montserrat text-white  text-lg leading-7">

Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-white text-lg leading-7 "> 
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
        <button className="font-montserrat   bg-[#de593bee]  rounded-full  text-white  flex  justify-center items-center px-7 py-3      text-lg border-0  leading-none    h-fit">  
        Get Started 
    </button> 

        </div>
     
      </div>
    <div
      data-aos="fade-down"
     
     data-aos-duration="1500"
      className="flex flex-1 items-center justify-center  ">
        <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" || movieNight} alt="movie night " className="" />
          <video data-uia="nmhp-card-animation-asset-video" autoPlay playsInline muted loop
          className="absolute top-[18.7%]   left-[15%]  -z-10"
          
          >
            
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />

            </video>
          
    </div>

         {/*  //width={570} height={522} */}

    </section>
  );}


export default Unlimited;
