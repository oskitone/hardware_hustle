import { Html, Head, Main, NextScript } from "next/document";

import {
  letter_page_width,
  letter_page_height,
  ledger_page_width,
  ledger_page_height,
  game_sheet_panel_width,
  game_sheet_panel_height,
  booklet_panel_width,
  booklet_panel_height,
} from "../common/dimensions";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          :root {
            --letter-page-width: ${letter_page_width};
            --letter-page-height: ${letter_page_height};

            --ledger-page-width: ${ledger_page_width};
            --ledger-page-height: ${ledger_page_height};

            --game-sheet-panel-width: ${game_sheet_panel_width};
            --game-sheet-panel-height: ${game_sheet_panel_height};

            --booklet-panel-width: ${booklet_panel_width};
            --booklet-panel-height: ${booklet_panel_height};
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
