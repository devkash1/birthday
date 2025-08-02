import Head from "next/head";
import Home from "./home/page";

export default function page() {
  return (
    <>
      <Head>
        <title>Happy Birthday!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Home />
    </>
  );
}
