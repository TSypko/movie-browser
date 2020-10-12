import styled, { css } from "styled-components";

export const Paragraph = styled.p`
    margin: 12px 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 10px;
        margin: 12px 4px;
    }
`;

export const PageCaption = styled.span`
    line-height: 1.5;
    margin: 0px 4px;
    color: ${({ theme }) => theme.colors.Waterloo};

    ${({ number }) => number && css`
        font-weight: 600;
        color: ${({ theme }) => theme.colors.Woodsmoke};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin: 0px 1px;
    }
`;