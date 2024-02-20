import { getTopMovieSearches } from "@/app/lib/getTopMovieSearches";
import { FC as FunctionalComponent } from "react";
const results = await getTopMovieSearches();
interface Results {
    searchterm: string;
}
const page:FunctionalComponent = () => {
    const content : React.ReactNode = (
        results?.map((result:Results,i:number) => (
        
    <p key={i} className=" ml-5  text-start  text-lg font-montserrat font-[400] text-coral-red ">This is {result.searchterm}</p>
))
    )
    return content;
}

export default page;
