import { Html, Head, Main, NextScript } from "next/document";

import {
  legal_page_width,
  legal_page_height,
  letter_page_width,
  letter_page_height,
  panel_width,
  panel_height,
  letter_panel_width,
  letter_panel_height,
} from "common/dimensions";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          :root {
            --legal-page-width: ${legal_page_width};
            --legal-page-height: ${legal_page_height};

            --letter-page-width: ${letter_page_width};
            --letter-page-height: ${letter_page_height};

            --panel-width: ${panel_width};
            --panel-height: ${panel_height};

            --letter-panel-width: ${letter_panel_width};
            --letter-panel-height: ${letter_panel_height};
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
