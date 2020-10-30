import styled, { css } from "styled-components";

export const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  height: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.White};
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  justify-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-direction: row;
    width: 288px;
    min-height: 201px;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      flex-direction: row;
      min-height: 544px;
      width: auto;
      padding: 40px;
      border-radius: 0;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        display: grid;
        grid-template-areas:
          "poster movieDetails"
          "movieDescription movieDescription";
        grid-template-columns: 122px 1fr;
        width: 288px;
        padding: 16px;
        margin: 0 auto;
        box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
      }
    `};
`;

export const Poster = styled.img`
  max-width: 292px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.Silver};
  object-position: center center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    max-width: 114px;
    margin-right: 8px;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      margin-right: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        grid-area: poster;
      }
    `};

  ${({ noPoster }) =>
    noPoster &&
    css`
    height: 434px;
    object-fit: scale-down;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        height: 169px;
      }
    `};
`;

export const MovieDetails = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-left: 8px;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      margin-top: 0;
      margin-left: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        grid-area: movieDetails;
      }
    `};
`;

export const MovieTitle = styled.h3`
  margin: 16px 0 8px 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.Woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 16px;
    margin: 0 0 4px 0;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
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

export const MovieYear = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.Mystic};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 13px;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      margin: 12px 0;
      font-size: 22px;
      font-weight: normal;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.Black};

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        color: ${({ theme }) => theme.colors.Mystic};
        margin: 2px 0 4px 0;
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
    display: none;
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

export const MovieProduction = styled.p`
  margin: 12px 0 4px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 0;
  } ;
`;

export const MovieRelease = styled.p`
  margin: 4px 0 12px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 0;
  } ;
`;

export const MovieDescription = styled.p`
  margin-top: 12px;
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-area: movieDescription;
    font-size: 14px;
    margin: 24px 0 0 0;
  }
`;
