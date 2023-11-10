   const { href: movieNight }: URL = new URL("../../public/assets/imgs/MovieNight.svg", import.meta.url);
 
const Unlimited = () => (
<section className="flex justify-between bg-black sm:px-16 px-8 sm:py-24 py-12 items-center max-lg:flex-col max-w-screen  my-0 mx-auto max-sm:mt-12  gap-10">
      <div className="flex flex-col flex-1">
        <h2 className=" text-4xl font-bold capitalize font-palanquin lg:max-w-lg ">
       We provide You
        <span className=" text-coral-red"> Super </span> 
        <span className=" text-coral-red">Quality</span> Shoes
        </h2>          
        <p className=" mt-4   lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
    Ensuring premium quality and style, our meticulously crafted footware is designed to elevate your experience ,providing you with unmatched quality,inovation ,and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7 "> 
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
        <button className="font-montserrat   bg-[#de593bee]  rounded-full  text-white  flex  justify-center items-center px-7 py-3      text-lg border-0  leading-none    h-fit">  
        Get Started 
    </button> 

        </div>
     
      </div>
        <div className="flex flex-1 items-center justify-center  ">
            <img src={movieNight} alt="movie night " className="object-contain" />
        </div>
         {/*  //width={570} height={522} */}

    </section>
  );


export default Unlimited;
