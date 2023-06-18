import classnames from "classnames";

import styles from "@/styles/Sheet.module.css";

function Sheet({ children, landscape, size }) {
  return (
    <div
      className={classnames(styles.sheet, {
        [styles.landscape]: landscape,
        [styles.legal]: size == "legal",
        [styles.letter]: size == "letter",
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
