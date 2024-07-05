// src/styles/theme.js
export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    // Add more colors
  },
  // Add more theme variables
};

// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }
  // Add more global styles
`;
