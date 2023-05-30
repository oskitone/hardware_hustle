import styles from "@/styles/Cover.module.css";

import Title from "components/title";

export default function Cover({ turnsData, year, draftId }) {
  return (
    <div className={styles.cover}>
      <Title className={styles.Title} />
      <p>{draftId}</p>
    </div>
  );
}
