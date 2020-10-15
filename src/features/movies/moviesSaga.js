import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getPopularMovies } from "../../apiClient";
import { fetchPopularMovies, fetchPopularMoviesSucces, fetchPopularMoviesError } from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield delay(500);
        const popularMovies = yield call(getPopularMovies);
        yield put(fetchPopularMoviesSucces(popularMovies));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
};

export function* moviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
};