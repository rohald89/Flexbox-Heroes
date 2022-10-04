import "@code-hike/mdx/dist/index.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Provider } from "react-redux";
import { persistor, store } from "../app/store";
import { PersistGate } from "redux-persist/integration/react";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`;

const theme = {
    colors: {
        background: "#21252c",
        text: "#ECEFF3",
    }
}

function MyApp({ Component, pageProps }) {
  return (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
        </PersistGate>
        </Provider>
    </ThemeProvider>
  </>
)}

export default MyApp
