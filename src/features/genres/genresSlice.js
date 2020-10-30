import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice(
    {
        name: "genres",
        initialState: {
            genres: [],
            loading: false,
            error: false,
        },
        reducers: {
            fetchGenres: state => {
                state.loading = true;
            },
            fetchGenresSucces: (state, { payload: genres }) => {
                state.genres = genres;
                state.loading = false;
            },
            fetchGenresError: state => {
                state.loading = false;
                state.error = true;
            }
        },
    }
);

export const selectGenresState = state => state.genres;
export const selectGenres = state => selectGenresState(state).genres;
export const { fetchGenres, fetchGenresSucces, fetchGenresError } = genresSlice.actions;
export default genresSlice.reducer; 