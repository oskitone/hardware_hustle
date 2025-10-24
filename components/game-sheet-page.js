import { Open_Sans } from "next/font/google";
import Head from "next/head";

import Page from "../components/page";
import {
  letter_page_width,
  letter_page_height,
  ledger_page_width,
  ledger_page_height,
  game_sheet_panel_width,
  game_sheet_panel_height,
} from "../common/dimensions";
import GameSheetPanel from "../components/game-sheet-panel";

const font = Open_Sans({ subsets: ["latin"] });

function GameSheetPage({
  children,
  pageCount,
  gamesPerPage,
  pageSize,
  year,
  draftId,
}) {
  const pageDimensions = {
    letter: `${letter_page_width} ${letter_page_height}`,
    ledger: `${ledger_page_width} ${ledger_page_height}`,
    single: `${game_sheet_panel_width} ${game_sheet_panel_height}`,
  }[pageSize];

  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`@page { size: ${pageDimensions}; }`}</style>
      </Head>
      <main className={`${font.className}`}>
        {[...Array(pageCount || 0)].map((e, i) => (
          <Page size={pageSize} key={i}>
            {[...Array(gamesPerPage || 0)].map((e, ii) => (
              <GameSheetPanel
                flip={pageSize == "ledger" && ii < gamesPerPage / 2}
                year={year}
                draftId={draftId}
                key={ii}
              />
            ))}
          </Page>
        ))}
        {children}
      </main>
    </>
  );
}

GameSheetPage.defaultProps = {
  pageCount: 1,
  gamesPerPage: 2,
  pageSize: "letter",
  year: undefined,
  draftId: undefined,
};

export default GameSheetPage;
