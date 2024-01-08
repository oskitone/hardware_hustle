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

export const RulesPanel = ({ panel, year, draftId }) => (
  <Panel>
    <Rules panel={panel} panelCount={8} year={year} draftId={draftId} />
  </Panel>
);

function RulesPage({ year, draftId, view }) {
  const panelSize = `${letter_page_height} ${letter_page_width}`;

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
            <RulesPanel panel={7} year={year} draftId={draftId} />
            <RulesPanel panel={0} year={year} draftId={draftId} />
          </Spread>
          <Spread>
            <RulesPanel panel={5} year={year} draftId={draftId} />
            <RulesPanel panel={2} year={year} draftId={draftId} />
          </Spread>
        </Front>
        <Back size="letter" zine>
          <Spread>
            <RulesPanel panel={6} year={year} draftId={draftId} />
            <RulesPanel panel={1} year={year} draftId={draftId} />
          </Spread>
          <Spread>
            <RulesPanel panel={3} year={year} draftId={draftId} />
            <RulesPanel panel={4} year={year} draftId={draftId} />
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
        <style>{`@panel { size: ${panelSize}; }`}</style>
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
