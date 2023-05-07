import classnames from "classnames";

import Icon from "components/icon";

import styles from "@/styles/PointSelector.module.css";

export default function PointSelector({ icon, options, value }) {
  let hasSelection = false;
  const isSelected = (option) => {
    if (option == value && !hasSelection) {
      hasSelection = true;
      return true;
    }

    return false;
  };

  return (
    <div className={styles.pointSelector}>
      {icon && <Icon id={icon} className={styles.icon} />}

      {options.map((option, i) => (
        <span
          className={classnames(styles.option, {
            [styles.selected]: isSelected(option),
          })}
        >
          {option}
        </span>
      ))}
    </div>
  );
}
