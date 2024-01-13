import classnames from "classnames";

import styles from "@/styles/Panel.module.css";

function Panel({
  children,

  double,
  split,

  className,

  isSubpanel,
  side,
}) {
  return (
    <div
      className={classnames(styles.panel, className, {
        [styles.double]: double,
        [styles.split]: split,
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

  className: undefined,

  isSubpanel: false,
  side: undefined,
};

export default Panel;
