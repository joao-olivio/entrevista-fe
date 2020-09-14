import { createGlobalStyle } from 'styled-components';

export const colors = {
  colorPrimary: '#F9F9F9',
  colorSecondary: '#111111',
  colorTertiary: '#5CD0FE',
  colorGray: '#777',
  colorLightGray: '#ccc',
  colorDarkGray: '#333',
};

export default createGlobalStyle`
  :root {
    --color-primary: ${colors.colorPrimary};
    --color-secondary: ${colors.colorSecondary};
    --color-tertiary: ${colors.colorTertiary};

    --gray: ${colors.colorGray};
    --light-gray: ${colors.colorLightGray};
    --dark-gray: ${colors.colorDarkGray};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: var(--color-primary);
    color: var(--color-secondary);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
  }

  button {
    cursor: pointer;
  }
`;
