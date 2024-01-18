import Panel from "components/panel";
import Rules from "components/rules.mdx";

const RulesPanel = ({ panel, panelCount, year, draftId }) => (
  <Panel size="zine">
    <Rules
      panel={panel}
      panelCount={panelCount}
      year={year}
      draftId={draftId}
    />
  </Panel>
);

RulesPanel.defaultProps = {
  panel: 0,
  panelCount: 8,
  year: undefined,
  draftId: undefined,
};

export default RulesPanel;
