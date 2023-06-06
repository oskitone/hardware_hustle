import { range } from "lodash";

import styles from "@/styles/Graph.module.css";

function Graph({
  values,

  x_axis_labels,
  y_axis_labels,

  className,
}) {
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
          left: `${(i / (x_axis_labels.length - 1)) * 100}%`,
        }}
        key={i}
      />
    ));
  }

  return (
    <div className={`${className} ${styles.graph}`}>
      <Axis labels={y_axis_labels} className={styles.y} />
      <div className={styles.area}>
        <Lines count={y_axis_labels.length * 2 - 1} axisClassname={styles.y} />
        <Lines count={x_axis_labels.length} axisClassname={styles.x} />
        <Values />
      </div>
      <div className={styles.corner}></div>
      <Axis labels={x_axis_labels} className={styles.x} />
    </div>
  );
}

const Y_AXIS_LABELS = [...range(0, 100 + 1, 10).slice(0, -1), "+"];
const X_AXIS_LABELS = range(0, 6 + 1);

Graph.defaultProps = {
  values: [],

  x_axis_labels: X_AXIS_LABELS,
  y_axis_labels: Y_AXIS_LABELS,

  className: undefined,
};

export default Graph;
