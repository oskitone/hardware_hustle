import styles from "@/styles/Page.module.css";

function Page({ children }) {
  return <div className={styles.page}>{children}</div>;
}

export const Front = Page;
export const Back = Page;

export default Page;
