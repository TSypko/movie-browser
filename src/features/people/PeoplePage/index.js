import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { page as pageParameterName } from "../../../queryParamNames";
import PeopleTile from "../../../common/PeopleTile";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";
import LoadingSpinner from "../../../common/LoadingSpinner";
import ErrorPage from "../../../common/ErrorPage";
import FeatureLink from "../../../common/FeatureLink";
import { fetchPeople, selectPeople, selectPeopleLoadingState, selectPeopleErrorState, resetPeople } from "../peopleSlice";
import { useQueryParameter } from "../../../useQueryParameters";
import { toPerson } from "../../../routes";

const PeoplePage = () => {

  const dispatch = useDispatch();
  const people = useSelector(selectPeople).results;
  const peopleLoading = useSelector(selectPeopleLoadingState);
  const peopleError = useSelector(selectPeopleErrorState);
  const query = useQueryParameter(pageParameterName);

  useEffect(() => {
    dispatch(fetchPeople(query || 1));
    return (() => {
      dispatch(resetPeople())
    })
  }, [dispatch, query])

  return (
    <Main>
      {(!people && peopleLoading) && <LoadingSpinner />}
      {(!people && peopleError) && <ErrorPage />}
      {people &&
        <>
          <Section
            type="people"
            grid
            title="Popular People"
            body={people && people.map(person => (
              <FeatureLink key={person.id} to={toPerson(person)}>
                <PeopleTile
                  name={person.name}
                  birthCity={person.place_of_birth}
                  birthDate={person.birthday}
                  poster={person.profile_path}
                  description={person.biography}
                />
              </FeatureLink>
            ))}
          />
          <Pagination type="people" />
        </>
      }
    </Main>
  )
};

export default PeoplePage;
