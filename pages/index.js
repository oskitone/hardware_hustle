import { Open_Sans } from "next/font/google";
import Head from "next/head";

import { Front } from "components/sheet";
import { getCommitProps } from "common/utils";
import { makeTurnData } from "components/turn";
import Page from "components/page";
import Sidebar from "components/sidebar";
import TurnGrid from "components/turn-grid";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function Home({ gamesPerSheet, year, draftId }) {
  const turnsData = [
    makeTurnData({
      money: [10],
      A: [0],
      B: [0],
      C: [0],
      D: [0],
      AB: [0],
      ABC: [0],
      ABCD: [0],
      opportunity: [12],
    }),
    makeTurnData({ opportunity: [12] }),
    makeTurnData({ opportunity: [8] }),
    makeTurnData({ opportunity: [8] }),
    makeTurnData({ opportunity: [4] }),
    makeTurnData({ opportunity: [4] }),
  ];

  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.className}`}>
        <Front>
          {[...Array(gamesPerSheet || 0)].map((e, i) => (
            <Page split key={i}>
              <Sidebar turnsData={turnsData} year={year} draftId={draftId} />
              <TurnGrid turnsData={turnsData} />
            </Page>
          ))}
        </Front>
      </main>
    </>
  );
}

Home.defaultProps = {
  gamesPerSheet: 2,
  year: undefined,
  draftId: undefined,
};

export default Home;
