import styled from "styled-components";

export const ErrorContainer = styled.div`
    text-align: center;
    background-color: ${({ theme }) => theme.colors.Whisper};
    height: 100%;
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
`;

export const ErrorBody = styled.div`
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
`;

export const ErrorButton = styled.button`
    background-color: ${({ theme }) => theme.colors.ScienceBlue};
    color: ${({ theme }) => theme.colors.White};
    padding: 16px 24px;
    border-radius: 5px;
    border: none;
    margin: 24px auto;
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;