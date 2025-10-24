import classnames from "classnames";

import styles from "@/styles/Page.module.css";

function Page({ children, size, rules }) {
  return (
    <div
      className={classnames(styles.page, {
        [styles.letter]: size == "letter",
        [styles.ledger]: size == "ledger",
        [styles.single]: size == "single",
        [styles.rules]: rules,
      })}
    >
      {children}
    </div>
  );
}

Page.defaultProps = {
  size: "letter",
  rules: false,
};

export const Front = Page;
export const Back = Page;

export default Page;
