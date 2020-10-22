import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PeopleTile from "../../../common/PeopleTile";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";
import { fetchPopularPeople, selectPopularPeople } from "../popularPeopleSlice";

const PeoplePage = () => {

  const dispatch = useDispatch();
  const popularPeople = useSelector(selectPopularPeople).results;

  useEffect(() => {
    dispatch(fetchPopularPeople(1));
  },[dispatch])

  return (
    <>
      <Main>
        <Section
          type="people"
          grid
          title="Popular People"
          body={popularPeople && popularPeople.map(popularPerson => (
            <PeopleTile
              name={popularPerson.name}
              birthCity={popularPerson.place_of_birth}
              birthDate={popularPerson.birthday}
              poster={popularPerson.profile_path}
              description={popularPerson.biography}
            />
          ))}
        />
      </Main>
      <Pagination type="people" />
    </>
  )
};

export default PeoplePage;
