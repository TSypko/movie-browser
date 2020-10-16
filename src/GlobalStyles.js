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
    background: ${({ theme }) => theme.colors.Whisper};
    font-family: 'Poppins', sans-serif;
  }
`