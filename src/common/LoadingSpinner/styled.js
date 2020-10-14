import styled from "styled-components";

export const Container = styled.div`
  margin: 120px 0 0;
`;

export const BaseWheel = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 12px solid ${({ theme }) => theme.colors.Snuff};
  background-color: transparent;
`;

export const RotatingQuarter = styled.div`
  width: 45px;
  height: 45px;
  transform: translate(-12px, -12px) rotateZ(0deg);
  position: absolute;
  top: 0px;
  left: 45px;
  border-top-right-radius: 100%;
  border: 12px solid ${({ theme }) => theme.colors.Black};
  border-bottom: none;
  border-left: none;
  animation: rotatingAnimation 1s infinite linear;
  transform-origin: 0 100%;

  @keyframes rotatingAnimation {
    from {
      transform: translate(-12px, -12px) rotateZ(0);
    }

    to {
      transform: translate(-12px, -12px) rotateZ(360deg);
    }
  }
`;
