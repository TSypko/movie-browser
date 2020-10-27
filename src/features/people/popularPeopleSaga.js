import { takeLatest, call, put, delay } from "redux-saga/effects";
import { 
  fetchPopularPeople, 
  fetchPopularPeopleSucces, 
  fetchPopularPeopleError, 
  fetchPerson, 
  fetchPersonError, 
  fetchPersonSucces } from "./popularPeopleSlice";
import { getPopularPeople, getPerson, getPersonCredits } from "../../../src/apiClient";

function* fetchPopularPeopleHandler({ payload }) {
  try {
    const page = payload;
    const popularPeople = yield call(getPopularPeople, page);
    yield delay(500);
    yield put(fetchPopularPeopleSucces(popularPeople));
  } catch (error) {
    yield put(fetchPopularPeopleError());
    console.error(error);
  }
}

function* fetchPersonHandler(action) {
  try {
      yield delay(500);
      const person = yield call(getPerson, action.payload);
      yield console.log(person);
      const credits = yield call(getPersonCredits, action.payload);
      yield put(fetchPersonSucces({person, credits}));
  } catch (error) {
      yield put(fetchPersonError());
      console.error(error);
  }
};

export function* popularPeopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
}
