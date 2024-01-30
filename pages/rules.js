import { Open_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import Spread from "components/spread";
import { getCommitProps } from "common/utils";
import { letter_page_width, letter_page_height } from "common/dimensions";
import Panel from "components/panel";
import Rules from "components/rules.mdx";
import Page, { Front, Back } from "components/page";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function RulesPage({ year, draftId, view }) {
  const pageDimensions = `${letter_page_width} ${letter_page_height}`;

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
        <Front size="letter" zine>
          <Spread>
            <Panel size="zine">
              <Rules panel={7} panelCount={8} year={year} draftId={draftId} />
            </Panel>
            <Panel size="zine">
              <Rules panel={0} panelCount={8} year={year} draftId={draftId} />
            </Panel>
          </Spread>
          <Spread>
            <Panel size="zine">
              <Rules panel={5} panelCount={8} year={year} draftId={draftId} />
            </Panel>
            <Panel size="zine">
              <Rules panel={2} panelCount={8} year={year} draftId={draftId} />
            </Panel>
          </Spread>
        </Front>
        <Back size="letter" zine>
          <Spread>
            <Panel size="zine">
              <Rules panel={1} panelCount={8} year={year} draftId={draftId} />
            </Panel>
            <Panel size="zine">
              <Rules panel={6} panelCount={8} year={year} draftId={draftId} />
            </Panel>
          </Spread>
          <Spread>
            <Panel size="zine">
              <Rules panel={3} panelCount={8} year={year} draftId={draftId} />
            </Panel>
            <Panel size="zine">
              <Rules panel={4} panelCount={8} year={year} draftId={draftId} />
            </Panel>
          </Spread>
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
