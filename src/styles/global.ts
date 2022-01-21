import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;

    @media(max-width: 468px) {
      font-size: 9px;
    }

    @media(max-width: 368px) {
      font-size: 8px;
    }

    @media(max-width: 334px) {
      font-size: 7px;
    }
  }

  body {
    height: 100%;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
  }

  * {
    font-family: 'Fredoka One', cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
    appearance: none;
    border: none;
    text-decoration: none;
  }

`;