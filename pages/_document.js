import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2FGEVX605M"
          strategy="afterInteractive"
        />
        <Script id="gtm" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2FGEVX605M');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
