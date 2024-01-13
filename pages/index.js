import { Open_Sans } from "next/font/google";
import Head from "next/head";

import { Front, Back } from "components/page";
import { getCommitProps } from "common/utils";
import { letter_page_width, letter_page_height } from "common/dimensions";

import GameSheetPanel from "components/game-sheet-panel";
import RollTablePanel from "components/roll-table";
import RulesPanel from "components/rules-panel.js";
import Spread from "components/spread";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function Index({ year, draftId }) {
  // TODO: fix panelSize stuff in main. Legal PDF probably is wrong?
  const pageSize = `${letter_page_height} ${letter_page_width}`;

  // Name   Count   Panel(s)
  // Rules  7       0-6
  // Game   6       7-12
  // Roll   3       13-15

  // Intentionally leaving off cover but it's effectively 4 blank panels

  // TODO: consider slight page reorder for easier assembly

  const panels = [
    <RulesPanel panel={0} year={year} draftId={draftId} />,
    <RulesPanel panel={1} year={year} draftId={draftId} />,
    <RulesPanel panel={2} year={year} draftId={draftId} />,
    <RulesPanel panel={3} year={year} draftId={draftId} />,
    <RulesPanel panel={4} year={year} draftId={draftId} />,
    <RulesPanel panel={5} year={year} draftId={draftId} />,
    <RulesPanel panel={6} year={year} draftId={draftId} />,
    <GameSheetPanel year={year} draftId={draftId} side="left" />,
    <GameSheetPanel year={year} draftId={draftId} side="right" />,
    <GameSheetPanel year={year} draftId={draftId} side="left" />,
    <GameSheetPanel year={year} draftId={draftId} side="right" />,
    <GameSheetPanel year={year} draftId={draftId} side="left" />,
    <GameSheetPanel year={year} draftId={draftId} side="right" />,
    <GameSheetPanel year={year} draftId={draftId} side="left" />,
    <GameSheetPanel year={year} draftId={draftId} side="right" />,
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
        <style>{`@panel { size: ${pageSize}; }`}</style>
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
