import { call, takeLatest, select, put } from "redux-saga/effects";
import { fetchGenres, fetchGenresError, fetchGenresSucces, selectGenres } from "./genresSlice";
import { getGenres } from "../../apiClient";

function* fetchGenresHandler() {
    try {
        const stateGenres = yield select(selectGenres);
        if (stateGenres.length === 0) {
            const genres = yield call(getGenres);
            yield put(fetchGenresSucces(genres));
        }
    } catch (error) {
        yield put(fetchGenresError());
        yield console.log(error);
    };
};

export function* genresSaga() {
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
};