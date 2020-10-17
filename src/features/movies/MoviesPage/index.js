import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies, selectMovies, selectLoading, selectError } from "../moviesSlice";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import LoadingSpinner from "../../../common/LoadingSpinner";
import Pagination from "../../../common/Pagination";
import ErrorPage from "../../../common/ErrorPage";

const MoviesPage = () => {

  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch])

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <ErrorPage />}
      {movies.results &&
        <>
          <Main>
            <Section
              grid
              title="Popular Movies"
              body={
                movies.results?.map(movie =>
                  <Tile
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    year={movie.release_date}
                    description={movie.overview}
                    genres={movie.genre_ids}
                    rate={movie.vote_average}
                    votes={movie.vote_count}
                  />
                )
              } />
          </Main>
          <Pagination type="movies" />
        </>
      }
    </>
  );
};

export default MoviesPage;
