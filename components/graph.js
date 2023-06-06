import classnames from "classnames";
import { range } from "lodash";

import styles from "@/styles/Graph.module.css";

function Graph({
  values,

  x_axis_labels,
  x_axis_label_cap,
  y_axis_labels,
  y_axis_label_cap,

  subset,

  className,
}) {
  function Axis({ labels, className, cap }) {
    return (
      <div className={`${styles.axis} ${className}`}>
        {(!!cap ? [...labels.slice(0, -1), cap] : labels).map((label, i) => (
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
          bottom: `${(value / y_axis_labels[y_axis_labels.length - 1]) * 100}%`,
          left: `${(i / (x_axis_labels.length - 1)) * 100}%`,
        }}
        key={i}
      />
    ));
  }

  return (
    <div
      className={classnames(className, styles.graph, {
        [styles.subset]: subset,
      })}
    >
      <Axis
        labels={y_axis_labels}
        cap={y_axis_label_cap}
        className={styles.y}
      />
      <div className={styles.area}>
        <Lines count={y_axis_labels.length * 2 - 1} axisClassname={styles.y} />
        <Lines count={x_axis_labels.length} axisClassname={styles.x} />
        <Values />
      </div>
      <div className={styles.corner}></div>
      <Axis
        labels={x_axis_labels}
        cap={x_axis_label_cap}
        className={styles.x}
      />
    </div>
  );
}

Graph.defaultProps = {
  values: [],

  x_axis_labels: range(0, 6 + 1),
  x_axis_label_cap: undefined,
  y_axis_labels: range(0, 100 + 1, 10),
  y_axis_label_cap: undefined,

  subset: false,

  className: undefined,
};

export default Graph;
