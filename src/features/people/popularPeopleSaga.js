import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchPopularPeople, fetchPopularPeopleSucces, fetchPopularPeopleError } from "./popularPeopleSlice";
import { getPopularPeople, searchForPeople } from "../../../src/apiClient";

function* fetchPopularPeopleHandler({ payload }) {
  try {
    const people = payload.query
      ? yield call(searchForPeople, payload.page, payload.query)
      : yield call(getPopularPeople, payload.page);
    yield delay(500);
    yield put(fetchPopularPeopleSucces(people));
  } catch (error) {
    yield put(fetchPopularPeopleError());
    console.error(error);
  }
}

export function* popularPeopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
}
