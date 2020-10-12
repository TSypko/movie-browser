import styled from "styled-components";

export const StyledHeader = styled.header`
    color: ${({ theme }) => theme.colors.White};
    background-color: ${({ theme }) => theme.colors.Black};
`;

export const HeaderContainer = styled.header`
    max-width: 1368px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    @media(max-width: ${({ theme }) => theme.breakpoints.headerMax}) {
        flex-wrap: wrap;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-wrap: no-wrap;

    @media(max-width: ${({ theme }) => theme.breakpoints.headerMax}) { 
        flex-basis: 100%; 
    }
`;