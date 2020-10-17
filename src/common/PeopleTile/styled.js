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