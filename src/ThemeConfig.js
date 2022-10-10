import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: '#fff',
  text: '#363537',
  toggleBorder: '#fff',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  overflow: hidden;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  min-height: 100vh;
  background: ${(theme) => theme.body };
  color: ${(theme) => theme.text };
  font-family: 'Rubik', sans-serif;
}
`;

