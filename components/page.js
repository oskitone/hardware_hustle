import classnames from "classnames";

import styles from "@/styles/Page.module.css";

export default function Page({
  children,

  double,
  fullHeight,
  landscape,

  split,
}) {
  return (
    <div
      className={classnames(styles.page, {
        [styles.double]: double,
        [styles.fullHeight]: fullHeight,
        [styles.landscape]: landscape,
        [styles.split]: split,
      })}
    >
      {children}
    </div>
  );
}
