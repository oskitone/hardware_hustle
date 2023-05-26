import classnames from "classnames";

import styles from "@/styles/Page.module.css";

export default function Page({ children, split, landscape, double }) {
  return (
    <div
      className={classnames(styles.page, {
        [styles.split]: split,
        [styles.landscape]: landscape,
        [styles.double]: double,
      })}
    >
      {children}
    </div>
  );
}
