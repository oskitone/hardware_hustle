import styles from "@/styles/Cover.module.css";

export default function Cover({ turnsData, year, draftId }) {
  return (
    <div className={styles.cover}>
      <h1>Hardware Hustle</h1>
      <p>{draftId}</p>
    </div>
  );
}
