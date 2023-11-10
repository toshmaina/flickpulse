"use client"

import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Hero = () => {
 
  const {href: carousel}: URL  = new URL("../../public/assets/imgs/Greater_Goodies.jpg", import.meta.url)
  const { href: carousel3 }: URL = new URL("../../public/assets/imgs/The_Ultimate.jpg", import.meta.url); 
  const { href: carousel2 }: URL = new URL("../../public/assets/imgs/carousel3.jpg", import.meta.url);
 // const isInternetConnected:boolean   = window.navigator?.onLine;
    return (
       <div  className="">
        <Carousel
            autoPlay
            infiniteLoop
            showIndicators={false}
            showStatus={false}
           showThumbs={false}
            interval={2000}
            className="">
                <div className="   ">
            <img
          
              src={`${"https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/301c9da4-1628-47e9-9eb7-ead9a024147e/KE-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg" ?? carousel} `} className="h-screen w-screen  " />
         
                    <div className="bg-gradient-radial w-screen h-screen    z-10   absolute top-0 left-0  from-black/0 via-black/50  to-black/100"/>
                    <div className="absolute top-10 z-50  left-0  w-full flex  justify-between   items-center">
              <p className=" text-[#de593bee]  text-6xl ml-5   lg:ml-[15rem] font-bold   font-palanquin  "> <Link href="/carousel">FlickPulse</Link> </p> 
              <button className="text-white lg:mr-[14rem] mr-5 rounded-md font-montserrat   bg-[#de593bee] py-2 px-4 ">Sign in </button>
                </div>
                <div className="absolute top-[35%] z-50 w-full text-center    left-0   ">
                  <p className="text-6xl text-white    font-bold font-palanquin max-sm:text-[72px] py-8 max-sm:leading-[82px]">
                Streaming The <span className="text-[#de593bee]"> Movie </span>  World   </p> 
              <p className=" font-montserrat text-white font-semibold text-2xl">
                ultimate destination for all things cinema,
                 <br />
                best movies and TV shows for streaming
               
               
              </p>
                 
            </div>  
            <div className="absolute bottom-[20%] z-50  flex justify-center items-center  w-full">
                  <div className="lg:w-[40%]  flex bg-white   left-0  items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray  rounded-full ">
        <input className="input " type="text" name="subscribe" id="subscribe" placeholder="subscribe @FlickPulse for updates" />
      <div className="flex max-lg:justify-end items-center max-sm:w-full  ">

       <button className="font-montserrat   bg-[#de593bee]  rounded-full  text-white  flex  justify-center items-center px-7 py-3      text-lg border-0  leading-none    h-fit">  
        Get Started 
    </button> 
        </div>
        </div>
            </div>
            <hr  className="h-4 w-full  bg-gray-500  absolute bottom-0 left-0  bg-red "/>
                </div>
                <div >
                
                    <img src={carousel2} width={500} height={500} className=" w-screen h-screen  object-center" /> 
            <div className="bg-gradient-radial w-screen h-screen   z-10  absolute top-0 left-0  from-black/0 via-black/50  to-black/100" />
             <div className="absolute top-[35%] z-50    left-[10%]  ">
                  <p className="text-8xl text-white  font-bold font-palanquin max-sm:text-[72px] pt-8 max-sm:leading-[82px]">
                        Streaming The  Movie  World
                   </p> 
                </div>   
                        
                <hr  className="h-4 w-full  bg-gray-500  absolute bottom-0 left-0  bg-red "/>
         
              </div>
                <div >
                
                    <img src={carousel3} width={500} height={500} className=" w-screen h-screen  object-center" /> 
            <div className="bg-gradient-radial w-screen h-screen   z-10  absolute top-0 left-0  from-black/0 via-black/50  to-black/100" />
             <div className="absolute top-[35%] z-50    left-[10%]  ">
                  <p className="text-8xl text-white  font-bold font-palanquin max-sm:text-[72px] pt-8 max-sm:leading-[82px]">
                        Streaming The  Movie  World
                   </p> 
                </div>   
                  <hr  className="h-4 w-full  bg-gray-500  absolute bottom-0 left-0  bg-red "/>
         
                           
          </div>
               
        </Carousel>
   
            
       </div>
       
 );
};

export default Hero;
