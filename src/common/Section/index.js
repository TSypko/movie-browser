import React from "react";
import { Container, Title } from "./styled";

const Section = ({ title, body, grid, type }) => (
  <section>
    <Title>{title}</Title>
    <Container
      type={type}
      grid={grid}
    >
      {body}
    </Container>
  </section>
);

export default Section;
