import Turn from "components/turn";

import styles from "@/styles/TurnGrid.module.css";

export default function TurnGrid({ count, startingValues }) {
  return (
    <div class={`${styles.turnGrid}`}>
      {[...Array(count)].map((e, i) => (
        <Turn
          key={i}
          id={i}
          startingValues={{
            money: startingValues.money[i],
            time: startingValues.time[i],

            A: startingValues.A[i],
            B: startingValues.B[i],
            C: startingValues.C[i],
            D: startingValues.D[i],

            AB: startingValues.AB[i],
            ABC: startingValues.ABC[i],
            ABCD: startingValues.ABCD[i],
          }}
        />
      ))}
    </div>
  );
}
