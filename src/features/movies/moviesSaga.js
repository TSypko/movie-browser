import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getPopularMovies, getGenres, getMovie } from "../../../src/apiClient";
import { fetchPopularMovies, fetchPopularMoviesSucces, fetchPopularMoviesError, setGenres, fetchMovieSucces, fetchMovieError, fetchMovie } from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield delay(500);
        const popularMovies = yield call(getPopularMovies);
        const genres = yield call(getGenres);
        yield put(fetchPopularMoviesSucces(popularMovies));
        yield put(setGenres(genres));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        console.error(error);
    }
};

function* fetchMovieHandler(action) {
    try {
        yield delay(500);
        const movie = yield call(getMovie, action.payload);
        yield put(fetchMovieSucces(movie));
    } catch (error) {
        yield put(fetchMovieError());
        console.error(error);
    }
};

export function* moviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
};