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
     await  postSearchTerm(searchTerm);
  return (
      <section className="relative flex flex-col flex-1 mt-10 mx-auto ">
          <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">     
              {
             movies ?   movies.map((movie,index) => (
                   <MovieCard key={index} data={movie}/>
             ))
                   : <p className="text-lg text-coral-red ">No movies</p>
             }
               
              
          </div>
      
    </section>
  )
}


export default MovieResults;
