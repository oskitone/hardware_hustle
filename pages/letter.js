import Home from "components/home";
import { getCommitProps } from "common/utils";
export const getStaticProps = async (context) => getCommitProps();

function LetterPage({ year, draftId }) {
  return (
    <Home sheetSize="letter" gamesPerSheet={1} year={year} draftId={draftId} />
  );
}

LetterPage.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default LetterPage;
