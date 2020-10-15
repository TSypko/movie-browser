import { takeLatest } from "redux-saga/effects";
import { getPopularPeople, setPopularPeople } from "./popularPeopleSlice";

const fetchFromApi = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    new Error(response.statusText);
  }
  return await response.json();
};

function* fetchPopularPeoplesHandler() {
  try {
    yield delay(500);
    const popularPeople = yield call(
      fetchFromApi(
        "https://api.themoviedb.org/3/person/popular?api_key=8b1e08fa98bbe27c329cdd337e163ed0&language=en-US&page=1"
      )
    );
    // to be replaced by a function prepared by Kasia
    yield put(setPopularPeople(popularPeople));
  } catch (error) {
    // yield put(fetchPopularPeopleError());
    console.log(error);
  }
}

export function* popularPeopleSaga() {
  yield takeLatest(getPopularPeople.type, fetchPopularPeoplesHandler);
}
