import { Html, Head, Main, NextScript } from "next/document";

import {
  legal_sheet_width,
  legal_sheet_height,
  letter_sheet_width,
  letter_sheet_height,
  page_width,
  page_height,
  letter_page_width,
  letter_page_height,
} from "common/dimensions";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          :root {
            --legal-sheet-width: ${legal_sheet_width};
            --legal-sheet-height: ${legal_sheet_height};

            --letter-sheet-width: ${letter_sheet_width};
            --letter-sheet-height: ${letter_sheet_height};

            --page-width: ${page_width};
            --page-height: ${page_height};

            --letter-page-width: ${letter_page_width};
            --letter-page-height: ${letter_page_height};
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
