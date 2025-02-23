// pages/_app.js
import Head from "next/head";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Arinze Obieze - Full-Stack Developer</title>
        <meta name="description" content="I am a full-stack developer specializing in Saas projects using Next.js and React. Explore my projects, testimonials, and contact me for collaborations." />
        <meta name="keywords" content="Next.js, React, Full-Stack Developer, JavaScript, Portfolio , Web Developer, Typescript ,Tech blog, Tailwind css" />
        <meta name="author" content="Arinze Obieze" />
        <meta property="og:title" content="Arinze Obieze - Full-Stack Web Developer" />
        <meta property="og:description" content="I build high-performance web applications using Next.js and React." />
        <meta property="og:image" content="/arinzep.jpeg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
