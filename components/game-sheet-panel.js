import Panel from "../components/panel";
import Sidebar from "../components/sidebar";
import TurnGrid from "../components/turn-grid";

const GameSheetPanel = ({ flip, year, draftId, side, booklet }) => (
  <Panel split double isSubpanel={!!side} booklet={booklet} flip={flip}>
    <Sidebar year={year} draftId={draftId} />
    <TurnGrid />
  </Panel>
);

GameSheetPanel.defaultProps = {
  flip: false,

  year: undefined,
  draftId: undefined,

  side: undefined,
  booklet: false,
};

export const GameSheetBookletPanel = ({ year, draftId, side }) => (
  <Panel side={side} booklet={true}>
    <GameSheetPanel year={year} draftId={draftId} side={side} booklet={true} />
  </Panel>
);

GameSheetBookletPanel.defaultProps = {
  year: undefined,
  draftId: undefined,

  side: undefined,
};

export default GameSheetPanel;
