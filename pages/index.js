import { Open_Sans } from "next/font/google";
import Head from "next/head";

import { GameSheetPanel } from "components/game-sheet";
import Spread from "components/spread";
import { getCommitProps } from "common/utils";
import { letter_page_width, letter_page_height } from "common/dimensions";
import Page from "components/page";
import { RollTablePanel } from "components/roll-table";
import Panel from "components/panel";
import { RulesPanel } from "./rules.js";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function Index({ year, draftId }) {
  const panelSize = `${letter_page_height} ${letter_page_width}`;

  function getContent() {
    return (
      <>
        <Page>
          <Spread>
            <RulesPanel panel={7} year={year} draftId={draftId} />
            <RulesPanel panel={0} year={year} draftId={draftId} />
          </Spread>
          <Spread>
            <RulesPanel panel={5} year={year} draftId={draftId} />
            <RulesPanel panel={2} year={year} draftId={draftId} />
          </Spread>
        </Page>
        <Page>
          <Spread>
            <RulesPanel panel={6} year={year} draftId={draftId} />
            <RulesPanel panel={1} year={year} draftId={draftId} />
          </Spread>
          <Spread>
            <RulesPanel panel={3} year={year} draftId={draftId} />
            <RulesPanel panel={4} year={year} draftId={draftId} />
          </Spread>
        </Page>

        <Page>
          <GameSheetPanel />
          <GameSheetPanel />
        </Page>
        <Page>
          <GameSheetPanel />
          <GameSheetPanel />
        </Page>

        <Page>
          <Spread>
            <RollTablePanel />
            <RollTablePanel />
          </Spread>
          <Spread>
            <RollTablePanel />
            <RollTablePanel />
          </Spread>
        </Page>
        <Page>
          <Spread>
            <RollTablePanel />
            <RollTablePanel />
          </Spread>
          <Spread>
            <RollTablePanel />
            <RollTablePanel />
          </Spread>
        </Page>
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

Index.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default Index;
