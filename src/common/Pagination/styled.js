import styled, { css } from "styled-components";

export const Button = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.4;
    border: none;
    border-radius: 5px;
    margin: 12px;
    color: ${({ theme }) => theme.colors.MineShaft};
    background: ${({ theme }) => theme.colors.PattensBlue};

    ${({ disabled }) => disabled && css`
    color: ${({ theme }) => theme.colors.Woodsmoke};
    background: ${({ theme }) => theme.colors.Mystic};
    `}
`;

