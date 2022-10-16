import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig';

const MainWrapper = styled.main`
    padding-top: 100px;
`;
const Layout = ({ children }) => {
  const { activeTheme } = useSelector(state => state.user);

  return (
    <>
      <ThemeProvider theme={activeTheme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <MainWrapper>
            {children}
        </MainWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
