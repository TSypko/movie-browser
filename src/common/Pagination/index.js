import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMovies } from '../../features/movies/moviesSlice';
import Button from "./Button";
import Icon from "./Icon";
import PageInfo from './PageInfo';
import { Footer } from './styled';

const Pagination = ({ type }) => {

  const movies = useSelector(selectMovies);

  const [backButtonState, setBackButtonState] = useState(false);
  const [forwardButtonState, setForwardButtonState] = useState(false);

  useEffect(() => {
    if (movies.page === 1) {
      setBackButtonState(true);
    }
    else if (movies.page === movies.total_pages) {
      setForwardButtonState(true);
    };
  }, [movies.page, movies.total_pages]);

  return (
    <Footer>
      <Button
        previous
        buttonText="First"
        disabled={backButtonState}
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