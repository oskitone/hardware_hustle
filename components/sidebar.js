import ActionsTable from "components/actions-table";
import Graph from "components/graph";
import LineInput from "components/line-input";
import Title from "components/title";

import styles from "@/styles/Sidebar.module.css";

export default function Sidebar({ turnsData, year, draftId }) {
  return (
    <div className={styles.sidebar}>
      <Title className={styles.Title} />

      <LineInput title={"Name/Date"} className={styles.LineInput} />

      <h2>Actions</h2>
      <ActionsTable className={styles.ActionsTable} />

      <h2>Money</h2>
      <Graph
        turnCount={turnsData.length}
        values={[[turnsData[0].money[0]]]}
        className={styles.Graph}
      />

      <footer className={styles.footer}>
        <p>{year} CC BY-SA 4.0 Oskitone / oskitone.com</p>
        <p className={styles.rev}>{draftId}</p>
      </footer>
    </div>
  );
}
