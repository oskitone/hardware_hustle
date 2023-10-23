import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

import { Front } from "components/sheet";
import { getCommitProps } from "common/utils";
import Page from "components/page";
import Wordmark from "components/wordmark";

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
          <Page className={styles.Page}>
            <Wordmark draftId={draftId} className={styles.Wordmark} />
            <ul className={styles.navigation}>
              <li>
                <Link href="/letter">Game sheet (letter paper)</Link>
              </li>
              <li>
                <Link href="/legal">Game sheet (legal paper)</Link>
              </li>
              <li>
                <Link href="/single">Game sheet (single)</Link>
              </li>
              <li>
                <Link href="/rules">Rules (letter paper)</Link>
              </li>
              <li>
                <Link href="/roll-table">Roll table (letter paper)</Link>
              </li>
            </ul>
          </Page>
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
