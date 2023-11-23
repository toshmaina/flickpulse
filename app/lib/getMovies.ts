
const fetchMovies = async (searchTerm: string): Promise<Array<Movie>> => {

  return (await ((await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a82133d7&s=${searchTerm}`)).json())).Search;
};
export default fetchMovies;