import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Woodsmoke};
  margin: 64px 0 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    margin: 21px 0 12px 0;
  } ;
`;

export const Container = styled.div`
  display: ${({ grid }) => (grid ? "grid" : "block")};
  margin: 0 auto;

  ${({ grid }) =>
    grid && css`
    ${({ type }) => type === "movies" && css`
      grid-template-columns: repeat(auto-fill, 324px);
      grid-gap: 24px;
      justify-content: center;
    `}

    ${({ type }) => type === "people" && css`
      grid-template-columns: repeat(auto-fill, 248px);
      grid-gap: 32px;
      justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      grid-template-columns: repeat(auto-fill, minmax(136px, 0.4fr));
      grid-gap: 16px;
      justify-content: center;
  } ;
    `}
    `
  };
`;
