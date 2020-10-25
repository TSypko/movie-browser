import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    popularPeople: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.loading = true;
    },
    fetchPopularPeopleSucces: (state, { payload: people }) => {
      state.popularPeople = people;
      state.loading = false;
      state.error = false;
    },
    fetchPopularPeopleError: state => {
      state.loading = false;
      state.error = true;
    },
    resetPopularPeople: state => {
      state.popularPeople = [];
      state.loading = false;
      state.error = false;
    },
    searchPopularPeopleByQuery: (state) => {
      state.loading = true;
    },
    searchPopularPeopleSucces: (state, { payload: popularPeopleByQuery }) => {
      state.popularPeople = popularPeopleByQuery;
      state.loading = false;
      state.error = false;
    },
    searchPopularPeopleByQueryError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const selectPopularPeopleState = state => state.popularPeople;
export const selectPopularPeople = state => selectPopularPeopleState(state).popularPeople;
export const selectPopularPeopleLoadingState = state => selectPopularPeopleState(state).loading;
export const selectPopularPeopleErrorState = state => selectPopularPeopleState(state).error;
export const {
  fetchPopularPeople,
  fetchPopularPeopleSucces,
  fetchPopularPeopleError,
  resetPopularPeople,
  searchPopularPeopleByQuery,
  searchPopularPeopleSucces,
  searchPopularPeopleByQueryError
} = popularPeopleSlice.actions;
export default popularPeopleSlice.reducer;
