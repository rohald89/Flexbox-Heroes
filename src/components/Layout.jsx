import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig';

const Layout = ({ children }) => {
  const { activeTheme } = useSelector(state => state.user);

  return (
    <>
      <ThemeProvider theme={activeTheme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
