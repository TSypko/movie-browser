import React from "react";
import { MainContainer, MoviesContainer, Title } from "./styled";

const Main = ({ children }) => (
  <MainContainer>
    <Title>Example main section</Title>
    <MoviesContainer>{children}</MoviesContainer>
  </MainContainer>
);

export default Main;
