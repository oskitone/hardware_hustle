import Panel from "components/panel";
import Sidebar from "components/sidebar";
import TurnGrid from "components/turn-grid";

const GameSheetPanel = ({ year, draftId, size }) => (
  <Panel split>
    <Sidebar year={year} draftId={draftId} />
    <TurnGrid />
  </Panel>
);

GameSheetPanel.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default GameSheetPanel;
