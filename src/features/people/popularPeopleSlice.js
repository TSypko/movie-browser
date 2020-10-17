import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    popularPeopleByPage: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.loading = true;
    },

    fetchPopularPeopleSucces: (state, { payload: people}) => {
      state.popularPeobleByPage = people;
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
export const selectPopularPeople = state => selectPopularPeopleState(state).popularPeobleByPage;
export const { fetchPopularPeople, fetchPopularPeopleSucces, fetchPopularPeopleError } = popularPeopleSlice.actions;
export default popularPeopleSlice.reducer;
