import { range } from "lodash";

import styles from "@/styles/Graph.module.css";

export default function Graph({
  turnCount,
  values,
  valueMax,
  valueStep,
  className,
}) {
  const X_AXIS = range(0, turnCount + 1);
  const Y_AXIS = range(valueMax, 0 - 1, -valueStep);

  function Axis({ labels, className, zerothPrefix }) {
    return (
      <div class={`${styles.axis} ${className}`}>
        {labels.map((label, i) => (
          <div class={className}>
            {label}
            {i == 0 && zerothPrefix}
          </div>
        ))}
      </div>
    );
  }

  function Lines({ count, axisClassname }) {
    return (
      <div class={`${styles.lines} ${axisClassname}`}>
        {[...Array(count)].map((e, i) => (
          <div class={styles.line} />
        ))}
      </div>
    );
  }

  function Values() {
    return values.map((value, i) => (
      <div
        class={styles.value}
        style={{
          bottom: `${value}%`,
          left: `${(i / turnCount) * 100}%`,
        }}
      />
    ));
  }

  return (
    <div class={`${className} ${styles.graph}`}>
      <Axis labels={Y_AXIS} className={styles.y} zerothPrefix="+" />
      <div class={styles.area}>
        <Lines count={Y_AXIS.length} axisClassname={styles.y} />
        <Lines count={X_AXIS.length} axisClassname={styles.x} />
        <Values />
      </div>
      <div class={styles.corner}></div>
      <Axis labels={X_AXIS} className={styles.x} />
    </div>
  );
}
