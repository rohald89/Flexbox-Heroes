import '@code-hike/mdx/dist/index.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from '../app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig';
import Layout from '../components/Layout.jsx';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Flexbox Heroes</title>
        <meta name="title" content="Flexbox Heroes"/>
        <meta name="description" content="Your one stop shop for everything Flexbox CSS properties"/>
        <meta name="keywords" content="css, css3, flexbox, grid, layouts, html, layout, playground, challenges, game, learn, education, visualizer, interactive"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
      </Head>
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
