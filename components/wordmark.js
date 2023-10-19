import classnames from "classnames";

import styles from "@/styles/Wordmark.module.css";

function Wordmark({ className, draftId }) {
  return (
    <div className={classnames(styles.wordmark, className)}>
      <div className={styles.oskitones}>Oskitone's</div>
      <h1>Hardware Hustle</h1>
      <div className={styles.rev}>{draftId}</div>
    </div>
  );
}

Wordmark.defaultProps = {
  className: undefined,
  draftId: "",
};

export default Wordmark;