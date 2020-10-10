import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const VectorImage = styled.img``;

export const Rate = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 12px;
  color: ${({ theme }) => theme.colors.Woodsmoke};
`;

export const Votes = styled.span`
  margin: 0 6px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.Waterloo};
`;
