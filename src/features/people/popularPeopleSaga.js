import { takeLatest, call, put, debounce } from "redux-saga/effects";
import {
  fetchPopularPeople,
  fetchPopularPeopleSucces,
  fetchPopularPeopleError,
  searchPopularPeopleByQuery,
  searchPopularPeopleSucces,
  searchPopularPeopleByQueryError
} from "./popularPeopleSlice";
import { getPopularPeople, searchForPeople } from "../../../src/apiClient";

function* fetchPopularPeopleHandler({ payload }) {
  try {
    const page = payload;
    const popularPeople = yield call(getPopularPeople, page);
    yield put(fetchPopularPeopleSucces(popularPeople));
  } catch (error) {
    yield put(fetchPopularPeopleError());
    console.error(error);
  };
};

function* searchPopularPeopleByQueryHandler({ payload }) {
  try {
    const people = yield call(searchForPeople, payload.page, payload.query);
    yield put(searchPopularPeopleSucces(people));
  } catch (error) {
    yield put(searchPopularPeopleByQueryError());
    console.error(error);
  };
};

export function* popularPeopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield debounce(600, searchPopularPeopleByQuery.type, searchPopularPeopleByQueryHandler);
};
