import { range } from "lodash";

import styles from "@/styles/Graph.module.css";

export default function Graph({ turnCount, valueMax, valueStep, className }) {
  const X_AXIS = range(1, turnCount + 1);
  const Y_AXIS = range(valueMax, 0 - 1, -valueStep);

  function Lines({ count, axisClassname }) {
    return (
      <div class={`${styles.lines} ${axisClassname}`}>
        {[...Array(count)].map((e, i) => (
          <div class={styles.line} />
        ))}
      </div>
    );
  }

  return (
    <div class={`${className} ${styles.graph}`}>
      <div class={`${styles.axis} ${styles.y}`}>
        {Y_AXIS.map((label) => (
          <div class={styles.yLabel}>{label}</div>
        ))}
      </div>
      <div class={styles.area}>
        <Lines count={Y_AXIS.length * 2 - 1} axisClassname={styles.y} />
        <Lines count={X_AXIS.length} axisClassname={styles.x} />
      </div>
      <div class={styles.corner}></div>
      <div class={`${styles.axis} ${styles.x}`}>
        {X_AXIS.map((label) => (
          <div class={styles.xLabel}>{label}</div>
        ))}
      </div>
    </div>
  );
}
