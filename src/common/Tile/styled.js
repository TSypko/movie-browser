import styled from "styled-components";

export const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  min-height: 650px;
  border-radius: 5px;
  background-color: white;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-direction: row;
    width: 288px;
    min-height: 201px;
  } ;
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 114px;
    height: 169px;
    margin-right: 8px;
  } ;
`;

export const MovieDetails = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-left: 8px;
  } ;
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
  } ;
`;

export const MovieYear = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.Mystic};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 13px;
  } ;
`;

export const GenreSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;
