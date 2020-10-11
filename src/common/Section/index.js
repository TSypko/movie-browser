import React from "react";
import { Container, Title } from "./styled";

const Section = ({ title, body, grid }) => (
  <section>
    <Title>{title}</Title>
    <Container grid={grid}>{body}</Container>
  </section>
);

export default Section;
