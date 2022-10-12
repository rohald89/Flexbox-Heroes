import '@code-hike/mdx/dist/index.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from '../app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig';
import Layout from '../components/Layout.jsx';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
