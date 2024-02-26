import Panel from "components/panel";
import Sidebar from "components/sidebar";
import TurnGrid from "components/turn-grid";

const GameSheetPanel = ({
  year,
  draftId,
  side,
  size,
  showIdLine,
  showFooter,
}) => (
  <Panel split double isSubpanel={!!side} size={size}>
    <Sidebar
      year={year}
      draftId={draftId}
      zine={size == "zine"}
      showIdLine={showIdLine}
      showFooter={showFooter}
    />
    <TurnGrid zine={size == "zine"} />
  </Panel>
);

GameSheetPanel.defaultProps = {
  year: undefined,
  draftId: undefined,

  side: undefined,
  size: undefined,

  showIdLine: true,
  showFooter: true,
};

export const GameSheetZinePanel = ({ side }) => (
  <Panel side={side} size={"zine"}>
    <GameSheetPanel
      side={side}
      size={"zine"}
      showIdLine={false}
      showFooter={false}
    />
  </Panel>
);

GameSheetZinePanel.defaultProps = {
  side: undefined,
};

export default GameSheetPanel;
