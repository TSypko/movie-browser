import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearchQuery } from "../../../features/search/searchSlice";
import { search as searchQueryParamName } from "../../../queryParamNames";
import { page as pageQueryParamName } from "../../../queryParamNames";
import { useQueryParameter, useReplaceQueryParameter } from "../../../useQueryParameters";
import { SearchInput } from "./styled";

const SearchPanel = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const replaceQueryParameter = useReplaceQueryParameter();
    const searchQuery = useQueryParameter(searchQueryParamName);

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
    };

    return (
        <SearchInput
            placeholder={`Search for ${location.pathname.substring(1)}...`}
            value={searchQuery || ""}
            onChange={onInputChange}
        />
    );
};

export default SearchPanel;
