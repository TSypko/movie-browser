import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`

  ${normalize}

  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.colors.Mercury};
    font-family: 'Poppins', sans-serif;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`