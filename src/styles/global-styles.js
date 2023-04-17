import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const GobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body{
    ${() => css`
      background: ${theme.colors.mainBg};
    `}
  }
`;
