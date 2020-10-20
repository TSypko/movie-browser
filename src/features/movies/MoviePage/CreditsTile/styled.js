import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.White};
    width: 208px;
    min-height: 339px;
    padding: 10px;
    padding-bottom: 16px;
    display: flex;
    align-items: space-between;
    justify-content: center;
    flex-wrap: wrap;
`;

export const CreditsPoster = styled.img`
    width: 177px;
    height: 264px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.Silver};
    object-fit: none;
    object-position: center center;
`;

export const CreditsTitle = styled.span`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    text-align: center;
    flex-basis: 100%;
    margin: 8px;
`;

export const CreditsSubtitle = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    flex-basis: 100%;
    color: ${({ theme }) => theme.colors.Waterloo};
`;