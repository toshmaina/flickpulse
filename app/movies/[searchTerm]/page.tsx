
import { getUser } from "@/app/lib/getKindeUser";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { Metadata } from "next";
import MovieCard from "../../components/MovieCard";
import fetchMovies from "../../lib/getMovies";
import postSearchTerm from "../../lib/postSearchTerm";

 export const generateMetadata = async ({ params: { searchTerm } }: ParamsProps): Promise<Metadata> => {
    const data: Promise<Array<Movie> | null> = fetchMovies(searchTerm);
     const movies = await data;
     const search = searchTerm.replaceAll("%20", " ");     
    return {
        title:Boolean(movies?.[0]?.['Title']) ? search : `${search} Not Found`,
        description: `${movies?.[0]?.['Title']} page` ??  `${search} cannot be displayed on this page`
    };
}; 

const MovieResults = async  ({ params: { searchTerm } }: ParamsProps) => {
    const data: Promise<Array<Movie>> = fetchMovies(searchTerm);
    const movies = await data;
    await postSearchTerm(searchTerm);
    const userData: Promise<KindeUser | null> = getUser();
    const user: KindeUser | null = await userData;
  return (
      <section className="relative flex flex-col flex-1 mt-4 mx-auto ">
          <div className="flex items-center justify-end text-lg font-palanquin m-4 p-2">
              {user?.given_name}
          </div>
          <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">     
              {
             movies?.[0]?.["imdbID"] ?   movies.map(({imdbID,Type,...data}:Movie) => (
                   <MovieCard key={imdbID} data={data}/>
             ))
                   : <p className="text-lg text-coral-red ">No movies</p>
             }
               
              
          </div>
      
    </section>
  )
}


export default MovieResults;
