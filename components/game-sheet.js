import { Open_Sans } from "next/font/google";
import Head from "next/head";

import Page from "components/page";
import { defaultTurnsData } from "components/turn";
import Panel from "components/panel";
import Sidebar from "components/sidebar";
import TurnGrid from "components/turn-grid";
import {
  legal_page_width,
  legal_page_height,
  letter_page_width,
  letter_page_height,
  panel_width,
  panel_height,
} from "common/dimensions";

const font = Open_Sans({ subsets: ["latin"] });

export const GameSheetPanel = ({ year, draftId, isSubpanel }) => (
  <Panel split double isSubpanel={isSubpanel}>
    <Sidebar turnsData={defaultTurnsData} year={year} draftId={draftId} />
    <TurnGrid turnsData={defaultTurnsData} />
  </Panel>
);

export const GameSheetSubPanel = ({ year, draftId, side }) => (
  <Panel side={side}>
    <GameSheetPanel year={year} draftId={draftId} isSubpanel={!!side} />
  </Panel>
);

GameSheetSubPanel.defaultProps = {
  year: undefined,
  draftId: undefined,
  side: undefined,
};

function GameSheet({ pageCount, gamesPerPage, pageSize, year, draftId }) {
  const panelSize = {
    legal: `${legal_page_width} ${legal_page_height}`,
    letter: `${letter_page_width} ${letter_page_height}`,
    single: `${panel_width} ${panel_height}`,
  }[pageSize];

  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`@panel { size: ${panelSize}; }`}</style>
      </Head>
      <main className={`${font.className}`}>
        {[...Array(pageCount || 0)].map((e, i) => (
          <Page size={pageSize} key={i}>
            {[...Array(gamesPerPage || 0)].map((e, ii) => (
              <GameSheetPanel key={ii} />
            ))}
          </Page>
        ))}
      </main>
    </>
  );
}

GameSheet.defaultProps = {
  pageCount: 1,
  gamesPerPage: 2,
  pageSize: "letter",
  year: undefined,
  draftId: undefined,
};

export default GameSheet;
