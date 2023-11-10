
type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};
type ErrorPage = {
    error: Error & {
        digest?: string
    },
    reset?: () => void
};
type ParamsProps = {
    params: {
        searchTerm:string 
    }
}