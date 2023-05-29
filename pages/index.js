import { isUndefined } from "lodash";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";

import { Front, Back } from "components/sheet";
import { getCommitProps } from "common/utils";
import { makeTurnData } from "components/turn";
import Page from "components/page";
import RollGrid from "components/roll-grid";
import Sidebar from "components/sidebar";
import TurnGrid from "components/turn-grid";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function Home({ gamesPerSheet, copies, year, draftId, reverse }) {
  const router = useRouter();
  copies = !isUndefined(router.query.copies)
    ? parseInt(router.query.copies)
    : copies;
  reverse = !isUndefined(router.query.reverse) || reverse;

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

  let sheets = [];

  for (let i = 0; i < copies; i++) {
    sheets = [
      ...sheets,
      ...[
        <Front>
          {[...Array(gamesPerSheet || 0)].map((e, i) => (
            <Page split key={i}>
              <Sidebar turnsData={turnsData} year={year} draftId={draftId} />
              <TurnGrid turnsData={turnsData} />
            </Page>
          ))}
        </Front>,
        <Back>
          {[...Array(gamesPerSheet || 0)].map((e, i) => (
            <Page key={i}>
              <RollGrid columns={35} rows={25} />
            </Page>
          ))}
        </Back>,
      ],
    ];
  }

  if (reverse) {
    sheets = sheets.reverse();
  }

  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.className}`}>
        {sheets.map((sheet, i) => sheet)}
      </main>
    </>
  );
}

Home.defaultProps = {
  gamesPerSheet: 2,
  copies: 1,
  year: undefined,
  draftId: undefined,
  reverse: false,
};

export default Home;
