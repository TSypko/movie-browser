import styled from "styled-components";


export const MainInfoBackground = styled.div`
    background-color: black;
`;

export const MainInfoContainer = styled.div`
    max-width: 1368px;
    height: 769px;
    margin: auto;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-image: 
        linear-gradient(270deg, #000000 4.11%, rgba(0, 0, 0, 0.873268) 5.08%, rgba(0, 0, 0, 0.720529) 6.51%, rgba(0, 0, 0, 0.294577) 9.99%, rgba(0, 0, 0, 0.159921) 11.88%, rgba(0, 0, 0, 0) 15.68%), 
        linear-gradient(90deg, #000000 3.6%, rgba(0, 0, 0, 0.984059) 4.58%, rgba(0, 0, 0, 0.967732) 5.44%, rgba(0, 0, 0, 0.865569) 6.3%, rgba(0, 0, 0, 0.230315) 12.87%, rgba(0, 0, 0, 0) 16.64%), 
        linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), 
        linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%), 
        url(${({ src }) => src});
`;

export const InfoBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const MainInfoTitle = styled.h2`
    font-weight: 600;
    font-size: 64px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.White};
    margin-bottom: 25px;
`;

export const StarIcon = styled.img`
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 16px;
  }
`;

export const Rate = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const RateValue = styled.span`
    font-weight: 500;
    font-size: 30px;
    height: 1.3;
    color: ${({theme}) => theme.colors.White};
    margin: 0 8px;
`;

export const MaxRate = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: ${({theme}) => theme.colors.White};
    align-self: flex-end;
`;

export const Votes = styled.span`
    margin-top: 17px;
    margin-bottom: 56px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: ${({theme}) => theme.colors.White};
    flex-basis: 100%;
`;