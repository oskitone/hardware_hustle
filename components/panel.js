import classnames from "classnames";

import styles from "@/styles/Panel.module.css";

function Panel({
  children,

  double,
  landscape,

  split,

  size,

  className,

  style,
}) {
  return (
    <div
      style={style}
      className={classnames(styles.panel, className, {
        [styles.double]: double,
        [styles.landscape]: landscape,
        [styles.split]: split,
        [styles.legal]: size == "legal",
        [styles.letter]: size == "letter",
        [styles.zine]: size == "zine",
      })}
    >
      {children}
    </div>
  );
}

Panel.defaultProps = {
  double: false,
  landscape: false,

  split: false,

  size: "zine",

  className: undefined,
};

export default Panel;
