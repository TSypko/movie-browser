import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchQuery: "",
    },
    reducers: {
        getSearchQuery: () => {
           
        },
        setSearchQuery: (state, {payload: query}) => {
            state.searchQuery = query;
        },
        resetSearchQuery: (state) => {
            state.searchQuery = "";
        },
    }
});

export const {
    getSearchQuery,
    setSearchQuery,
    resetSearchQuery
} = searchSlice.actions;

export const selectSearchState = state => state.searchQuery;
export const selectSearchQuery = state => selectSearchState(state).searchQuery;

export default searchSlice.reducer;