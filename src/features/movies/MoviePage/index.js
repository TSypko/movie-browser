import React, { useEffect } from 'react';
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

const MoviePage = () => {
    const params = useParams();

    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);
    const credits = useSelector(selectMovieCredits);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchMovie(params.id));
        return(()=>dispatch(resetMovie()))
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
                        credits.cast.map(cast =>
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
                />
                <Section
                    title="Crew"
                    type="people"
                    grid
                    body={
                        credits.crew.map(crew =>
                            <FeatureLink key={crew.credit_id} to={toPerson(crew)}>
                                <PeopleTile
                                    key={crew.credit_id}
                                    poster={crew.profile_path}
                                    name={crew.name}
                                    role={crew.department}
                                />
                            </FeatureLink>
                        )
                    }
                />
            </Main>
            }
        </>
    )
}

export default MoviePage;
