import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    page: 1,
    totalPages: 500,
    popularPeobleByPage: [],
  },
  reducers: {
    getPopularPeople: () => {
      console.log("Method for Saga");
    },

    setPopularPeople: (state, action) => {
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.popularPeobleByPage = action.payload.results;
    },
  },
});

export const selectPopularPeople = state => state.popularPeople.popularPeobleByPage;
export const {getPopularPeople, setPopularPeople} = popularPeopleSlice.actions;
export const popularPeopleReducer = popularPeopleSlice.reducer;
