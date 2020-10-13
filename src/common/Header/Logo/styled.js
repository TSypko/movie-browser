import styled from "styled-components";

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -1.5px;
    text-transform: capitalize;
    flex: 1 0;

    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 13px;
    }
`;

export const Icon = styled.img`
    width: 40px;
    margin-right: 12px;
`;

