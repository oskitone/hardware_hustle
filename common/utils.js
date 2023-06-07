export const getCommitProps = () => {
  const commit = require("child_process")
    .execSync('git log -n1 --format="%h %ai"')
    .toString()
    .trim();

  const [hash, date] = commit.split(" ");
  const [YYYY, MM, DD] = date.split("-");

  return {
    props: {
      year: YYYY,
      draftId: `prototype_draft_${hash}_${[YYYY.slice(-2), MM, DD].join("")}`,
    },
  };
};