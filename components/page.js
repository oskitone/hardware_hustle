import classnames from "classnames";

import styles from "@/styles/Page.module.css";

function Page({ children, landscape, size }) {
  return (
    <div
      className={classnames(styles.page, {
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

Page.defaultProps = {
  landscape: false,
  size: "letter",
};

export const Front = Page;
export const Back = Page;

export default Page;
