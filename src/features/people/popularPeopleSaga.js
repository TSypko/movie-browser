import { takeLatest, call, put } from "redux-saga/effects";
import { getPopularPeople, setPopularPeople, getPopularPeopleError } from "./popularPeopleSlice";

function* fetchPopularPeoplesHandler() {
  try {
    // to be replaced by a function prepared by Kasia - function should get page number from Pagiation component
    const popularPeople = yield call();
    yield put(setPopularPeople(popularPeople));
  } catch (error) {
    yield put(getPopularPeopleError());
    console.error(error);
  }
}

export function* popularPeopleSaga() {
  yield takeLatest(getPopularPeople.type, fetchPopularPeoplesHandler);
}
