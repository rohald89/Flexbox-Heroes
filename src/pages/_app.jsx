import '@code-hike/mdx/dist/index.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig';
import Layout from '../components/Layout.jsx';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
