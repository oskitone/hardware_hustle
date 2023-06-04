import styles from "@/styles/Sleeve.module.css";

import Wordmark from "components/wordmark";

export default function Sleeve({ draftId }) {
  return (
    <div className={styles.sleeve}>
      <Wordmark className={styles.Wordmark} draftId={draftId} />
    </div>
  );
}
