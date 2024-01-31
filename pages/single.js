import GameSheetPage from "components/game-sheet-page";
import { getCommitProps } from "common/utils";
export const getStaticProps = async (context) => getCommitProps();

function SinglePage({ year, draftId }) {
  return (
    <GameSheetPage
      pageSize="single"
      gamesPerPage={1}
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
