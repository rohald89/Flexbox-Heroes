import "@code-hike/mdx/dist/index.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"

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
        <Component {...pageProps} />
    </ThemeProvider>
  </>
)}

export default MyApp
