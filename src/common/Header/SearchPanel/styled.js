import styled from "styled-components";
import SearchIcon from "../../../assets/images/search.svg";

export const SearchInput = styled.input`
    max-width: 432px;
    width: 100%;
    background: ${({ theme }) => theme.colors.White} url(${SearchIcon}) no-repeat center left 15px;
    border: 1px solid ${({ theme }) => theme.colors.Mystic};
    border-radius: 33px;
    padding: 12px;
    padding-left:64px;
    font-size: 16px;
    flex-shrink: 1;

    @media(max-width: ${({ theme }) => theme.breakpoints.headerMax}) {
        max-width: 100%;
        font-size: 13px;
        margin-bottom: 16px;
    }
`;