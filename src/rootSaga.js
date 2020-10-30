import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { peopleSaga } from "./features/people/peopleSaga";
import { genresSaga } from "./features/genres/genresSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
        genresSaga(),
    ]);
};