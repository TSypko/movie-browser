import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1368px;
  min-height: 1391px;
  margin: 56px auto 40px auto;
`;

export const Title = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Woodsmoke};
  margin: 0 0 24px 0;
`;

export const MoviesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-gap: 24px;
  margin: 0 auto;
`;
