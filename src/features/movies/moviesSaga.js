import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getPopularMovies, getGenres } from "../../../src/apiClient";
import { fetchPopularMovies, fetchPopularMoviesSucces, fetchPopularMoviesError, setGenres } from "./moviesSlice";

function* fetchPopularMoviesHandler({ payload }) {
    try {
        yield delay(500);
        const page = payload;
        const popularMovies = yield call(getPopularMovies, page);
        const genres = yield call(getGenres);
        yield put(fetchPopularMoviesSucces(popularMovies));
        yield put(setGenres(genres));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        console.error(error);
    }
};

export function* moviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
};