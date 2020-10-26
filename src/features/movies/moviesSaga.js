import { takeLatest, call, put, debounce } from "redux-saga/effects";
import { getPopularMovies, getGenres, getMovie, searchForMovies, getMovieCredits } from "../../../src/apiClient";
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
    searchMoviesByQueryError,
} from "./moviesSlice";

function* fetchPopularMoviesHandler({ payload }) {
    try {
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
        const movie = yield call(getMovie, payload);
        const credits = yield call(getMovieCredits, payload);
        yield put(fetchMovieSucces({movie, credits}));

    } catch (error) {
        yield put(fetchMovieError());
        console.error(error);
    };
};

function* searchMoviesByQueryHandler({ payload }) {
    try {
        const movies = yield call(searchForMovies, payload.page, payload.query);
        const genres = yield call(getGenres);
        yield put(setGenres(genres));
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