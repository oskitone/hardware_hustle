import Home from "components/home";
import { getCommitProps } from "common/utils";
export const getStaticProps = async (context) => getCommitProps();

function SinglePage({ year, draftId }) {
  return (
    <Home sheetSize="single" gamesPerSheet={1} year={year} draftId={draftId} />
  );
}

SinglePage.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default SinglePage;
