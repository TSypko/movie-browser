import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;

  ${({ horizontal }) =>
    horizontal &&
    css`
      margin: 12px 0;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin: 4px 0 0 0;
      } ;
    `};
`;
