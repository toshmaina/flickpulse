import { Metadata } from "next";

const { href: pageNotFound }: URL = new URL("../public/assets/imgs/pageNotFound.svg", import.meta.url);

export const metadata: Metadata ={
    title: "Page Not Found",
    description: "Page not found"
  }

const notFound = () => (
    <section className="bg-black w-screen h-screen   ">
    <div className="flex items-center justify-center mt-20 ">
      <img src={pageNotFound} width={500} height={500}   className="object-contain " />
   </div>
    </section>   
  );

export default notFound;
