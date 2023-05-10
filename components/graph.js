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
  const Y_AXIS = [...range(0, valueMax + 1, valueStep).slice(0, -1), "+"];

  function Axis({ labels, className }) {
    return (
      <div className={`${styles.axis} ${className}`}>
        {labels.map((label, i) => (
          <div className={className} key={i}>
            {label}
          </div>
        ))}
      </div>
    );
  }

  function Lines({ count, axisClassname }) {
    return (
      <div className={`${styles.lines} ${axisClassname}`}>
        {[...Array(count)].map((e, i) => (
          <div className={styles.line} key={i} />
        ))}
      </div>
    );
  }

  function Values() {
    return values.map((value, i) => (
      <div
        className={styles.value}
        style={{
          bottom: `${value}%`,
          left: `${(i / turnCount) * 100}%`,
        }}
        key={i}
      />
    ));
  }

  return (
    <div className={`${className} ${styles.graph}`}>
      <Axis labels={Y_AXIS} className={styles.y} />
      <div className={styles.area}>
        <Lines count={Y_AXIS.length * 2 - 1} axisClassname={styles.y} />
        <Lines count={X_AXIS.length} axisClassname={styles.x} />
        <Values />
      </div>
      <div className={styles.corner}></div>
      <Axis labels={X_AXIS} className={styles.x} />
    </div>
  );
}
