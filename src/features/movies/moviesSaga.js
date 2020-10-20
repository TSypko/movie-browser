import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getPopularMovies, getGenres, getMovie, getMovieCredits } from "../../../src/apiClient";
import { fetchPopularMovies, fetchPopularMoviesSucces, fetchPopularMoviesError, setGenres, fetchMovieSucces, fetchMovieError, fetchMovie } from "./moviesSlice";

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

function* fetchMovieHandler(action) {
    try {
        yield delay(500);
        const movie = yield call(getMovie, action.payload);
        const credits = yield call(getMovieCredits, action.payload);
        yield put(fetchMovieSucces({movie, credits}));
    } catch (error) {
        yield put(fetchMovieError());
        console.error(error);
    }
};

export function* moviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
};