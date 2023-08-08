import Home from "components/home";
import { getCommitProps } from "common/utils";
export const getStaticProps = async (context) => getCommitProps();

function Index({ year, draftId }) {
  return (
    <Home sheetSize="letter" gamesPerSheet={1} year={year} draftId={draftId} />
  );
}

Index.defaultProps = {
  year: undefined,
  draftId: undefined,
};

export default Index;
