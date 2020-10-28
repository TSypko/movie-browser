import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMovies } from '../../features/movies/moviesSlice';
import { selectPeople } from '../../features/people/peopleSlice';
import { useQueryParameter, useReplaceQueryParameter } from '../../useQueryParameters';
import { page as pageParameterName } from "../../queryParamNames";
import Button from "./Button";
import Icon from "./Icon";
import PageInfo from './PageInfo';
import { Footer } from './styled';

const Pagination = ({ type }) => {

  const movies = useSelector(selectMovies);
  const people = useSelector(selectPeople);

  const page = useQueryParameter(pageParameterName);
  const [backButtonIsDisabled, setBackButtonIsDisabled] = useState(false);
  const [forwardButtonIsDisabled, setForwardButtonIsDisabled] = useState(false);

  const replaceQueryParameter = useReplaceQueryParameter();

  useEffect(() => {
    if (+page === 1 || page === null) {
      setBackButtonIsDisabled(true);
    } else
      setBackButtonIsDisabled(false);
  }, [page]);

  useEffect(() => {
    if (type === "movies") {
      if (+page === movies.total_pages) {
        setForwardButtonIsDisabled(true);
      } else
        setForwardButtonIsDisabled(false);
    };
    if (type === "people") {
      if (+page === people.total_pages) {
        setForwardButtonIsDisabled(true);
      } else
        setForwardButtonIsDisabled(false);
    };
  }, [type, page, people.total_pages, movies.total_pages]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [page]);

  const previousButtonHandler = () => {
    if (+page !== 1) {
      replaceQueryParameter({
        key: pageParameterName,
        value: +page - 1
      });
    };
  };




  const firstButtonHandler = () => {
    replaceQueryParameter({
      key: pageParameterName,
      value: 1
    });
  };

  const nextButtonHandler = () => {
    if (page === null) {
      replaceQueryParameter({
        key: pageParameterName,
        value: 2
      });
    }
    else {
      replaceQueryParameter({
        key: pageParameterName,
        value: +page + 1
      });
    };
  };

  const lastButtonHandler = () => {
    if (type === "movies") {
      replaceQueryParameter({
        key: pageParameterName,
        value: movies.total_pages
      });
    }
    else if (type === "people") {
      replaceQueryParameter({
        key: pageParameterName,
        value: people.total_pages
      });
    };
  };

  return (
    <Footer>
      <Button
        previous
        buttonText="First"
        disabled={backButtonIsDisabled}
        onClick={firstButtonHandler}
        body={
          <>
            <Icon
              mobile
              previous
              disabled={backButtonIsDisabled}
              alt="back to first page symbol"
            />
            <Icon
              previous
              disabled={backButtonIsDisabled}
              alt="back to previous page symbol"
            />
          </>}
      />
      <Button
        previous
        buttonText="Previous"
        disabled={backButtonIsDisabled}
        onClick={previousButtonHandler}
        body={
          <>
            <Icon
              previous
              disabled={backButtonIsDisabled}
              alt="back to first page symbol"
            />
          </>}
      />

      <PageInfo type={type} />

      <Button
        buttonText="Next"
        disabled={forwardButtonIsDisabled}
        onClick={nextButtonHandler}
        body={
          <>
            <Icon
              disabled={forwardButtonIsDisabled}
              alt="move to next page symbol"
            />
          </>}
      />
      <Button
        buttonText="Last"
        disabled={forwardButtonIsDisabled}
        onClick={lastButtonHandler}
        body={
          <>
            <Icon
              disabled={forwardButtonIsDisabled}
              alt="move to last page symbol"
            />
            <Icon
              mobile
              disabled={forwardButtonIsDisabled}
              alt="move to last page symbol"
            />
          </>}
      />
    </Footer>
  );
};

export default Pagination;