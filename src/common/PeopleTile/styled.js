import styled from "styled-components";

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
  `;

export const Poster = styled.img`
  width: 217px;
  border-radius: 5px;
  `;

export const PersonDetails = styled.section`
  margin: 16px 0 8px 0;
  display: flex;
  flex-direction: column;
`;

export const PersonName = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.Woodsmoke};
  `;