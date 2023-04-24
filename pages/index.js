import Head from "next/head";
import Page from "components/page";
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
        <Page>
          <Rules />
          <TurnGrid />
        </Page>
      </main>
    </>
  );
}
