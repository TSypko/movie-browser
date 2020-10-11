import styled from "styled-components";

export const StyledHeader = styled.header`
    color: ${({ theme }) => theme.colors.White};
    background-color: ${({ theme }) => theme.colors.Black};
`;

export const HeaderContainer = styled.header`
    max-width: 1368px;
    margin: auto;
    display: flex;
    align-items: center;
`;