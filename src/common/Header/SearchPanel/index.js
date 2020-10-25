import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { resetSearchQuery, getSearchQuery } from "../../../features/search/searchSlice";
import { search as searchQueryParamName } from "../../../queryParamNames";
import { page as pageQueryParamName } from "../../../queryParamNames";
import { toMovies } from "../../../routes";
import { useQueryParameter, useReplaceQueryParameter } from "../../../useQueryParameters";
import { SearchInput } from "./styled";

const SearchPanel = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const replaceQueryParameter = useReplaceQueryParameter();
    const searchQuery = useQueryParameter(searchQueryParamName);

    useEffect(() => {
        return () => {
            dispatch(resetSearchQuery())
        };
    }, [dispatch, location.pathname])

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: pageQueryParamName,
            value: "",
        });
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value,
        });
        dispatch(getSearchQuery(target.value))
    }

    return (
        <SearchInput
            placeholder={`Search for ${location.pathname.includes(toMovies()) ? "movies" : "people"}...`}
            value={searchQuery || ""}
            onChange={onInputChange}
        />
    );
};

export default SearchPanel;
