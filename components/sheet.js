import classnames from "classnames";

import styles from "@/styles/Sheet.module.css";

function Sheet({ children, landscape }) {
  return (
    <div
      className={classnames(styles.sheet, {
        [styles.landscape]: landscape,
      })}
    >
      {children}
    </div>
  );
}

export const Front = Sheet;
export const Back = Sheet;

export default Sheet;
