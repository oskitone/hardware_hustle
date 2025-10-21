import classnames from "classnames";

import styles from "@/styles/Page.module.css";

function Page({ children, size }) {
  return (
    <div
      className={classnames(styles.page, {
        [styles.letter]: size == "letter",
        [styles.single]: size == "single",
      })}
    >
      {children}
    </div>
  );
}

Page.defaultProps = {
  size: "letter",
};

export const Front = Page;
export const Back = Page;

export default Page;
