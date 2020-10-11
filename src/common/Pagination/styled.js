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
    padding: 8px 12.5px;
    font-size: 14px;
    line-height: 1.4;
    border: none;
    border-radius: 5px;
    margin: 12px 6px;
    color: ${({ theme }) => theme.colors.MineShaft};
    background: ${({ theme }) => theme.colors.PattensBlue};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            margin: 12px 4px;
            padding: 8px 7.5px;
    }

    &:hover {
        filter:brightness(95%);
    }

    &:active {
        filter:brightness(92%);
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.Woodsmoke};
        background: ${({ theme }) => theme.colors.Mystic};

        &:hover {
            filter: none;
        }
    }
`;

export const ButtonText = styled.span`
        ${({ mobile }) => mobile && css`

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            display: none;
        }
    `}
`;

export const Icon = styled.img`
    height: 11px;
    filter: invert(18%) sepia(100%) saturate(2516%) hue-rotate(213deg) brightness(96%) contrast(103%);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        height: 8px;
        }

    ${({ mobile }) => mobile && css`
        display: none;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            display: unset;
        }
    `}

    ${({ next }) => next && css`
        margin-left: 8px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            margin: 0px 2px;
        }
    `}

    ${({ prev }) => prev && css`
        margin-right: 8px;
        transform: rotate(180deg);
        
        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            margin: 0px 2px;
        }
    `}

    ${({ disabled }) => disabled && css`
        filter: invert(57%) sepia(7%) saturate(938%) hue-rotate(192deg) brightness(89%) contrast(91%);
    `}
`;

export const Paragraph = styled.p`
    margin: 12px 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            font-size: 10px;
            margin: 12px 4px;
    }
`;

export const PageText = styled.span`
    line-height: 1.5;
    margin: 0px 4px;
    color: ${({ theme }) => theme.colors.Waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            margin: 0px 1px;
    }
`;

export const PageCounter = styled.span`
    line-height: 1.5;
    margin: 0px 4px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.Woodsmoke};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            margin: 0px 1px;
    }
`;
