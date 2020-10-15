import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { popularPeopleSaga } from "./features/people/popularPeopleSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        popularPeopleSaga(),
    ]);
};