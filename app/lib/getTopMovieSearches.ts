export const getTopMovieSearches = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/searches/topSearches`);
    if (!res.ok) throw new Error(`Error fetching`);
    const data = await res.json();
    const result = await data.result.rows;
    return result;
  } catch (error) {
    error instanceof Error && console.log(error.message);
    
  }
}
/*   interface MoviesType{
    data: string ,
    getMovies: () => string,
}; 
class Movies implements MoviesType {
  data: string;
  constructor(data: string) {
     this.data = data;
  }
   getMovies() {
    return `${this.data}` ;
  }
}
const movies = new Movies("Hello World"); */
   /*  return await (await ((await fetch(`http://localhost:3000/api/searches/searchdb`)).json())).result.rows; */

     /*  return (await ((await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a82133d7&s=${searchTerm}`)).json())).result.rows;
*/
