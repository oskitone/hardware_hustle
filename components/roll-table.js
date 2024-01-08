import { useEffect, useState } from "react";
import styles from "@/styles/RollTable.module.css";

import Panel from "components/panel";

const MIN = 1;
const MAX = 6;

const roll = () => MIN + Math.floor(Math.random() * (MAX - MIN + 1));

export const RollTablePanel = () => (
  <Panel size={"zine"}>
    <RollTable
      parentColumns={6}
      parentRows={4}
      childColumns={3}
      childRows={6}
    />
  </Panel>
);

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
    <Grid
      className={styles.rollTable}
      columns={parentColumns}
      rows={parentRows}
    >
      <Child />
    </Grid>
  );
}

RollTable.defaultProps = {
  parentColumns: 3,
  parentRows: 3,

  childColumns: 3,
  childRows: 3,
};
