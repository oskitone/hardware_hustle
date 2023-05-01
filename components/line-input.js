import styles from "@/styles/LineInput.module.css";

export default function LineInput({ title, className }) {
  return (
    <div class={`${className} ${styles.LineInput}`}>
      <div class={styles.input}></div>
      <div class={styles.title}>{title}</div>
    </div>
  );
}
