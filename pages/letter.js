import GameSheetPage from "components/game-sheet-page";
import { getCommitProps } from "common/utils";
export const getStaticProps = async (context) => getCommitProps();

function LetterPage({ year, draftId }) {
  return (
    <GameSheetPage
      pageSize="letter"
      gamesPerPage={1}
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
