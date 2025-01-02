import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import "react-multi-carousel/lib/styles.css";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        {/*  <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        /> */}
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
