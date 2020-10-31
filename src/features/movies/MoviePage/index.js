import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie, resetMovie, selectError, selectLoading, selectMovie, selectMovieCredits } from '../moviesSlice';
import LoadingSpinner from "../../../common/LoadingSpinner";
import ErrorPage from "../../../common/ErrorPage";
import Backdrop from './Backdrop';
import Main from "../../../common/Main";
import Tile from '../../../common/Tile';
import Section from "../../../common/Section";
import PeopleTile from '../../../common/PeopleTile';
import FeatureLink from "../../../common/FeatureLink";
import { toPerson } from "../../../routes";
import ShowMoreButton from '../../../common/ShowMoreButton';

const MoviePage = () => {
    const params = useParams();

    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);
    const credits = useSelector(selectMovieCredits);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const defaultLimit = 9;
    const [castLimit, setCastLimit] = useState(defaultLimit);
    const [crewLimit, setCrewLimit] = useState(defaultLimit);

    useEffect(() => {
        dispatch(fetchMovie(params.id));
        return (() => dispatch(resetMovie()))
    }, [dispatch, params]);

    const formatDate = date => {
        return date && new Date(date).toLocaleString(
            undefined,
            {
                day: "numeric",
                month: "numeric",
                year: "numeric",
            });
    }

    const getProduction = countries => {
        return countries && countries.map(country => country.name).join(", ");
    };

    return (
        <>
            {loading && <LoadingSpinner />}
            {error && <ErrorPage />}
            {movie && movie.backdrop_path &&
                <Backdrop movie={movie} />
            }
            {movie && <Main>
                <Tile
                    horizontal={true}
                    title={movie.title}
                    year={movie.release_date && movie.release_date.slice(0, 4)}
                    poster={movie.poster_path}
                    production={getProduction(movie.production_countries)}
                    release={formatDate(movie.release_date)}
                    description={movie.overview}
                    genres={movie.genres}
                    rate={movie.vote_average}
                    votes={movie.vote_count}
                />
                <Section
                    title="Cast"
                    type="people"
                    grid
                    body={
                        <>
                            {credits.cast
                                .slice(0, castLimit)
                                .map((cast) =>
                                    <FeatureLink key={cast.credit_id} to={toPerson(cast)}>
                                        <PeopleTile
                                            key={cast.credit_id}
                                            poster={cast.profile_path}
                                            name={cast.name}
                                            role={cast.character}
                                        />
                                    </FeatureLink>
                                )
                            }
                            {credits.cast.length > defaultLimit &&
                                <ShowMoreButton
                                    body={castLimit === credits.cast.length ? "Show less..." : "Show more..."}
                                    onClick={() => setCastLimit(credits.cast.length > castLimit ? credits.cast.length : defaultLimit)}
                                    width={248}
                                    height={410}
                                    mobileWidth={136}
                                    mobileHeight={245}
                                />}
                        </>
                    }
                />
                <Section
                    title="Crew"
                    type="people"
                    grid
                    body={
                        <>
                            {credits.crew
                                .slice(0, crewLimit)
                                .map(crew =>
                                    <FeatureLink key={crew.credit_id} to={toPerson(crew)}>
                                        <PeopleTile
                                            key={crew.credit_id}
                                            poster={crew.profile_path}
                                            name={crew.name}
                                            role={crew.department}
                                        />
                                    </FeatureLink>
                                )}
                            {credits.crew.length > defaultLimit &&
                                <ShowMoreButton
                                    body={crewLimit === credits.crew.length ? "Show less..." : "Show more..."}
                                    onClick={() => setCrewLimit(credits.crew.length > crewLimit ? credits.crew.length : defaultLimit)}
                                    width={248}
                                    height={410}
                                    mobileWidth={136}
                                    mobileHeight={245}
                                />}
                        </>
                    }
                />
            </Main>
            }
        </>
    )
}

export default MoviePage;
