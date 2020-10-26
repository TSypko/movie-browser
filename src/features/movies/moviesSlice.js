import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
        error: false,
        genres: [],
        movieData: {movie: undefined, credits: undefined},
    },
    reducers: {
        fetchPopularMovies: (state) => {
            state.loading = true;
        },
        fetchPopularMoviesSucces: (state, { payload: movies }) => {
            state.movies = movies;
            state.loading = false;
            state.error = false;
        },
        fetchPopularMoviesError: (state) => {
            state.loading = false;
            state.error = true;
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
            state.loading = false;
            state.error = false;
        },
        fetchMovie: (state) => {
            state.loading = true;
        },
        fetchMovieSucces: (state, { payload: movieData }) => {
            state.movieData = movieData;
            state.loading = false;
            state.error = false;
        },
        fetchMovieError: (state) => {
            state.loading = false;
            state.error = true;
        },

        searchMoviesByQuery: (state) => {
            state.loading = true;
        },
        searchMoviesByQuerySucces: (state, { payload: moviesByQuery }) => {
            state.movies = moviesByQuery;
            state.loading = false;
            state.error = false;
        },
        searchMoviesByQueryError: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
});

export const {
    fetchPopularMovies,
    fetchPopularMoviesSucces,
    fetchPopularMoviesError,
    setGenres,
    fetchMovie,
    fetchMovieSucces,
    fetchMovieError,
    resetMovie,
    searchMoviesByQuery,
    searchMoviesByQuerySucces,
    searchMoviesByQueryError,
    getMoviesSearchQuery,
    setMoviesSearchQuery,
} = moviesSlice.actions;

export const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectError = state => selectMoviesState(state).error;
export const selectGenres = state => selectMoviesState(state).genres;
export const selectMovie = state => selectMoviesState(state).movieData.movie;
export const selectMovieCredits = state => selectMoviesState(state).movieData.credits;

export default moviesSlice.reducer;