import { Open_Sans } from "next/font/google";
import Head from "next/head";

import { Front, Back } from "components/sheet";
import { getCommitProps } from "common/utils";
import Page from "components/page";
import PageOne from "components/rules/1.mdx";
import PageTwo from "components/rules/2.mdx";
import PageThree from "components/rules/3.mdx";
import PageFour from "components/rules/4.mdx";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

// TODO: #/4 page count

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
            <PageFour />
          </Page>
          <Page landscape>
            <PageOne />
          </Page>
        </Front>
        <Back landscape>
          <Page landscape>
            <PageTwo />
          </Page>
          <Page landscape>
            <PageThree />
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
