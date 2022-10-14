import '@code-hike/mdx/dist/index.css';
import { Provider } from 'react-redux';
import { persistor, store } from '../app/store';
import { PersistGate } from 'redux-persist/integration/react';
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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
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
