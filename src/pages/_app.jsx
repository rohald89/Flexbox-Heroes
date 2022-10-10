import "@code-hike/mdx/dist/index.css"
import { ThemeProvider } from "styled-components"
import { useState } from 'react';
import { Provider } from "react-redux";
import { persistor, store } from "../app/store";
import { PersistGate } from "redux-persist/integration/react";
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme =() => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
        </PersistGate>
        </Provider>
    </ThemeProvider>
  </>
)}

export default MyApp
