
"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

interface Props {
  data:FAQs
}
const QuestionCard = ({data}:Props) => {
    const [toggle, setToggle] = useState<boolean>(true);
  const sign: string = !toggle ? "-" : "+";
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  const { id : position , question, answer } = data; 
  
  return (
           <div
          data-aos={`fade-${ position % 2  ? "right" : "left"}`} 
       data-aos-easing="linear"
          data-aos-duration="1500"
          
          className="flex hover:opacity-75 hover:cursor-pointer   flex-col w-[75%] mb-1.5  mx-auto bg-gray-900  border-0  rounded-none ">
             <div className="flex justify-between   ">
                <p className="mb-1  ml-4 mt-4  text-2xl font-[400] font-palanquin  text-white ">
                 {question}
              </p>
              <span   onClick={() => setToggle(!toggle)} className="text-7xl text-white  mx-4 ">{sign}</span>
                </div> 
      <p className={`mb-4 ${toggle && 'h-0 hidden'}   transition-all ml-4 mt-4 font-montserrat text-xl text-slate-gray font-[400] text-start  `}>
        {answer}
              </p>
             </div>
  );
}

export default QuestionCard;
