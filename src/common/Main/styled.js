import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1368px;
  min-height: 1391px;
  margin: 56px auto 40px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 24px auto 32px auto;
  } ;
`;
