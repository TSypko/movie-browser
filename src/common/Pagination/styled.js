import styled, { css } from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.4;
    border: none;
    border-radius: 5px;
    margin: 12px 6px;
    color: ${({ theme }) => theme.colors.MineShaft};
    background: ${({ theme }) => theme.colors.PattensBlue};

    ${({ disabled }) => disabled && css`
    color: ${({ theme }) => theme.colors.Woodsmoke};
    background: ${({ theme }) => theme.colors.Mystic};
    `}
`;

export const Icon = styled.img`
    height: 11px;
    filter: invert(18%) sepia(100%) saturate(2516%) hue-rotate(213deg) brightness(96%) contrast(103%);

    ${({ next }) => next && css`
        margin-left: 8px;
    `}

    ${({ prev }) => prev && css`
        margin-right: 8px;
        transform: rotate(180deg);
    `}

    ${({ disabled }) => disabled && css`
        filter: invert(57%) sepia(7%) saturate(938%) hue-rotate(192deg) brightness(89%) contrast(91%);
    `}
`;

export const Paragraph = styled.p`
    margin: 12px 16px;
`;

export const PageText = styled.span`
    line-height: 1.5;
    margin: 0px 4px;
    color: ${({ theme }) => theme.colors.Waterloo};
`;

export const PageCounter = styled.span`
    line-height: 1.5;
    margin: 0px 4px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.Woodsmoke};
`;

