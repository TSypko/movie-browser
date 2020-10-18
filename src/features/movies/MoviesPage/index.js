import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies, selectMovies, selectLoading, selectError } from "../moviesSlice";
import { toMovie } from "../../../routes";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import LoadingSpinner from "../../../common/LoadingSpinner";
import Pagination from "../../../common/Pagination";
import {MovieLink} from "./styled";

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
      {error && <div>ERROR!</div>}
      {movies.results &&
        <>
          <Main>
            <Section
              grid
              title="Popular Movies"
              body={
                movies.results?.map(movie =>
                  <MovieLink to={toMovie(movie)}>
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
                  </MovieLink>
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
