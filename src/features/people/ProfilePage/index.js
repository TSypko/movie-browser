import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, selectPerson, selectPersonCredits, selectPopularPeopleLoadingState, selectPopularPeopleErrorState, resetPerson } from "../popularPeopleSlice";
import Main from "../../../common/Main";
import LoadingSpinner from "../../../common/LoadingSpinner";
import ErrorPage from "../../../common/ErrorPage";
import PeopleTile from "../../../common/PeopleTile";
import Tile from "../../../common/Tile";
import Section from "../../../common/Section";

const ProfilePage = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const person = useSelector(selectPerson);
    const credits = useSelector(selectPersonCredits);
    const loading = useSelector(selectPopularPeopleLoadingState);
    const error = useSelector(selectPopularPeopleErrorState);

    useEffect(() => {
        dispatch(fetchPerson(params.id))
        return (() => dispatch(resetPerson()))
    }, [dispatch, params])

    return (
        <>
            {loading && <LoadingSpinner />}
            {error && <ErrorPage />}
            {person && <Main>
                <PeopleTile
                    horizontal
                    name={person.name}
                    birthDate={person.birthday}
                    poster={person.profile_path}
                    birthCity={person.place_of_birth}
                    description={person.biography}
                />
                <Section
                    title={`Movies - cast (${credits.cast.length})`}
                    type="movies"
                    grid
                    body={
                        credits.cast.map(cast =>
                            <Tile
                                key={cast.credit_id}
                                title={cast.title}
                                year={cast.release_date}
                                poster={cast.poster_path}
                                genres={cast.genre_ids}
                                rate={cast.vote_average}
                                votes={cast.vote_count}
                            />
                        )
                    }
                />
                <Section
                    title={`Movies - crew (${credits.crew.length})`}
                    type="movies"
                    grid
                    body={
                        credits.crew.map(crew =>
                            <Tile
                                key={crew.credit_id}
                                title={crew.title}
                                year={crew.release_date}
                                poster={crew.poster_path}
                                genres={crew.genre_ids}
                                rate={crew.vote_average}
                                votes={crew.vote_count}
                            />
                        )
                    }
                />
            </Main>
            }
        </>
    )
}

export default ProfilePage;