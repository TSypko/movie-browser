import styled from "styled-components";

export const Container = styled.div`
  margin: 120px 0 0;
`;

export const GroundWheel = styled.div`
  position: relative;
  margin: 0 auto;
  width: 91px;
  height: 91px;
  border-radius: 50%;
  border: 12px solid ${({ theme }) => theme.colors.Snuff};
  background-color: transparent;
`;
