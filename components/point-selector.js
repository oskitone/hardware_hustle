import classnames from "classnames";

import Icon from "components/icon";

import styles from "@/styles/PointSelector.module.css";

export default function PointSelector({
  first,
  last,
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
        [styles.first]: first,
        [styles.last]: last,
      })}
    >
      {icon && <Icon id={icon} prefix={iconPrefix} />}

      {options.map((option, i) => (
        <span
          className={classnames(styles.option, {
            [styles.selected]: isSelected(option),
          })}
          key={i}
        >
          {option}
        </span>
      ))}
    </div>
  );
}
