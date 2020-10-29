import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
        error: false,
        movieData: { movie: undefined, credits: undefined },
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

        fetchMovie: (state) => {
            state.loading = true;
        },

        fetchMovieSucces: (state, { payload: movieData }) => {
            state.movieData = movieData;
            state.loading = false;
            state.error = false;
        },

        resetMovie: (state) => {
            state.movieData = { movie: undefined, credits: undefined };
            state.loading = false;
            state.error = false;
        },

        fetchMovieError: (state) => {
            state.loading = false;
            state.error = true;
        },
        resetMovies: (state) => {
            state.movies = [];
        },
    }
});

export const {
    fetchPopularMovies,
    fetchPopularMoviesSucces,
    fetchPopularMoviesError,
    fetchMovie,
    fetchMovieSucces,
    fetchMovieError,
    resetMovies,
    resetMovie,
} = moviesSlice.actions;

export const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectError = state => selectMoviesState(state).error;
export const selectMovie = state => selectMoviesState(state).movieData.movie;
export const selectMovieCredits = state => selectMoviesState(state).movieData.credits;

export default moviesSlice.reducer;