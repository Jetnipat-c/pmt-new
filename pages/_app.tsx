import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "antd/dist/antd.css";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
   * {
    font-family: "Prompt", sans-serif;
  }
  :root {
  --white: #F7F6F8;
  --light_blue: #95A8BC;
  --light_gray: #A7A4B3;
  --light_purple: #8C8BA1;
  --purple: #56536C;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>PMT | Pattotech</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
