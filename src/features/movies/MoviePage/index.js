import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import {
    checkRedirect,
    fetchMovie,
    resetMovie,
    selectError,
    selectLoading,
    selectMovie,
    selectMovieCredits,
    selectRedirect,
    setRedirectIsUnactive
} from '../moviesSlice';
import { page as pageParameterName } from "../../../queryParamNames";
import LoadingSpinner from "../../../common/LoadingSpinner";
import ErrorPage from "../../../common/ErrorPage";
import Backdrop from './Backdrop';
import Main from "../../../common/Main";
import Tile from '../../../common/Tile';
import Section from "../../../common/Section";
import PeopleTile from '../../../common/PeopleTile';
import { useQueryParameter } from '../../../useQueryParameters';
import { selectSearchIsOn, selectSearchQuery } from '../../search/searchSlice';
import { toMovies } from '../../../routes';

const MoviePage = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);
    const credits = useSelector(selectMovieCredits);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const pageQuery = useQueryParameter(pageParameterName);
    const searchQuery = useSelector(selectSearchQuery);
    const searchisOn = useSelector(selectSearchIsOn);
    const redirectIsActive = useSelector(selectRedirect);

    useEffect(() => {
        if (searchisOn) {
            dispatch(checkRedirect());
        }
        else {
            dispatch(fetchMovie(params.id));
        };
        return () => {
            dispatch(resetMovie());
            dispatch(setRedirectIsUnactive());
        };
    }, [dispatch, params, pageQuery, searchisOn]);

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
            {redirectIsActive && <Redirect to={`${toMovies()}?search=${searchQuery}`} />}
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
                            <PeopleTile
                                key={cast.credit_id}
                                poster={cast.profile_path}
                                name={cast.name}
                                role={cast.character}
                            />
                        )
                    }
                />
                <Section
                    title="Crew"
                    type="people"
                    grid
                    body={
                        credits.crew.map(crew =>
                            <PeopleTile
                                key={crew.credit_id}
                                poster={crew.profile_path}
                                name={crew.name}
                                role={crew.department}
                            />
                        )
                    }
                />
            </Main>
            }
        </>
    )
}

export default MoviePage;
