import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie, selectError, selectLoading, selectMovie } from '../moviesSlice';
import LoadingSpinner from "../../../common/LoadingSpinner";
import ErrorPage from "../../../common/ErrorPage";
import Backdrop from './Backdrop';

const MoviePage = () => {
    const params = useParams();

    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchMovie(params.id));
    }, [params]);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorPage />;

    return (
        <>
            {movie && movie.backdrop_path &&
                <Backdrop movie={movie}/>
            }
        </>
    )
}

export default MoviePage;
