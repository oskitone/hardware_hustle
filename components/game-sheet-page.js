import { Open_Sans } from "next/font/google";
import Head from "next/head";

import Page from "components/page";
import {
  legal_page_width,
  legal_page_height,
  letter_page_width,
  letter_page_height,
  game_sheet_panel_width,
  game_sheet_panel_height,
} from "common/dimensions";
import GameSheetPanel from "components/game-sheet-panel";

const font = Open_Sans({ subsets: ["latin"] });

function GameSheetPage({ pageCount, gamesPerPage, pageSize, year, draftId }) {
  const pageDimensions = {
    legal: `${legal_page_width} ${legal_page_height}`,
    letter: `${letter_page_width} ${letter_page_height}`,
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
              <GameSheetPanel year={year} draftId={draftId} key={ii} />
            ))}
          </Page>
        ))}
      </main>
    </>
  );
}

GameSheetPage.defaultProps = {
  pageCount: 1,
  gamesPerPage: 2,
  pageSize: "legal",
  year: undefined,
  draftId: undefined,
};

export default GameSheetPage;
