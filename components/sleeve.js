import styles from "@/styles/Sleeve.module.css";

import Page from "components/page";
import Wordmark from "components/wordmark";

export default function Sleeve({ draftId }) {
  return (
    <Page className={styles.Page}>
      <div className={styles.lip} />
      <div className={styles.depth} />
      <div className={styles.front}>
        <div className={styles.content}>
          <Wordmark className={styles.Wordmark} draftId={draftId} />
          <div className={styles.exposure} />
        </div>
      </div>
      <div className={styles.depth} />
      <div className={styles.back} />
    </Page>
  );
}
