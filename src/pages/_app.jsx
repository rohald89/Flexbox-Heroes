import "@code-hike/mdx/dist/index.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Provider } from "react-redux";
import { persistor, store } from "../app/store";
import { PersistGate } from "redux-persist/integration/react";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
}
`;

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
