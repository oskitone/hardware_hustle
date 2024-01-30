import Panel from "components/panel";
import Sidebar from "components/sidebar";
import TurnGrid from "components/turn-grid";

const GameSheetPanel = ({ year, draftId, showIdLine, showFooter }) => (
  <Panel split>
    <Sidebar
      year={year}
      draftId={draftId}
      showIdLine={showIdLine}
      showFooter={showFooter}
    />
    <TurnGrid />
  </Panel>
);

GameSheetPanel.defaultProps = {
  year: undefined,
  draftId: undefined,

  showIdLine: true,
  showFooter: true,
};

export default GameSheetPanel;
