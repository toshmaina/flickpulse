import Link from "next/link";
import { footerLinks } from "../constants";



const Footer = () => {
  return (
   <section className=' bg-black  bg-cover bg-center bg-no-repeat sm:px-16 px-8 pb-10 sm:pt-24  pt-12' id='contact-us'>
    <footer className=" max-w-[1440px] my-0 mx-auto">
      <div className="flex flex-1 items-start justify-between gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img  alt="footer Logo " className="ogject-contain" width={150} height={46} />
          </a>
        
{/*               <div className="flex flex-1 items-center mt-8 gap-5 ">
              {socialMedia.map(icon => {
                            const dynamicImgURL:string = new URL(`../assets/icons/${icon.src}`, import.meta.url ).href

                return (
          <div key={icon.src} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                    <img src={dynamicImgURL } alt={icon.alt} width={24} height={24} />
        </div>
         
        )})}
      </div> */}
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {
              footerLinks?.map(footLink => (
            <div key={footLink.title} className="text-white ">
              <h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6 ">{footLink.title}</h4>
           <ul>   
                    {
                      footLink.links.map(link => (
                
                <li key={link.name} className="text-white mt-3  font-medium leading-normal font-montserrat text-base hover:text-slate-gray cursor-pointer ">
                              <Link href={link.link!}>{link.name}</Link>
                </li>
               
               
              )
                              )}
                           
                          
                      </ul>
                        
            </div>
            
          ))}
        </div>
       
  
        </div>
         <p className="text-white mt-10 text-center  font-medium leading-normal font-montserrat text-base">FlickPulse Kenya</p>
      </footer>
       </section>
  );
}

export default Footer;
