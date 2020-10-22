import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { page as pageParameterName } from "../../../queryParamNames";
import PeopleTile from "../../../common/PeopleTile";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";
import LoadingSpinner from "../../../common/LoadingSpinner";
import ErrorPage from "../../../common/ErrorPage";
import { PersonLink } from "./styled";
import { fetchPopularPeople, selectPopularPeople, selectPopularPeopleLoadingState, selectPopularPeopleErrorState, resetPopularPeople } from "../popularPeopleSlice";
import { useQueryParameter } from "../../../useQueryParameters";
import { toPerson } from "../../../routes";

const PeoplePage = () => {

  const dispatch = useDispatch();
  const popularPeople = useSelector(selectPopularPeople).results;
  const popularPeopleLoading = useSelector(selectPopularPeopleLoadingState);
  const popularPeopleError = useSelector(selectPopularPeopleErrorState);
  const query = useQueryParameter(pageParameterName);

  useEffect(() => {
    dispatch(fetchPopularPeople(query || 1));
    return (() => {
      dispatch(resetPopularPeople())
    })
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
              <PersonLink key={popularPerson.id} to={toPerson(popularPerson)}>
                <PeopleTile
                  name={popularPerson.name}
                  birthCity={popularPerson.place_of_birth}
                  birthDate={popularPerson.birthday}
                  poster={popularPerson.profile_path}
                  description={popularPerson.biography}
                />
              </PersonLink>
            ))}
          />
          <Pagination type="people" />
        </>
      }
    </Main>
  )
};

export default PeoplePage;
