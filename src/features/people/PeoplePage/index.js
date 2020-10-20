import React from 'react';
import PeopleTile from "../../../common/PeopleTile";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";

const examplePerson = {
  name: "Mark Hamill",
  birthday: "1951-09-25",
  place_of_birth: "Concord, California, USA",
  biography: "Mark Richard Hamill (born September 25, 1951) is an American actor, voice artist, producer, director, and writer. Hamill is best known for his role as Luke Skywalker in the original Star Wars trilogy and also well known for voice-acting characters such as the Joker in various animated series, animated films and video games, beginning with Batman: The Animated Series, the Skeleton king in Super Robot Monkey Team Hyperforce Go!, Fire Lord Ozai in Avatar: The Last Airbender, Master Eraqus in Kingdom Hearts: Birth by Sleep, Skips in Regular Show, and Senator Stampington on Metalocalypse.",
  image: "\/9Wws35pCsT0KoZpiV4Gk5nbn9ZD.jpg",
}

const PeoplePage = () => {
  return (
    <>
      <Main>
        <Section
          type="people"
          // grid
          title="Popular People"
          body={
            <>
              {/* Body has been prepared for component's testing - please replace after tests */}
              <PeopleTile
                horizontal
                name={examplePerson.name}
                birthCity={examplePerson.place_of_birth}
                birthDate={examplePerson.birthday}
                poster={examplePerson.image}
                description={examplePerson.biography}
              />
              {/* <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile /> */}
            </>
          } />
      </Main>
      <Pagination type="movies" />
    </>
  )
};

export default PeoplePage;
