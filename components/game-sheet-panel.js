// TODO: vs GameSheet

import { defaultTurnsData } from "components/turn";
import Panel from "components/panel";
import Sidebar from "components/sidebar";
import TurnGrid from "components/turn-grid";

const GameSheetPanel = ({ year, draftId, side }) => (
  <Panel side={side} size="zine">
    <Panel split double isSubpanel={!!side} size="zine">
      <Sidebar turnsData={defaultTurnsData} year={year} draftId={draftId} />
      <TurnGrid turnsData={defaultTurnsData} />
    </Panel>
  </Panel>
);

GameSheetPanel.defaultProps = {
  year: undefined,
  draftId: undefined,
  side: undefined,
};

export default GameSheetPanel;
