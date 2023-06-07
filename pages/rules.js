import { Open_Sans } from "next/font/google";
import Head from "next/head";

import { Front, Back } from "components/sheet";
import { getCommitProps } from "common/utils";
import Cover from "components/cover";
import Page from "components/page";
import Rules from "components/rules.mdx";
import Scoresheet from "components/scoresheet";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function RulesPage({ year, draftId }) {
  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.className}`}>
        <Front landscape>
          <Page landscape>
            <Scoresheet />
          </Page>
          <Page landscape>
            <Cover draftId={draftId} />
          </Page>
        </Front>
        <Back landscape>
          <Page landscape double>
            <Rules year={year} draftId={draftId} />
          </Page>
        </Back>
      </main>
    </>
  );
}

RulesPage.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default RulesPage;