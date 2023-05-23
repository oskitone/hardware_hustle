import classnames from "classnames";

import Icon from "components/icon";

import styles from "@/styles/PointSelector.module.css";

// TODO: vertical

export default function PointSelector({
  firstRow,
  lastRow,
  className,
  icon,
  iconPrefix,
  options,
  value,
}) {
  let hasSelection = false;
  const isSelected = (option) => {
    if (option == value && !hasSelection) {
      hasSelection = true;
      return true;
    }

    return false;
  };

  return (
    <div
      className={classnames(className, styles.pointSelector, {
        [styles.firstRow]: firstRow,
        [styles.lastRow]: lastRow,
      })}
    >
      {icon && <Icon id={icon} prefix={iconPrefix} />}

      {options.map((option, i) => (
        <span
          className={classnames(styles.option, {
            [styles.selected]: isSelected(option),
            [styles.firstColumn]: i == 0,
            [styles.lastColumn]: i == options.length - 1,
          })}
          key={i}
        >
          {option}
        </span>
      ))}
    </div>
  );
}
