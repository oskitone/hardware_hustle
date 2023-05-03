import Head from "next/head";
import Page from "components/page";
import RollGrid from "components/roll-grid";
import Rules from "components/rules";
import TurnGrid from "components/turn-grid";

import { Open_Sans } from "next/font/google";

const font = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.className}`}>
        <Page split>
          <Rules />
          <TurnGrid
            count={9}
            startingValues={{
              money: [20],
              time: [16, 16, 14, 12, 12, 12, 8, 6, 4],
              A: [0],
              B: [0],
              C: [0],
              D: [0],
              AB: [0],
              ABC: [0],
              ABCD: [0],
            }}
          />
        </Page>
        <Page>
          <RollGrid columns={35} rows={25} />
        </Page>
      </main>
    </>
  );
}
