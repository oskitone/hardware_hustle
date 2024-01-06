import GameSheet from "components/game-sheet";
import { getCommitProps } from "common/utils";
export const getStaticProps = async (context) => getCommitProps();

function LegalPage({ year, draftId }) {
  return (
    <GameSheet
      sheetSize="legal"
      gamesPerSheet={2}
      year={year}
      draftId={draftId}
    />
  );
}

LegalPage.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default LegalPage;
