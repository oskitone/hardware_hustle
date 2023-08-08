import { Open_Sans } from "next/font/google";
import Head from "next/head";

import { Front } from "components/sheet";
import { defaultTurnsData } from "components/turn";
import Page from "components/page";
import Sidebar from "components/sidebar";
import TurnGrid from "components/turn-grid";

const font = Open_Sans({ subsets: ["latin"] });

function Home({ gamesPerSheet, sheetSize, year, draftId }) {
  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
