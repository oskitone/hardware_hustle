import { Open_Sans } from "next/font/google";
import Head from "next/head";

import { GameSheetPanel, GameSheetSubPanel } from "components/game-sheet";
import Spread from "components/spread";
import { getCommitProps } from "common/utils";
import { letter_page_width, letter_page_height } from "common/dimensions";
import Page, { Front, Back } from "components/page";
import { RollTablePanel } from "components/roll-table";
import Panel from "components/panel";
import { RulesPanel } from "./rules.js";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function Index({ year, draftId }) {
  const panelSize = `${letter_page_height} ${letter_page_width}`;

  // Name   Count   Panel(s)
  // Rules  7       0-6
  // Game   6       7-12
  // Roll   3       13-15

  // Intentionally leaving off cover but it's effectively 4 blank panels

  // TODO: consider slight page reorder for easier assembly
  // TODO: For some reason, GameSheetSubPanel spreads against RulesPanel have
  //       odd margin-top, but only sometimes and only in print.
  //       Seems only on bottom half of paper?

  const panels = [
    <RulesPanel panel={0} year={year} draftId={draftId} />,
    <RulesPanel panel={1} year={year} draftId={draftId} />,
    <RulesPanel panel={2} year={year} draftId={draftId} />,
    <RulesPanel panel={3} year={year} draftId={draftId} />,
    <RulesPanel panel={4} year={year} draftId={draftId} />, // TODO: ^
    <RulesPanel panel={5} year={year} draftId={draftId} />, // TODO: ^
    <RulesPanel panel={6} year={year} draftId={draftId} />,
    <GameSheetSubPanel year={year} draftId={draftId} />,
    <GameSheetSubPanel year={year} draftId={draftId} rightSide={true} />,
    <GameSheetSubPanel year={year} draftId={draftId} />,
    <GameSheetSubPanel year={year} draftId={draftId} rightSide={true} />,
    <GameSheetSubPanel year={year} draftId={draftId} />,
    <GameSheetSubPanel year={year} draftId={draftId} rightSide={true} />,
    <RollTablePanel />,
    <RollTablePanel />,
    <RollTablePanel />,
  ];

  const PanelsSpread = ({ ids }) => (
    <Spread>
      {panels[ids[0]]}
      {panels[ids[1]]}
    </Spread>
  );

  function getContent() {
    return (
      <>
        {/* Page 1 */}
        <Front>
          <PanelsSpread ids={[15, 0]} />
          <PanelsSpread ids={[13, 2]} />
        </Front>
        <Back>
          <PanelsSpread ids={[1, 14]} />
          <PanelsSpread ids={[3, 12]} />
        </Back>

        {/* Page 2 */}
        <Front>
          <PanelsSpread ids={[11, 4]} />
          <PanelsSpread ids={[9, 6]} />
        </Front>
        <Back>
          <PanelsSpread ids={[5, 10]} />
          <PanelsSpread ids={[7, 8]} />
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

Index.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default Index;
