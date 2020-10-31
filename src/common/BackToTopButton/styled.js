import styled from "styled-components";

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 36px;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    border: none;
    padding: 12px 24px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 4px 4px 6px 2px ${({ theme }) => theme.colors.Woodsmoke};
    background-color: ${({ theme }) => theme.colors.Black};
    transition: 500ms;
       
    &:hover {
        background-color: ${({ theme }) => theme.colors.StormGray};
       }

    &:active {
        background-color: ${({ theme }) => theme.colors.Waterloo};
       }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        padding: 8px 16px;
    }  
`;

export const Icon = styled.img`
    height: 14px;
    transform: rotate(270deg);
    filter: invert(100%) sepia(0%) saturate(7489%) hue-rotate(322deg) brightness(110%) contrast(102%);

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        height: 10px;
    } 
`;