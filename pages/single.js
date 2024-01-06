import GameSheet from "components/game-sheet";
import { getCommitProps } from "common/utils";
export const getStaticProps = async (context) => getCommitProps();

function SinglePage({ year, draftId }) {
  return (
    <GameSheet
      sheetSize="single"
      gamesPerSheet={1}
      year={year}
      draftId={draftId}
    />
  );
}

SinglePage.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default SinglePage;
