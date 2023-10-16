import classnames from "classnames";

import styles from "@/styles/Sheet.module.css";

function Sheet({ children, landscape, size }) {
  return (
    <div
      className={classnames(styles.sheet, {
        [styles.landscape]: landscape,
        [styles.full]: size == "full",
        [styles.legal]: size == "legal",
        [styles.letter]: size == "letter",
        [styles.single]: size == "single",
      })}
    >
      {children}
    </div>
  );
}

Sheet.defaultProps = {
  landscape: false,
  size: "legal",
};

export const Front = Sheet;
export const Back = Sheet;

export default Sheet;
