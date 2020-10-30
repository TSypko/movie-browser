import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: false,
    error: false,
    personData: { person: undefined, credits: undefined },
  },
  reducers: {
    fetchPeople: (state) => {
      state.loading = true;
    },
    fetchPeopleSucces: (state, { payload: people }) => {
      state.people = people;
      state.loading = false;
      state.error = false;
    },
    fetchPeopleError: state => {
      state.loading = false;
      state.error = true;
    },
    resetPeople: state => {
      state.people = [];
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
      state.personData = { person: undefined, credits: undefined };
      state.loading = false;
      state.error = false;
    },
  },
});

export const selectPeopleState = state => state.people;
export const selectPeople = state => selectPeopleState(state).people;
export const selectPeopleLoadingState = state => selectPeopleState(state).loading;
export const selectPeopleErrorState = state => selectPeopleState(state).error;
export const selectPerson = state => selectPeopleState(state).personData.person;
export const selectPersonCredits = state => selectPeopleState(state).personData.credits;
export const {
  fetchPeople,
  fetchPeopleSucces,
  fetchPeopleError,
  resetPeople,
  fetchPerson,
  fetchPersonSucces,
  fetchPersonError,
  resetPerson,
} = peopleSlice.actions;
export default peopleSlice.reducer;
