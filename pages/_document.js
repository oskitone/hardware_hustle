import { Html, Head, Main, NextScript } from "next/document";

import {
  legal_page_width,
  legal_page_height,
  letter_page_width,
  letter_page_height,
  game_sheet_panel_width,
  game_sheet_panel_height,
  zine_panel_width,
  zine_panel_height,
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

            --game-sheet-panel-width: ${game_sheet_panel_width};
            --game-sheet-panel-height: ${game_sheet_panel_height};

            --zine-panel-width: ${zine_panel_width};
            --zine-panel-height: ${zine_panel_height};
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
