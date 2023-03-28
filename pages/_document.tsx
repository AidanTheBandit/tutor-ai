import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Ai homework assistant."
          />
          <meta property="og:site_name" content="AI Tutor" />
          <meta
            property="og:description"
            content="Get help with homework in seconds."
          />
          <meta property="og:title" content="Ai Tutor" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ai Tutor" />
          <meta
            name="twitter:description"
            content="Ai homework assistant."
          />
          <meta
            property="og:image"
            content="https://us-east-1.tixte.net/uploads/i.banditco.dev/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://us-east-1.tixte.net/uploads/i.banditco.dev/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
