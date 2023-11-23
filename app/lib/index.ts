import addUniqueConstraint from "./addUniqueConstraint";
import { createTableFAQs } from "./createTableFAQs";
import { getFrequentlyAskedQuestions } from "./getFrequentlyAskedQuestions";
import fetchMovies from "./getMovies";
import { getTopMovieSearches } from "./getTopMovieSearches";
import { postQuesionsToFAQsTable } from "./postFAQs";
import postSearchTerm from "./postSearchTerm";

export {
    addUniqueConstraint,
    createTableFAQs, fetchMovies, getFrequentlyAskedQuestions, getTopMovieSearches,
    postQuesionsToFAQsTable,
    postSearchTerm
};
