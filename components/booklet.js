import { range } from "lodash";

import { GameSheetBookletPanel } from "../components/game-sheet-panel";
import Page from "../components/page";
import Panel from "../components/panel";
import RollTable from "../components/roll-table";
import Rules from "../components/rules.mdx";
import Spread from "../components/spread";

function Booklet({
  year,
  draftId,

  zine,

  rulesPanelsCount,
  rollTablePanelsMinCount,
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

  const getGameSheetBookletPanelSide = (key) => {
    return key % 2 == 0 ? "left" : "right";
  };

  const rollTablePanelsAfterRules =
    gameSheetPanels > 0 ? (rulesPanelsCount + 1) % 2 : 0;
  const rollTablePanelsAfterGameSheets = Math.max(
    0,
    rollTablePanelsMinCount - rollTablePanelsAfterRules
  );
  const rollTablePanelsAtEnd =
    (rulesPanelsCount +
      rollTablePanelsAfterRules +
      gameSheetPanels +
      rollTablePanelsAfterGameSheets) %
    2;
  const rollTablePanelsCount =
    rollTablePanelsAfterRules +
    rollTablePanelsAfterGameSheets +
    rollTablePanelsAtEnd;

  const panels = [
    ...range(rulesPanelsCount).map((panelId, key) => (
      <Panel booklet={true} key={key}>
        <Rules
          panel={panelId}
          panelCount={rulesPanelsCount}
          year={year}
          draftId={draftId}
          zine={zine}
          rollTablePanelsCount={rollTablePanelsCount}
        />
      </Panel>
    )),
    ...range(rollTablePanelsAfterRules).map((key) => (
      <Panel booklet={true} key={key}>
        <RollTable />
      </Panel>
    )),
    ...range(gameSheetPanels).map((key) => (
      <GameSheetBookletPanel
        key={rulesPanelsCount + key}
        year={year}
        draftId={draftId}
        side={getGameSheetBookletPanelSide(key)}
      />
    )),
    ...range(rollTablePanelsAfterGameSheets).map((key) => (
      <Panel booklet={true} key={key}>
        <RollTable />
      </Panel>
    )),
    ...range(rollTablePanelsAtEnd).map((key) => (
      <Panel booklet={true} key={key}>
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

  zine: false,

  /*
  For proper layout:
    * gameSheetPanels must be a multiple of 2
  */
  rulesPanelsCount: 8,
  rollTablePanelsMinCount: 0,
  gameSheetPanels: 0,

  panelsPerPageSide: 4,
};

export default Booklet;
