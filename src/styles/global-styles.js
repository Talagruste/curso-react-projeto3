import { createGlobalStyle } from 'styled-components';

export const GobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,900;1,500;1,900&family=Plus+Jakarta+Sans:wght@500&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.family.default};
  }

  h1, h2, h3, h4, h5, h6{
    font-family: ${({ theme }) => theme.fonts.family.secondary};
  }
`;
