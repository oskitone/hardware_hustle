import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

import { Front } from "../components/page";
import { getCommitProps } from "../common/utils";
import Panel from "../components/panel";
import Wordmark from "../components/wordmark";

import {
  letter_page_width,
  letter_page_height,
  game_sheet_panel_width,
  game_sheet_panel_height,
} from "../common/dimensions";

export const getStaticProps = async (context) => getCommitProps();

const font = Open_Sans({ subsets: ["latin"] });

import styles from "@/styles/Index.module.css";

function Index({ year, draftId }) {
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
          <Panel className={styles.Panel}>
            <div>
              <Wordmark wrap={true} className={styles.Wordmark} />

              <p className={styles.description}>
                To be rendered with <code>make_pdfs.js</code>:
              </p>
              <table className={styles.navigation}>
                <tbody>
                  <tr>
                    <td>Single game sheet</td>
                    <td>
                      <Link href="/single/">/single</Link>
                    </td>
                    <td>
                      {game_sheet_panel_width}&times;{game_sheet_panel_height}
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Two game sheets</td>
                    <td>
                      <Link href="/letter/">/letter</Link>
                    </td>
                    <td>
                      {letter_page_width}&times;{letter_page_height}
                    </td>
                  </tr>
                  <tr>
                    <td>Rules booklet</td>
                    <td>
                      <Link href="/rules">/rules</Link>
                    </td>
                    <td>
                      {letter_page_width}&times;{letter_page_height}
                    </td>
                  </tr>
                  <tr>
                    <td>Game zine booklet</td>
                    <td>
                      <Link href="/zine">/zine</Link>
                    </td>
                    <td>
                      {letter_page_width}&times;{letter_page_height}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                {year} CC BY-SA 4.0 - oskitone.com - {draftId}
              </p>
            </div>
          </Panel>
        </Front>
      </main>
    </>
  );
}

Index.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default Index;
