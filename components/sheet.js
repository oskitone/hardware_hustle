import styles from "@/styles/Sheet.module.css";

export default function Sheet({ children }) {
  return <div className={styles.sheet}>{children}</div>;
}
