import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchQuery: "",
        searchIsOn: false,
    },
    reducers: {
        getSearchQuery: (state) => {
            state.searchIsOn = true;
        },
        setSearchQuery: (state, {payload: query}) => {
            state.searchQuery = query;
            state.searchIsOn = false;
        },
        resetSearchQuery: (state) => {
            state.searchQuery = "";
        },
        getSearchIson: () => { 
        }
    }
});

export const {
    getSearchQuery,
    setSearchQuery,
    resetSearchQuery
} = searchSlice.actions;

export const selectSearchState = state => state.searchQuery;
export const selectSearchQuery = state => selectSearchState(state).searchQuery;
export const selectSearchIsOn = state => selectSearchState(state).searchIsOn;

export default searchSlice.reducer;