import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1368px;
  margin: 56px auto 40px auto;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 24px auto 32px auto;
    padding: 0 10px;
  } ;
`;
