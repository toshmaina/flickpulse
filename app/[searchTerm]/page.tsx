import { Metadata } from "next";
import MovieCard from "../components/MovieCard";
import fetchMovies from "../lib/getMovies";
import postSearchTerm from "../lib/postSearchTerm";



type Props = {
    params: {
        searchTerm:string 
    }
}
 export const generateMetadata = async ({ params: { searchTerm } }: Props): Promise<Metadata> => {
    const data: Promise<Array<Movie>> = fetchMovies(searchTerm);
     const movies = await data;
     
    return {
        title: Boolean(movies[0]['Title']) ? searchTerm : `${searchTerm} Not Found`,
        description: Boolean(movies[0]['Title']) ? `This is the page for ${searchTerm}` : `${searchTerm} cannot be displayed on this page`
    };
}; 


const movieResults = async  ({ params: { searchTerm } }: Props) => {
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


export default movieResults;
