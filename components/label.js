import styles from "@/styles/Label.module.css";

import Wordmark from "components/wordmark";

export function Labels({ count, draftId }) {
  return (
    <div className={styles.labels}>
      {[...Array(count)].map((e, i) => (
        <Label draftId={draftId} key={i} />
      ))}
    </div>
  );
}

export default function Label({ draftId }) {
  return (
    <div className={styles.label}>
      <Wordmark className={styles.Wordmark} draftId={draftId} />
    </div>
  );
}
