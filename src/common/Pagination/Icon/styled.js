import styled, { css } from "styled-components";

export const StyledIcon = styled.img`
height: 11px;
margin-left: 8px;
filter: invert(18%) sepia(100%) saturate(2516%) hue-rotate(213deg) brightness(96%) contrast(103%);

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 8px;
    margin: 0px 2px;
    }

${({ mobile }) => mobile && css`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        display: unset;
    }
`}

${({ previous }) => previous && css`
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