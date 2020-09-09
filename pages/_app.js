import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  console.log("pageProps >>>", pageProps);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/images/5.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Taviraj:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300&family=Taviraj:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
