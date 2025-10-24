import classnames from "classnames";

import styles from "@/styles/Panel.module.css";

function Panel({
  children,

  double,
  split,
  booklet,
  flip,

  className,

  isSubpanel,
  side,
}) {
  return (
    <div
      className={classnames(styles.panel, className, {
        [styles.double]: double,
        [styles.split]: split,
        [styles.booklet]: booklet,
        [styles.flip]: flip,
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
  booklet: false,
  flip: false,

  className: undefined,

  isSubpanel: false,
  side: undefined,
};

export default Panel;
