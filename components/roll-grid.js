import { useEffect, useState } from "react";
import styles from "@/styles/RollGrid.module.css";

const MIN = 1;
const MAX = 6;

const roll = () => MAX + Math.floor(Math.random() * (MIN - MAX) + 1);

export default function RollGrid({ columns, rows }) {
  const [isClient, setIsClient] = useState();
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.rollGrid}>
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
