import styled, { css } from "styled-components";

export const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  width: 248px;
  min-height: 339px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.White};
  padding: 16px;
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));
  justify-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 136px;
    min-height: 245px;
    padding: 8px;
  };

  ${({ horizontal }) =>
    horizontal &&
    css`
      flex-direction: row;
      min-height: 644px;
      width: auto;
      padding: 40px;
      border-radius: 0;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        display: grid;
        grid-template-areas:
          "poster personDetails"
          "personDescription personDescription";
        grid-template-columns: 124px 1fr;
        width: 290px;
        padding: 16px;
        box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
        margin: 0 auto;
      }
      `
  }
`;

export const Poster = styled.img`
  width: 217px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 120px;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      width: 399px;
      margin-right: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoints.headerMax}) {
        width: 300px;
        align-self: flex-start;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        grid-area: poster;
        width: 120px;
      }
    `};
`;

export const PersonDetails = styled.section`
  margin: 16px 0 8px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 8px 0;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      margin-top: 0;
      margin-left: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        grid-area: personDetails;
        margin-left: 16px;
      }
    `};
`;

export const PersonName = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.Woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      text-align: left;
      margin: 8px 0 12px 0;
      font-size: 36px;
      font-weight: 600;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.3;
        margin: 0 0 2px 0;
      } ;
    `};
`;

export const InfoLabelSpan = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.StormGray};
  margin-right: 10px;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
    line-height: 1.2;
    margin-right: 4px;
  } ;
`;

export const InfoSpan = styled.span`
  display: inline-block;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
    line-height: 1.3;
    margin: 4px 0;
  } ;
`;

export const PersonBirthDate = styled.p`
  margin: 12px 0 4px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 0;
  } ;
`;

export const PersonBirthPlace = styled.p`
  margin: 4px 0 12px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 0;
  } ;
`;

export const PersonDescription = styled.p`
  margin-top: 12px;
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-area: personDescription;
    font-size: 14px;
    margin: 16px 0 0 0;
  }
`;
