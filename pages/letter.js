import GameSheet from "components/game-sheet";
import { getCommitProps } from "common/utils";
export const getStaticProps = async (context) => getCommitProps();

function LetterPage({ year, draftId }) {
  return (
    <GameSheet
      sheetSize="letter"
      sheetCount={2}
      gamesPerSheet={2}
      year={year}
      draftId={draftId}
    />
  );
}

LetterPage.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default LetterPage;
