import styled from "styled-components";

export const TileContainer = styled.div`
  display: inline-block;
  padding: 8px 16px;
  margin: 4px 8px 4px 0;
  min-width: 77px;
  height: 36px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.Mystic};
`;

export const GenreTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin: auto;

  &::first-letter {
    text-transform: uppercase;
  }
`;
