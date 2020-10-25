import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { popularPeopleSaga } from "./features/people/popularPeopleSaga";
import { searchSaga } from "./features/search/searchSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        popularPeopleSaga(),
        searchSaga(),
    ]);
};