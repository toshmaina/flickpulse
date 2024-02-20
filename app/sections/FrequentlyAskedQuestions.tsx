
import QuestionCard from "../components/QuestionCard";
import { getFrequentlyAskedQuestions } from "../lib/getFrequentlyAskedQuestions";
const faqs: Array<FAQs> = await getFrequentlyAskedQuestions() as Array<FAQs>;


const FrequentlyAskedQuestions = () => {
  return (
    <section className="mt-0 pb-24  w-full    relative flex flex-col  top-0 left-0  bg-black   ">
          <div className="mx-20  mb-10 ">
         
        <div data-aos="fade-right"
     data-aos-easing="linear"
          data-aos-duration="1500">
          
 <h2 className="text-white text-center my-0 mx-auto text-4xl font-bold capitalize font-palanquin lg:max-w-lg ">
           Frequently 
        <span className=" text-coral-red"> Asked  </span> Questions
        </h2>
</div>
          
      </div>
      {
       Array.isArray(faqs) &&  faqs?.map(faq => <QuestionCard key={faq.id} data={faq}/> )
      }     
    </section>
  );
}

export default FrequentlyAskedQuestions;
