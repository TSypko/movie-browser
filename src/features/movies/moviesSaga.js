import { takeLatest, call, put } from "redux-saga/effects";
import { getPopularMovies, getMovie, getMovieCredits, searchForMovies } from "../../../src/apiClient";
import {
    fetchMovies,
    fetchMoviesSucces,
    fetchMoviesError,
    fetchMovieSucces,
    fetchMovieError,
    fetchMovie,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload }) {
    try {
        const movies = payload.query
            ? yield call(searchForMovies, payload.page, payload.query)
            : yield call(getPopularMovies, payload.page);
        yield put(fetchMoviesSucces(movies));
    } catch (error) {
        yield put(fetchMoviesError());
        console.error(error);
    }
};

function* fetchMovieHandler(action) {
    try {
        const movie = yield call(getMovie, action.payload);
        const credits = yield call(getMovieCredits, action.payload);
        yield put(fetchMovieSucces({ movie, credits }));
    } catch (error) {
        yield put(fetchMovieError());
        console.error(error);
    }
};

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
};