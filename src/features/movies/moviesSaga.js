import { takeLatest, call, put, delay, debounce } from "redux-saga/effects";
import { getPopularMovies, getGenres, getMovie, searchForMovies } from "../../../src/apiClient";
import {
    fetchPopularMovies,
    fetchPopularMoviesSucces,
    fetchPopularMoviesError,
    setGenres,
    fetchMovieSucces,
    fetchMovieError,
    fetchMovie,
    searchMoviesByQuery,
    searchMoviesByQuerySucces,
    searchMoviesByQueryError
} from "./moviesSlice";

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
    };
};

function* fetchMovieHandler({ payload }) {
    try {
        yield delay(500);
        const movie = yield call(getMovie, payload);
        yield put(fetchMovieSucces(movie));
    } catch (error) {
        yield put(fetchMovieError());
        console.error(error);
    };
};

function* searchMoviesByQueryHandler({ payload }) {
    try {
        const movies = yield call(searchForMovies, payload.page, payload.query);
        yield put(searchMoviesByQuerySucces(movies));
    } catch (error) {
        yield put(searchMoviesByQueryError());
        console.error(error);
    };
};

export function* moviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
    yield debounce(600, searchMoviesByQuery.type, searchMoviesByQueryHandler);
};