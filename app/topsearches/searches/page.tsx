import { getTopMovieSearches } from "@/app/lib/getTopMovieSearches";
const results = await getTopMovieSearches();
const page = () => {
    const content = (
        results?.map((result:{searchterm : string },i:number) => (
        
    <p key={i} className=" ml-5  text-start  text-lg font-montserrat font-[400] text-coral-red ">This is {result.searchterm}</p>
))
    )
    return content;
}

export default page;
