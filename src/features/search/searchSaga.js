import { debounce, put } from "redux-saga/effects";
import {
    getSearchQuery,
    setSearchQuery,
    resetSearchQuery,
} from "./searchSlice";

function* getSearchQueryHandler({ payload }) {
    try {
        yield put(setSearchQuery(payload));
    } catch (error) {
        yield put(resetSearchQuery());
        console.error(error);
    };
};

export function* searchSaga() {
    yield debounce(600, getSearchQuery.type, getSearchQueryHandler);
};