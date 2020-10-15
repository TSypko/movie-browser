import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getPopularMovies, getGenres } from "../../../src/apiClient";
import { fetchPopularMovies, fetchPopularMoviesSucces, fetchPopularMoviesError, setGenres } from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield delay(500);
        const popularMovies = yield call(getPopularMovies);
        const genres = yield call(getGenres);
        yield put(fetchPopularMoviesSucces(popularMovies));
        yield put(setGenres(genres));
    } catch (error) {
        yield put(fetchPopularMoviesError());
    }
};

export function* moviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
};