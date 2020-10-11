import React from "react";
import { Container, Title, StyledSection } from "./styled";

const Section = ({ title, body }) => (
  <StyledSection>
    <Title>{title}</Title>
    <Container>{body}</Container>
  </StyledSection>
);

export default Section;