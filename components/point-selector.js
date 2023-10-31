import classnames from "classnames";

import Icon from "components/icon";

import styles from "@/styles/PointSelector.module.css";

function PointSelector({
  firstRow,
  lastRow,
  className,
  icon,
  iconPrefix,
  options,
  selectedIndex,
}) {
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
            [styles.shaded]: i < selectedIndex,
            [styles.selected]: i <= selectedIndex,
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

PointSelector.defaultProps = {
  firstRow: false,
  lastRow: false,
  className: undefined,
  icon: undefined,
  iconPrefix: undefined,
  options: [],
  selectedIndex: 0,
};

export default PointSelector;
