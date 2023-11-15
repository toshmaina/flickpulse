
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
        searchTerm: string
    }
};
type apiFunction = (req: NextRequest, res: NextResponse) => Promise<NextResponse<Error> | NextResponse<{ result: QueryResult<QueryResultRow>; }>>