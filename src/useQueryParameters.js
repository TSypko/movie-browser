import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (parameter) => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(parameter);
    return query;
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    return ({ key, value }) => {
        if (value === "") {
            searchParams.delete(key)
        }
        else {
            searchParams.set(key, value);
        }
        history.push(`${location.pathname}?${searchParams}`)
    };
};