import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    popularPeople: [],
    loading: false,
    error: false,
    personData: {person: undefined, credits: undefined},
    genres: [],
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

    fetchPerson: (state) => {
      state.loading = true;
    },
    fetchPersonSucces: (state, { payload: personData }) => {
      state.personData = personData;
      state.loading = false;
      state.error = false;
    },
    fetchPersonError: (state) => {
      state.loading = false;
      state.error = true;
    },

    resetPerson: (state) => {
      state.personData = {person: undefined, credits: undefined};
      state.loading = false;
      state.error = false;
    },

    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
      state.loading = false;
      state.error = false;
  },
  },
});

export const selectPopularPeopleState = state => state.popularPeople;
export const selectPopularPeople = state => selectPopularPeopleState(state).popularPeople;
export const selectPopularPeopleLoadingState = state => selectPopularPeopleState(state).loading;
export const selectPopularPeopleErrorState = state => selectPopularPeopleState(state).error;
export const selectPerson = state => selectPopularPeopleState(state).personData.person;
export const selectPersonCredits = state => selectPopularPeopleState(state).personData.credits;
export const selectGenresFromPeople = state => selectPopularPeopleState(state).genres;
export const {
  fetchPopularPeople,
  fetchPopularPeopleSucces, 
  fetchPopularPeopleError, 
  resetPopularPeople,
  fetchPerson,
  fetchPersonSucces,
  fetchPersonError,
  resetPerson,
  setGenres,
} = popularPeopleSlice.actions;
export default popularPeopleSlice.reducer;
