import { Open_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import { getCommitProps } from "common/utils";
import { letter_page_width, letter_page_height } from "common/dimensions";
import Panel from "components/panel";
import Rules from "components/rules.mdx";
import Page, { Front, Back } from "components/page";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

// TODO: #/4 panel count?
// TODO: deter widows/orphans in headers/icons

function RulesPage({ year, draftId, view }) {
  const pageDimensions = `${letter_page_height} ${letter_page_width}`;

  const router = useRouter();
  view = view || router.query.view;

  function getContent() {
    if (view == "all") {
      return (
        <Page size="full">
          <Rules />
        </Page>
      );
    }

    return (
      <>
        <Front size="letter" landscape>
          <Panel size="letter" landscape>
            <Rules panel={3} panelCount={4} year={year} draftId={draftId} />
          </Panel>
          <Panel size="letter" landscape>
            <Rules panel={0} panelCount={4} year={year} draftId={draftId} />
          </Panel>
        </Front>
        <Back size="letter" landscape>
          <Panel size="letter" landscape>
            <Rules panel={1} panelCount={4} year={year} draftId={draftId} />
          </Panel>
          <Panel size="letter" landscape>
            <Rules panel={2} panelCount={4} year={year} draftId={draftId} />
          </Panel>
        </Back>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`@page { size: ${pageDimensions}; }`}</style>
      </Head>
      <main className={`${font.className}`}>{getContent()}</main>
    </>
  );
}

RulesPage.defaultProps = {
  year: undefined,
  draftId: undefined,
  view: undefined,
};

export default RulesPage;
