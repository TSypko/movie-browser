import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 12.5px;
    font-size: 14px;
    line-height: 1.4;
    border: none;
    border-radius: 5px;
    margin: 12px 6px;
    outline-color: ${({ theme }) => theme.colors.ScienceBlue};
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