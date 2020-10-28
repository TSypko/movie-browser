import { takeLatest, call, put, select } from "redux-saga/effects";
import { getPopularMovies, getGenres, getMovie, getMovieCredits, searchForMovies } from "../../../src/apiClient";
import {
    fetchPopularMovies,
    fetchPopularMoviesSucces,
    fetchPopularMoviesError,
    setGenres,
    fetchMovieSucces,
    fetchMovieError,
    fetchMovie,
    resetMovies,
    resetMovie
} from "./moviesSlice";

function* fetchPopularMoviesHandler({ payload }) {
    try {
        yield put(resetMovies());
        const popularMovies = payload.query
            ? yield call(searchForMovies, payload.page, payload.query)
            : yield call(getPopularMovies, payload.page);
        yield put(fetchPopularMoviesSucces(popularMovies));
        
        const state = yield select();
        if (state.movies.genres.length === 0) {
            const genres = yield call(getGenres);
            yield put(setGenres(genres));
        }
    } catch (error) {
        yield put(fetchPopularMoviesError());
        console.error(error);
    }
};

function* fetchMovieHandler(action) {
    try {
        yield put(resetMovie());
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