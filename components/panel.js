import classnames from "classnames";

import styles from "@/styles/Panel.module.css";

function Panel({
  children,

  double,
  split,

  size,

  className,

  isSubpanel,
  side,
}) {
  return (
    <div
      className={classnames(styles.panel, className, {
        [styles.double]: double,
        [styles.split]: split,
        [styles.legal]: size == "legal",
        [styles.letter]: size == "letter",
        [styles.zine]: size == "zine",
        [styles.subpanel]: isSubpanel,
      })}
      side={side}
    >
      {children}
    </div>
  );
}

Panel.defaultProps = {
  double: false,
  split: false,

  size: "legal", // TODO: vestigial, unused

  className: undefined,

  isSubpanel: false,
  side: undefined,
};

export default Panel;
