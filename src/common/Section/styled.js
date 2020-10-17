import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Woodsmoke};
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    margin: 0 0 12px 0;
  } ;
`;

export const Container = styled.div`
  display: ${({ grid }) => (grid ? "grid" : "block")};
  margin: 0 auto;

  ${({ grid }) =>
    grid &&
    css`
      grid-template-columns: ${({ type }) => type === "movies" ? "repeat(auto-fill, minmax(324px, 1fr))" : "repeat(auto-fill, minmax(248px, 1fr))"};
      grid-gap: ${({ type }) => type === "movies" ? "24px" : "32px"};
      `
  };
`;
