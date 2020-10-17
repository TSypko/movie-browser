import { takeLatest, call, put } from "redux-saga/effects";
import { fetchPopularPeople, fetchPopularPeopleSucces, fetchPopularPeopleError } from "./popularPeopleSlice";
import { getPopularPeople } from "../../../src/apiClient";

function* fetchPopularPeoplesHandler({ payload }) {
  try {
    const page = payload;
    const popularPeople = yield call(getPopularPeople, page);
    yield put(fetchPopularPeopleSucces(popularPeople));
  } catch (error) {
    yield put(fetchPopularPeopleError());
    console.error(error);
  }
}

export function* popularPeopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeoplesHandler);
}
