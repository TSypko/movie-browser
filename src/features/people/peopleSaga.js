import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchPeople,
  fetchPeopleSucces,
  fetchPeopleError,
  fetchPerson,
  fetchPersonError,
  fetchPersonSucces,
} from "./peopleSlice";
import { getPopularPeople, getPerson, getPersonCredits, searchForPeople } from "../../apiClient";

function* fetchPeopleHandler({ payload }) {
  try {
    const people = payload.query
      ? yield call(searchForPeople, payload.page, payload.query)
      : yield call(getPopularPeople, payload.page);
    yield put(fetchPeopleSucces(people));
  } catch (error) {
    yield put(fetchPeopleError());
    console.error(error);
  }
}

function* fetchPersonHandler(action) {
  try {
    const person = yield call(getPerson, action.payload);
    const credits = yield call(getPersonCredits, action.payload);
    yield put(fetchPersonSucces({ person, credits }));
  } catch (error) {
    yield put(fetchPersonError());
    console.error(error);
  };
};

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
};
