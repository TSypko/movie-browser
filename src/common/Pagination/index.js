import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMovies } from '../../features/movies/moviesSlice';
import { selectPopularPeople } from '../../features/people/popularPeopleSlice';
import { useQueryParameter, useReplaceQueryParameter } from '../../useQueryParameters';
import { page as pageName } from "../../queryParamNames";
import Button from "./Button";
import Icon from "./Icon";
import PageInfo from './PageInfo';
import { Footer } from './styled';

const Pagination = ({ type }) => {

  const movies = useSelector(selectMovies);
  const people = useSelector(selectPopularPeople);

  const page = useQueryParameter(pageName);
  const [backButtonIsDisabled, setBackButtonIsDisabled] = useState(false);
  const [forwardButtonIsDisabled, setForwardButtonIsDisabled] = useState(false);

  const replaceQueryParameter = useReplaceQueryParameter();

  const backButtonIsDisabledHandler = () => {
    if (+page === 1 || page === null) {
      setBackButtonIsDisabled(true);
    } else
      setBackButtonIsDisabled(false);
  };

  const forwardButtonIsDisabledHandler = () => {
    if (type === "movies") {
      if (+page === 500) {
        console.log(+page)
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
  };

  useEffect(() => {
    backButtonIsDisabledHandler();
    forwardButtonIsDisabledHandler();
  }, [page])

  const previousButtonHandler = () => {
    if (+page !== 1) {
      replaceQueryParameter({
        key: pageName,
        value: +page - 1
      });
    };
  };

  const firstButtonHandler = () => {
    replaceQueryParameter({
      key: pageName,
      value: 1
    });
  };

  const nextButtonHandler = () => {
      replaceQueryParameter({
        key: pageName,
        value: +page + 1
      });
    };

    const lastButtonHandler = () => {
      if (type === "movies") {
        replaceQueryParameter({
          key: pageName,
          value: movies.total_pages
        });
      }
      else if (type === "people") {
        replaceQueryParameter({
          key: pageName,
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