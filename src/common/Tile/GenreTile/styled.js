import styled from "styled-components";

export const TileContainer = styled.div`
  padding: 8px 16px;
  margin: 0 8px 8px 0;
  height: 36px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.Mystic};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 19px;
    padding: 4px 8px;
  } ;
`;

export const GenreTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin: auto;

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 10px;
  } ;
`;
