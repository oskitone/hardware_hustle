import PhasesTable from "components/phases-table";
import Graph from "components/graph";
import LineInput from "components/line-input";
import Wordmark from "components/wordmark";

import styles from "@/styles/Sidebar.module.css";

export const ID_TITLE = "Name";

export default function Sidebar({ turnsData, year, draftId }) {
  return (
    <div className={styles.sidebar}>
      <Wordmark className={styles.Wordmark} />

      {/* <LineInput title={ID_TITLE} className={styles.LineInput} /> */}

      <h2>Phases</h2>
      <PhasesTable className={styles.PhasesTable} />

      <h2>Money / Turn</h2>
      <Graph
        values={[turnsData[0].money[0]]}
        y_axis_label_cap={"+"}
        className={styles.Graph}
      />

      {/* <footer className={styles.footer}>
        <p>{year} CC BY-SA 4.0 - oskitone.com</p>
      </footer> */}
    </div>
  );
}
