import classnames from "classnames";

import styles from "@/styles/Wordmark.module.css";

function Wordmark({ className, wrap }) {
  return (
    <div className={classnames(styles.wordmark, className)}>
      <h1 className={classnames(styles.header, { [styles.wrap]: wrap })}>
        Hardware
        {wrap ? <br /> : " "}
        Hustle
      </h1>
    </div>
  );
}

Wordmark.defaultProps = {
  className: undefined,
  wrap: false,
};

export default Wordmark;
