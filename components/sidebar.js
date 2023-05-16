import ActionsTable from "components/actions-table";
import Graph from "components/graph";
import LineInput from "components/line-input";

import styles from "@/styles/Sidebar.module.css";

export default function Sidebar({ turnsData, commitHash, dateString }) {
  const [YYYY, MM, DD] = dateString.split("-");

  return (
    <div className={styles.sidebar}>
      <h1>Hardware Hustle</h1>

      <LineInput title={"ID"} className={styles.LineInput} />

      <h2>Actions</h2>
      <ActionsTable className={styles.ActionsTable} />

      <h2>Money</h2>
      <Graph
        turnCount={turnsData.length}
        valueMax={100}
        valueStep={10}
        values={[[turnsData[0].money[0]]]}
        className={styles.Graph}
      />

      <footer className={styles.footer}>
        <p>{YYYY} CC BY-SA 4.0 Oskitone / oskitone.com</p>
        <p className={styles.rev}>
          Draft: {commitHash}-{[YYYY.slice(-2), MM, DD].join("")}
        </p>
      </footer>
    </div>
  );
}
