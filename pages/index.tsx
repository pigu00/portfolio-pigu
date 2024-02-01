import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Roberto Marbán Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Roberto Marban" />
        <meta name="keywords" content="ReactJS, Angular, Node.JS" />
        <meta name="description" content="Fullstack Developer" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Blaiti - Frontend Developer" />
        <meta property="og:locale" content="es_ES" />
        <title data-rh="true">Roberto Marbán Fullstack Developer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Roberto Marbán Fullstack Developer"/>
        <meta data-rh="true" property="og:image" content="/images/cambiari.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;