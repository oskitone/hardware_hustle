import styles from "@/styles/Cover.module.css";

import Wordmark from "components/wordmark";

export default function Cover({ draftId }) {
  return (
    <div className={styles.cover}>
      <Wordmark className={styles.Wordmark} draftId={draftId} />
    </div>
  );
}
