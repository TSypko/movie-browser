import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, selectPerson, selectPersonCredits, selectPeopleLoadingState, selectPeopleErrorState, resetPerson } from "../peopleSlice";
import Main from "../../../common/Main";
import LoadingSpinner from "../../../common/LoadingSpinner";
import ErrorPage from "../../../common/ErrorPage";
import PeopleTile from "../../../common/PeopleTile";
import MovieTile from "../../../common/MovieTile";
import Section from "../../../common/Section";
import FeatureLink from '../../../common/FeatureLink';
import { toMovie } from "../../../routes";
import ShowMoreButton from '../../../common/ShowMoreButton';

const ProfilePage = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const person = useSelector(selectPerson);
    const credits = useSelector(selectPersonCredits);
    const loading = useSelector(selectPeopleLoadingState);
    const error = useSelector(selectPeopleErrorState);

    const defaultLimit = 7;
    const [castLimit, setCastLimit] = useState(defaultLimit);
    const [crewLimit, setCrewLimit] = useState(defaultLimit);

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
                    title={credits.cast.length !== 0 && `Movies - cast (${credits.cast.length})`}
                    type="movies"
                    grid
                    body={
                        <>
                            {credits.cast
                                .slice(0, castLimit)
                                .map(cast =>
                                    <FeatureLink key={cast.credit_id} to={toMovie(cast)}>
                                        <MovieTile
                                            key={cast.credit_id}
                                            title={cast.title}
                                            year={cast.release_date}
                                            poster={cast.poster_path}
                                            genres={cast.genre_ids}
                                            rate={cast.vote_average}
                                            votes={cast.vote_count}
                                            personRole={cast.character}
                                        />
                                    </FeatureLink>
                                )}
                            {credits.cast.length > defaultLimit &&
                                <ShowMoreButton
                                    body={castLimit === credits.cast.length ? "Show less..." : "Show more..."}
                                    onClick={() => setCastLimit(credits.cast.length > castLimit ? credits.cast.length : defaultLimit)}
                                    width={324}
                                    height={650}
                                    mobileWidth={288}
                                    mobileHeight={45}
                                />
                            }
                        </>
                    }
                />
                <Section
                    title={credits.crew.length !== 0 && `Movies - crew (${credits.crew.length})`}
                    type="movies"
                    grid
                    body={
                        <>
                            {credits.crew
                                .slice(0, crewLimit)
                                .map(crew =>
                                    <FeatureLink key={crew.credit_id} to={toMovie(crew)}>
                                        <MovieTile
                                            key={crew.credit_id}
                                            title={crew.title}
                                            year={crew.release_date}
                                            poster={crew.poster_path}
                                            genres={crew.genre_ids}
                                            rate={crew.vote_average}
                                            votes={crew.vote_count}
                                            personRole={crew.job}
                                        />
                                    </FeatureLink>
                                )}
                            {credits.crew.length > defaultLimit &&
                                <ShowMoreButton
                                    body={crewLimit === credits.crew.length ? "Show less..." : "Show more..."}
                                    onClick={() => setCrewLimit(credits.crew.length > crewLimit ? credits.crew.length : defaultLimit)}
                                    width={324}
                                    height={650}
                                    mobileWidth={288}
                                    mobileHeight={45}
                                />}
                        </>
                    }
                />
            </Main>
            }
        </>
    )
}

export default ProfilePage;