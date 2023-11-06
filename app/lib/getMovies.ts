/* const fetchMovies = async (searchTerm: string):Promise<Array<Movie>> => {
  console.log(searchTerm)
  const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a82133d7&s=${searchTerm}`);
  const data = await res.json();
  return data.Search;
}
export default fetchMovies; */
const fetchMovies = async (searchTerm: string): Promise<Array<Movie>> => {
  return (await ((await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a82133d7&s=${searchTerm}`)).json())).Search;
};
export default fetchMovies;