import React from "react";
import { useLocation } from "react-router-dom";
import { search as searchQueryParamName } from "../../../queryParamNames";
import { page as pageQueryParamName } from "../../../queryParamNames";
import { toMovies } from "../../../routes";
import { useQueryParameter, useReplaceQueryParameter } from "../../../useQueryParameters";
import { SearchInput } from "./styled";

const SearchPanel = () => {

    const location = useLocation();
    const replaceQueryParameter = useReplaceQueryParameter();
    const searchQuery = useQueryParameter(searchQueryParamName);

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: pageQueryParamName,
            value: "",
        });
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : "",
        });
    };

    return (
        <SearchInput
            placeholder={`Search for ${location.pathname.includes(toMovies()) ? "movies" : "people"}...`}
            value={searchQuery}
            onChange={onInputChange}
        />
    );
};

export default SearchPanel;