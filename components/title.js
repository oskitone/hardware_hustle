import classnames from "classnames";

import styles from "@/styles/title.module.css";

function Title({ className }) {
  return (
    <h1 className={classnames(styles.title, className)}>Hardware Hustle</h1>
  );
}

Title.defaultProps = {
  className: undefined,
};

export default Title;
