import styled from "styled-components";

export const ErrorContainer = styled.div`
    text-align: center;
`;

export const StyledImage = styled.img`
    width: 100px;
    margin-top: 10%;
`;

export const ErrorTitle = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    margin: 24px auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}){
        margin: 12px auto 18px auto;
        font-size: 20px;
    }   
`;

export const ErrorBody = styled.div`
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}){
        font-size: 14px;
    }   
`;

export const ErrorButton = styled.button`
    background-color: ${({ theme }) => theme.colors.ScienceBlue};
    color: ${({ theme }) => theme.colors.White};
    padding: 16px 24px;
    border-radius: 5px;
    border: none;
    margin: 24px auto;
    font-size: 14px;
    line-height: 136%;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}){
        font-size: 12px;
        padding: 8px 12px;
        margin: 18px auto;
        font-weight: 500;
    }  
`;