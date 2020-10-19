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

    fetchPopularPeopleSucces: (state, { payload: people}) => {
      state.popularPeople = people;
      state.loading = false;
      state.error = false;
    },

    fetchPopularPeopleError: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const selectPopularPeopleState = state => state.popularPeople;
export const selectPopularPeople = state => selectPopularPeopleState(state).popularPeople;
export const { fetchPopularPeople, fetchPopularPeopleSucces, fetchPopularPeopleError } = popularPeopleSlice.actions;
export default popularPeopleSlice.reducer;
