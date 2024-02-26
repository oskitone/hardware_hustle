import { range } from "lodash";

import { GameSheetZinePanel } from "components/game-sheet-panel";
import Page from "components/page";
import Panel from "components/panel";
import RollTable from "components/roll-table";
import Rules from "components/rules.mdx";
import Spread from "components/spread";

function Booklet({
  year,
  draftId,

  rulesPanelsCount,
  rollTablePanelsCount,
  gameSheetPanels,

  panelsPerPageSide,
}) {
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

  const getGameSheetZinePanelSide = (key) => {
    return key % 2 == 0 ? "left" : "right";
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
    ...range(gameSheetPanels).map((key) => (
      <GameSheetZinePanel
        key={rulesPanelsCount + key}
        year={year}
        draftId={draftId}
        side={getGameSheetZinePanelSide(key)}
      />
    )),
    ...range(rollTablePanelsCount).map((key) => (
      <Panel size="zine" key={rulesPanelsCount + rollTablePanelsCount + key}>
        <RollTable />
      </Panel>
    )),
  ];

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

Booklet.defaultProps = {
  year: undefined,
  draftId: undefined,

  /*
  For proper layout:
    * gameSheetPanels must be a multiple of 2
    * Both rulesPanelsCount and gameSheetPanels must be odd
    * Sum of all three is multiple of 4 but ideally 8 to fill paper
  */
  rulesPanelsCount: 7,
  rollTablePanelsCount: 1,
  gameSheetPanels: 0,

  panelsPerPageSide: 4,
};

export default Booklet;
