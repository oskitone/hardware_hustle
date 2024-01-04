import classnames from "classnames";

import styles from "@/styles/Page.module.css";

function Page({
  children,

  double,
  landscape,

  split,

  size,

  className,
}) {
  return (
    <div
      className={classnames(styles.page, className, {
        [styles.double]: double,
        [styles.landscape]: landscape,
        [styles.split]: split,
        [styles.legal]: size == "legal",
        [styles.letter]: size == "letter",
      })}
    >
      {children}
    </div>
  );
}

Page.defaultProps = {
  double: false,
  landscape: false,

  split: false,

  size: "legal",

  className: undefined,
};

export default Page;
