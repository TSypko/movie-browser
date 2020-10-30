import styled from "styled-components";

export const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  width: ${props => props.width}px;
  min-height: ${props => props.height}px;
  padding: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.White};
  filter: drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5));
  border: none;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 136px;
    min-height: 245px; 
    padding: 8px;
    font-size: 14px;
  };
`;