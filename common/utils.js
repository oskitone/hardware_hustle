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

export const htmlEntity = (id) => (
  <span
    dangerouslySetInnerHTML={{
      __html:
        {
          "-": "&minus;",
          "+": "&plus;",
          "*": "&times;",
          x: "&times;",
          "/": "&divide;",
          "=": "&equals;",
        }[id] || id,
    }}
  />
);

export const NoWrap = ({ children }) => (
  <span style={{ whiteSpace: "nowrap" }}>{children}</span>
);
