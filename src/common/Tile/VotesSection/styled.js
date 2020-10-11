import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin-top: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 4.39px;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      margin: 12px 0;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin-bottom: 0;
      }
    `};
`;

export const VectorImage = styled.img`
  width: 22px;
  height: 22.87px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 16px;
    height: 15.25px;
  }
`;

export const Rate = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 12px;
  color: ${({ theme }) => theme.colors.Woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 13px;
    line-height: 1.3;
    margin: 0 7px 0 8px;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      font-size: 22px;
      font-weight: 500;
      line-height: 1.3;
      color: black;
    `};
`;

export const Votes = styled.span`
  margin: 0 6px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.Waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 13px;
    line-height: 1.3;
    margin: 0;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      font-size: 14px;
      line-height: 1.2;
      color: black;
    `};
`;
