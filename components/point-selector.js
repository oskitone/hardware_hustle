import classnames from "classnames";

import Icon from "components/icon";

import styles from "@/styles/PointSelector.module.css";

export default function PointSelector({ icon, options, value }) {
  return (
    <div class={styles.pointSelector}>
      {icon && <Icon id={icon} className={styles.icon} />}

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
