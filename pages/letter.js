import GameSheetPage from "../components/game-sheet-page";
import { getCommitProps } from "../common/utils";
export const getStaticProps = async (context) => getCommitProps();

function LetterPage({ year, draftId }) {
  return (
    <GameSheetPage
      pageCount={2}
      pageSize="letter"
      gamesPerPage={2}
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
