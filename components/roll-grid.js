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
    <div class={styles.rollGrid}>
      {[...Array(rows)].map((undef, i) => {
        return (
          <div class={styles.row}>
            {[...Array(columns)].map((undef, i) => (
              <span class={styles.cell}>{isClient && roll()}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
