import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PeopleTile from "../../../common/PeopleTile";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";
import LoadingSpinner from "../../../common/LoadingSpinner";
import ErrorPage from "../../../common/ErrorPage";
import { fetchPopularPeople, selectPopularPeople, selectPopularPeopleLoadingState, selectPopularPeopleErrorState } from "../popularPeopleSlice";

const PeoplePage = () => {

  const dispatch = useDispatch();
  const popularPeople = useSelector(selectPopularPeople).results;
  const popularPeopleLoading = useSelector(selectPopularPeopleLoadingState);
  const popularPeopleError = useSelector(selectPopularPeopleErrorState);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("page");
  console.log(query);

  useEffect(() => {
    dispatch(fetchPopularPeople(query || 1));
  }, [dispatch, query])

  return (
    <Main>
      {(!popularPeople && popularPeopleLoading) && <LoadingSpinner />}
      {(!popularPeople && popularPeopleError) && <ErrorPage />}
      {popularPeople &&
        <>
          <Section
            type="people"
            grid
            title="Popular People"
            body={popularPeople && popularPeople.map(popularPerson => (
              <PeopleTile
                key={popularPerson.id}
                name={popularPerson.name}
                birthCity={popularPerson.place_of_birth}
                birthDate={popularPerson.birthday}
                poster={popularPerson.profile_path}
                description={popularPerson.biography}
              />
            ))}
          />
          <Pagination type="people" />
        </>
      }
    </Main>
  )
};

export default PeoplePage;
