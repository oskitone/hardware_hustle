import styles from "@/styles/Page.module.css";

export default function Page({ split, children }) {
  return (
    <div class={`${styles.page} ${split && styles.split}`}>{children}</div>
  );
}
