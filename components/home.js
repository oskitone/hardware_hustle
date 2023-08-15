import { Open_Sans } from "next/font/google";
import Head from "next/head";

import { Front } from "components/sheet";
import { defaultTurnsData } from "components/turn";
import Page from "components/page";
import Sidebar from "components/sidebar";
import TurnGrid from "components/turn-grid";

const font = Open_Sans({ subsets: ["latin"] });

function Home({ gamesPerSheet, sheetSize, year, draftId }) {
  // TODO: DRY against globals.css?
  const legal_sheet_width = "8.5in";
  const legal_sheet_height = "14in";
  const letter_sheet_width = "8.5in";
  const letter_sheet_height = "11in";

  const pageSize = {
    legal: `${legal_sheet_width} ${legal_sheet_height}`,
    letter: `${letter_sheet_width} ${letter_sheet_height}`,
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
        <Front size={sheetSize}>
          {[...Array(gamesPerSheet || 0)].map((e, i) => (
            <Page split key={i}>
              <Sidebar
                turnsData={defaultTurnsData}
                year={year}
                draftId={draftId}
              />
              <TurnGrid turnsData={defaultTurnsData} />
            </Page>
          ))}
        </Front>
      </main>
    </>
  );
}

Home.defaultProps = {
  gamesPerSheet: 2,
  sheetSize: "legal",
  year: undefined,
  draftId: undefined,
};

export default Home;
