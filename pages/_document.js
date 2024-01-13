import { Html, Head, Main, NextScript } from "next/document";

import {
  letter_page_width,
  letter_page_height,
  panel_width,
  panel_height,
} from "common/dimensions";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          :root {
            --letter-page-width: ${letter_page_width};
            --letter-page-height: ${letter_page_height};

            --panel-width: ${panel_width};
            --panel-height: ${panel_height};
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
