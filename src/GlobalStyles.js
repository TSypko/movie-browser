import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`

  ${normalize}

  html {
    box-sizing: border-box;
    height: 100%;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.colors.Mercury};
    font-family: 'Poppins', sans-serif;
    height: 100%;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`