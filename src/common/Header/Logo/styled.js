import styled from "styled-components";

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
    flex-shrink: 0;

    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 13px;
        margin-right: 30px;
    }
`;

export const Icon = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 12px;
`;

