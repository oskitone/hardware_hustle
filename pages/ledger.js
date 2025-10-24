import { range } from "lodash";

import Page from "../components/page";
import Panel from "../components/panel";
import GameSheetPage from "../components/game-sheet-page";
import Rules from "../components/rules.mdx";
import { getCommitProps } from "../common/utils";
export const getStaticProps = async (context) => getCommitProps();

function LedgerPage({ year, draftId }) {
  const rulesPanels = [
    { id: 4, flip: true },
    { id: 3, flip: true },
    { id: 2, flip: true },
    { id: 1, flip: true },
    { id: 5, flip: false },
    { id: 6, flip: false },
    { id: 7, flip: false },
    { id: 0, flip: false },
  ];

  return (
    <>
      <GameSheetPage
        pageCount={1}
        pageSize="ledger"
        gamesPerPage={4}
        year={year}
        draftId={draftId}
      >
        <Page size="ledger" rules={true}>
          {rulesPanels.map((panel) => (
            <Panel booklet={true} key={panel.id} flip={panel.flip}>
              <Rules
                panel={panel.id}
                panelCount={8}
                year={year}
                draftId={draftId}
                zine={true}
                rollTablePanelsCount={0}
                gameSheetsOnReverseSide={true}
              />
            </Panel>
          ))}
        </Page>
      </GameSheetPage>
    </>
  );
}

LedgerPage.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default LedgerPage;
