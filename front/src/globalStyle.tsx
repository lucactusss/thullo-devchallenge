import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    width: 100vw;
    justify-content: center;
    text-rendering: optimizeLegibility;
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.url};
    :visited {
      color: ${({ theme }) => theme.urlHover};
    }
  }

  th {
    color: ${({ theme }) => theme.text} !important;
  }

  .MuiInputLabel-outlined {
    color: ${({ theme }) => theme.text} !important;
  }

  .ReactModal__Content {
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  `;
