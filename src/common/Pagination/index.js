import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMovies } from '../../features/movies/moviesSlice';
import { selectPopularPeople } from '../../features/people/popularPeopleSlice';
import Button from "./Button";
import Icon from "./Icon";
import PageInfo from './PageInfo';
import { Footer } from './styled';

const Pagination = ({ type }) => {

  const movies = useSelector(selectMovies);
  const people = useSelector(selectPopularPeople);
  const params = useParams();

  const [page, setPage] = useState(+params.page);
  const [backButtonState, setBackButtonState] = useState(false);
  const [forwardButtonState, setForwardButtonState] = useState(false);

  const backButtonStateHandler = () => {
    if (type === "movies") {
      if (page === 1) {
        setBackButtonState(true);
      } else
        setBackButtonState(false);
    };
    if (type === "people") {
      if (page === 1) {
        setBackButtonState(true);
      } else
        setBackButtonState(false);
    };
  };

  const forwardButtonStateHandler = () => {
    if (type === "movies") {
      if (page === movies.total_pages) {
        setForwardButtonState(true);
      } else
        setForwardButtonState(false);
    };
    if (type === "people") {
      if (page === people.total_pages) {
        setForwardButtonState(true);
      } else
        setForwardButtonState(false);
    };
  };

  useEffect(() => {
    backButtonStateHandler();
    forwardButtonStateHandler();
    // eslint-disable-next-line
  }, [page])

  const previousButtonHandler = () => {
    if (page !== 1) {
      setPage(prevPage => prevPage - 1);
    };
  };

  const firstButtonHandler = () => {
    setPage(1);
  };

  const nextButtonHandler = () => {
    if (page !== 500) {
      setPage(prevPage => prevPage + 1);
    };
  };

  const lastButtonHandler = () => {
    if (movies) {
      setPage(movies.total_pages)
    }
    else if (people) {
      setPage(people.total_pages)
    };
  };

  useEffect(() => {
    if (type === "movies") {
      window.location.hash = `#/movies/${page}`
    }
    else if (type === "people") {
      window.location.hash = `#/people/${page}`
    };
  }, [type, page]);

  return (
    <Footer>
      <Button
        previous
        buttonText="First"
        disabled={backButtonState}
        onClick={firstButtonHandler}
        body={
          <>
            <Icon
              mobile
              previous
              disabled={backButtonState}
              alt="back to first page symbol"
            />
            <Icon
              previous
              disabled={backButtonState}
              alt="back to previous page symbol"
            />
          </>}
      />
      <Button
        previous
        buttonText="Previous"
        disabled={backButtonState}
        onClick={previousButtonHandler}
        body={
          <>
            <Icon
              previous
              disabled={backButtonState}
              alt="back to first page symbol"
            />
          </>}
      />

      <PageInfo type={type} />

      <Button
        buttonText="Next"
        disabled={forwardButtonState}
        onClick={nextButtonHandler}
        body={
          <>
            <Icon
              disabled={forwardButtonState}
              alt="move to next page symbol"
            />
          </>}
      />
      <Button
        buttonText="Last"
        disabled={forwardButtonState}
        onClick={lastButtonHandler}
        body={
          <>
            <Icon
              disabled={forwardButtonState}
              alt="move to last page symbol"
            />
            <Icon
              mobile
              disabled={forwardButtonState}
              alt="move to last page symbol"
            />
          </>}
      />
    </Footer>
  )
}

export default Pagination;