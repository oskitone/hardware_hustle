import styles from "@/styles/Page.module.css";

export default function Page({ split, children }) {
  return (
    <div className={`${styles.page} ${split && styles.split}`}>{children}</div>
  );
}
