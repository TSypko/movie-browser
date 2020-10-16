import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
        error: false,
        genres: [],
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
        }
    }
});

export const {
    fetchPopularMovies,
    fetchPopularMoviesSucces,
    fetchPopularMoviesError,
    setGenres,
} = moviesSlice.actions;

export const selectMoviesState = state => state.movies;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectLoading = state => selectMoviesState(state).loading;
export const selectError = state => selectMoviesState(state).error;
export const selectGenres = state => selectMoviesState(state).genres;

export default moviesSlice.reducer;