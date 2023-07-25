import "@/styles/globals.css";
import "mdb-ui-kit/css/mdb.min.css";
import Head from "next/head.js";
import Script from "next/script.js";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script //MDB
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.js"
      />
    </>
  );
}
