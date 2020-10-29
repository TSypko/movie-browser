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

            fetchGenresSucces: (state, payload) => {
                state.genres = payload;
                state.loading = false;
            },

            fetchGenresError: state => {
                state.loading = false;
                state.error = true;
            }
        },
    }
);

export const selectGenres = state => state.genres;
export const { fetchGenres, fetchGenresSucces, fetchGenresError } = genresSlice.actions;
export default genresSlice.reducer; 