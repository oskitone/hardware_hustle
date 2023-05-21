import classnames from "classnames";

import styles from "@/styles/Page.module.css";

export default function Page({ children, split, double }) {
  return (
    <div
      className={classnames(styles.page, {
        [styles.split]: split,
        [styles.double]: double,
      })}
    >
      {children}
    </div>
  );
}
