import classnames from "classnames";

import styles from "@/styles/PointSelector.module.css";

export default function PointSelector({ options, value }) {
  return (
    <div class={styles.pointSelector}>
      {options.map((option, i) => (
        <span
          class={classnames(styles.option, {
            [styles.selected]: option == value,
          })}
        >
          {option}
        </span>
      ))}
    </div>
  );
}
