import { useEffect, useState } from "react";
import styles from "@/styles/RollTable.module.css";

const MIN = 1;
const MAX = 6;

const roll = () => MAX + Math.floor(Math.random() * (MIN - MAX) + 1);

export default function RollTable({ columns, rows }) {
  const [isClient, setIsClient] = useState();
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.rollTable}>
      {[...Array(rows)].map((undef, i) => {
        return (
          <div className={styles.row} key={i}>
            {[...Array(columns)].map((undef, ii) => (
              <span className={styles.cell} key={ii}>
                {isClient && roll()}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

RollTable.defaultProps = {
  columns: 25,
  rows: 35,
};
