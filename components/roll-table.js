import { useEffect, useState } from "react";
import styles from "@/styles/RollTable.module.css";

const MIN = 1;
const MAX = 6;

const roll = () => MIN + Math.floor(Math.random() * (MAX - MIN + 1));

export default function RollTable({
  parentColumns,
  parentRows,

  childColumns,
  childRows,
}) {
  const [isClient, setIsClient] = useState();
  useEffect(() => {
    setIsClient(true);
  }, []);

  const Grid = ({ className, columns, rows, children }) => (
    <div
      className={className}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {[...Array(rows * columns)].map((undef, i) =>
        children ? children : <div key={i}>{isClient && roll()}</div>
      )}
    </div>
  );

  const Child = () => (
    <Grid className={styles.child} columns={childColumns} rows={childRows} />
  );

  return (
    <div className={styles.rollTable}>
      <Grid className={styles.grid} columns={parentColumns} rows={parentRows}>
        <Child />
      </Grid>
    </div>
  );
}

RollTable.defaultProps = {
  parentColumns: 2,
  parentRows: 2,

  childColumns: 6,
  childRows: 8,
};

export const RollTableParents = `${RollTable.defaultProps.parentColumns}x${RollTable.defaultProps.parentRows}`;
export const RollTableChildren = `${RollTable.defaultProps.childColumns}x${RollTable.defaultProps.childRows}`;
