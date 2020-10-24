import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
        error: false,
        genres: [],
        movie: undefined,
        moviesSearchQuery: null,
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
        fetchMovieSucces: (state, { payload: movie }) => {
            state.movie = movie;
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
        getMoviesSearchQuery: () => { 
        },
        setMoviesSearchQuery: (state, { payload: moviesSearchQuery }) => {
            state.moviesSearchQuery = moviesSearchQuery;
        },
        resetMoviesSearchQuery: state => {
            state.moviesSearchQuery = null;
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
    searchMoviesByQuery,
    searchMoviesByQuerySucces,
    searchMoviesByQueryError,
    getMoviesSearchQuery,
    setMoviesSearchQuery,
    resetMoviesSearchQuery
} = moviesSlice.actions;

export const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectError = state => selectMoviesState(state).error;
export const selectGenres = state => selectMoviesState(state).genres;
export const selectMovie = state => selectMoviesState(state).movie;
export const selectMoviesSearchQuery = state => selectMoviesState(state).moviesSearchQuery;

export default moviesSlice.reducer;