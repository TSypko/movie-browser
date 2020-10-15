import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    page: 1,
    totalPages: 500,
    popularPeobleByPage: [],
    loading: false,
    error: false,
  },
  reducers: {
    getPopularPeople: state => {
      console.log("Method for Saga");
      //to be deleted after finish work with this slice
      state.loading = true;
    },

    setPopularPeople: (state, action) => {
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.popularPeobleByPage = action.payload.results;
      state.loading = false;
      state.error = false;
    },

    getPopularPeopleError: () => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const selectPopularPeople = state => state.popularPeople.popularPeobleByPage;
export const { getPopularPeople, setPopularPeople, getPopularPeopleError } = popularPeopleSlice.actions;
export default popularPeopleSlice.reducer;
