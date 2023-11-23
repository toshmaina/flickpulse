
const Subscribe = () => {
  return (
            <div className="relative top-0 left-0 z-50 h-[80vh] bg-black  flex justify-center items-center  w-full">
                  <div className="lg:w-[40%]  flex bg-white   left-0  items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray  rounded-full ">
        <input className="input " type="text" name="subscribe" id="subscribe" placeholder="subscribe @FlickPulse for updates" />
      <div className="flex max-lg:justify-end items-center max-sm:w-full  ">

       <button className="font-montserrat   bg-[#de593bee]  rounded-full  text-white  flex  justify-center items-center px-7 py-3      text-lg border-0  leading-none    h-fit">  
        Get Started 
    </button> 
        </div>
        </div>
            </div>
  );
}

export default Subscribe;
