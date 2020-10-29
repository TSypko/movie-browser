import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice(
    {
        name: "genres",
        initialState: [],
        reducers: {
            setGenres: (state, payload) => {
                state = payload;
            },
        },
    }
);

export const selectGenres = state => state.genres;
export const { setGenres } = genresSlice.actions;
export default genresSlice.reducer; 