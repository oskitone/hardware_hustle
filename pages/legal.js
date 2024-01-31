import GameSheetPage from "components/game-sheet-page";
import { getCommitProps } from "common/utils";
export const getStaticProps = async (context) => getCommitProps();

function LegalPage({ year, draftId }) {
  return (
    <GameSheetPage
      pageSize="legal"
      gamesPerPage={2}
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
