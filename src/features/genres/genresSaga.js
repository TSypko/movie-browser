import { takeLatest } from "redux-saga/effects";
import { fetchGenres } from "./genresSlice";

function* fetchGenresHandler(){
    yield console.log("You' are in saga");
};

export function* genresSaga() {
    yield takeLatest(fetchGenres.type, fetchGenresHandler)
};