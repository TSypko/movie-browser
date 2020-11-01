import { takeLatest, call, put } from "redux-saga/effects";
import { getPopularMovies, getMovie, getMovieCredits, searchForMovies } from "../../../src/apiClient";
import {
    fetchPopularMovies,
    fetchPopularMoviesSucces,
    fetchPopularMoviesError,
    fetchMovieSucces,
    fetchMovieError,
    fetchMovie,
} from "./moviesSlice";

function* fetchPopularMoviesHandler({ payload }) {
    try {
        const popularMovies = payload.query
            ? yield call(searchForMovies, payload.page, payload.query)
            : yield call(getPopularMovies, payload.page);
        yield put(fetchPopularMoviesSucces(popularMovies));
    } catch (error) {
        yield put(fetchPopularMoviesError());
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
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
};