import { range } from "lodash";

import { Open_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import { letter_page_width, letter_page_height } from "common/dimensions";
import Page from "components/page";
import Panel from "components/panel";
import RollTable from "components/roll-table";
import Rules from "components/rules.mdx";
import Spread from "components/spread";

import { getCommitProps } from "common/utils";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function RulesPage({
  year,
  draftId,

  view,

  rulesPanelsCount,
  rollTablePanelsCount,

  panelsPerPageSide,
}) {
  const pageDimensions = `${letter_page_width} ${letter_page_height}`;

  const router = useRouter();
  view = view || router.query.view;

  const getPagedPanelIds = (panelCount) => {
    const pageCount = Math.ceil(panelCount / (panelsPerPageSide * 2));
    const ids = range(panelCount);
    const output = [];

    for (let i = 0; i < pageCount; i++) {
      const FRONT_TOP = [];
      const FRONT_BOTTOM = [];
      const BACK_TOP = [];
      const BACK_BOTTOM = [];

      FRONT_TOP.push(ids.pop());
      FRONT_TOP.push(ids.shift());
      BACK_TOP.push(ids.shift());
      BACK_TOP.push(ids.pop());

      FRONT_BOTTOM.push(ids.pop());
      FRONT_BOTTOM.push(ids.shift());
      BACK_BOTTOM.push(ids.shift());
      BACK_BOTTOM.push(ids.pop());

      output.push([FRONT_TOP, FRONT_BOTTOM]);
      output.push([BACK_TOP, BACK_BOTTOM]);
    }

    return output;
  };

  const panels = [
    ...range(rulesPanelsCount).map((panelId, key) => (
      <Panel size="zine" key={key}>
        <Rules
          panel={panelId}
          panelCount={rulesPanelsCount}
          year={year}
          draftId={draftId}
        />
      </Panel>
    )),
    ...range(rollTablePanelsCount).map((key) => (
      <Panel size="zine" key={rulesPanelsCount + key}>
        <RollTable />
      </Panel>
    )),
  ];

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
        {getPagedPanelIds(panels.length).map((spreadPanelIds, pageId) => (
          <Page size="letter" key={pageId}>
            {spreadPanelIds.map((ids, key) => (
              <Spread key={key}>{ids.map((id) => panels[id])}</Spread>
            ))}
          </Page>
        ))}
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

  rulesPanelsCount: 7,
  rollTablePanelsCount: 1,

  panelsPerPageSide: 4,
};

export default RulesPage;
