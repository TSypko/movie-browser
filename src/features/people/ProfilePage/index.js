import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, selectPerson, selectPersonCredits, selectPopularPeopleLoadingState, selectPopularPeopleErrorState, resetPerson } from "../popularPeopleSlice";
import Main from "../../../common/Main";
import LoadingSpinner from "../../../common/LoadingSpinner";
import ErrorPage from "../../../common/ErrorPage";
import PeopleTile from "../../../common/PeopleTile";

const ProfilePage = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const person = useSelector(selectPerson);
    const credits = useSelector(selectPersonCredits);
    const loading = useSelector(selectPopularPeopleLoadingState);
    const error = useSelector(selectPopularPeopleErrorState);

    useEffect(() => {
        dispatch(fetchPerson(params.id))
        return(()=>dispatch(resetPerson()))
    }, [dispatch, params])

    console.log(params);
    return (
        <>
            {loading && <LoadingSpinner />}
            {error && <ErrorPage />}
            {person && <Main>
                <PeopleTile
                    horizontal={true}
                    name={person.name}
                    birthDate={person.birthday}
                    poster={person.profile_path}
                    birthCity={person.place_of_birth}
                    description={person.biography}
                />
            </Main>
            }
        </>
    )
}

export default ProfilePage;
