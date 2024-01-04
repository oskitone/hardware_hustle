import { Open_Sans } from "next/font/google";
import Head from "next/head";

import Sheet from "components/sheet";
import { defaultTurnsData } from "components/turn";
import Page from "components/page";
import Sidebar from "components/sidebar";
import TurnGrid from "components/turn-grid";
import {
  legal_sheet_width,
  legal_sheet_height,
  letter_sheet_width,
  letter_sheet_height,
  page_width,
  page_height,
} from "common/dimensions";

const font = Open_Sans({ subsets: ["latin"] });

function Home({ sheetCount, gamesPerSheet, sheetSize, year, draftId }) {
  const pageSize = {
    legal: `${legal_sheet_width} ${legal_sheet_height}`,
    letter: `${letter_sheet_width} ${letter_sheet_height}`,
    single: `${page_width} ${page_height}`,
  }[sheetSize];

  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`@page { size: ${pageSize}; }`}</style>
      </Head>
      <main className={`${font.className}`}>
        {[...Array(sheetCount || 0)].map((e, i) => (
          <Sheet size={sheetSize} key={i}>
            {[...Array(gamesPerSheet || 0)].map((e, ii) => (
              <Page split key={ii}>
                <Sidebar
                  turnsData={defaultTurnsData}
                  year={year}
                  draftId={draftId}
                />
                <TurnGrid turnsData={defaultTurnsData} />
              </Page>
            ))}
          </Sheet>
        ))}
      </main>
    </>
  );
}

Home.defaultProps = {
  sheetCount: 1,
  gamesPerSheet: 2,
  sheetSize: "legal",
  year: undefined,
  draftId: undefined,
};

export default Home;
