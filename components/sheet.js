import styles from "@/styles/Sheet.module.css";

function Sheet({ children }) {
  return <div className={styles.sheet}>{children}</div>;
}

export const Front = Sheet;
export const Back = Sheet;

export default Sheet;
