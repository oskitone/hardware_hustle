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

  const Child = () => (
    <div className={styles.rollTable}>
      {[...Array(childRows)].map((undef, i) => (
        <div className={styles.row} key={i}>
          {[...Array(childColumns)].map((undef, ii) => (
            <span className={styles.cell} key={ii}>
              {isClient && roll()}
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.parentsContainer}>
      {[...Array(parentRows)].map((undef, i) => (
        <div className={styles.row} key={i}>
          {[...Array(parentColumns)].map((undef, ii) => (
            <div className={styles.cell} key={ii}>
              <Child />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

RollTable.defaultProps = {
  parentColumns: 3,
  parentRows: 3,

  childColumns: 3,
  childRows: 3,

  year: undefined,
};
