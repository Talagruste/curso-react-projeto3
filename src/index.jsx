import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App';
import { GobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);
