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
  year,
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

      <footer className={styles.footer}>
        <p>
          Close your eyes and point somewhere on the table. That's your roll!
        </p>
        <p>{year} CC BY-SA 4.0 Oskitone / oskitone.com</p>
      </footer>
    </div>
  );
}

RollTable.defaultProps = {
  parentColumns: 6,
  parentRows: 3,

  childColumns: 3,
  childRows: 10,

  year: undefined,
};
