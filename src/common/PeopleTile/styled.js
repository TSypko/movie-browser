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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 136px;
    min-height: 245px;
    padding: 8px;
  }
`;

export const Poster = styled.img`
  width: 217px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 120px;
  }
`;

export const PersonDetails = styled.section`
  margin: 16px 0 8px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 8px 0;
  }
`;

export const PersonName = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.Woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
  }
`;

export const InfoLabelSpan = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.StormGray};
  margin-right: 10px;
  font-size: 18px;
  line-height: 1.2;
`;

export const InfoSpan = styled.span`
  display: inline-block;
  font-size: 18px;
  line-height: 1.2;
`;

export const PersonBirthDate = styled.p`
  margin: 12px 0 4px 0;
`;

export const PersonBirthPlace = styled.p`
  margin: 4px 0 12px 0;
`;