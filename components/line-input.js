import styles from "@/styles/LineInput.module.css";

export default function LineInput({ title, className }) {
  return (
    <div className={`${className} ${styles.LineInput}`}>
      <div className={styles.title}>{title}:</div>
      <div className={styles.input}></div>
    </div>
  );
}
