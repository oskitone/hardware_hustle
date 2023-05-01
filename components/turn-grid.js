import Turn from "components/turn";

import styles from "@/styles/TurnGrid.module.css";

export default function TurnGrid({ count }) {
  return (
    <div class={`${styles.turnGrid}`}>
      {[...Array(count)].map((e, i) => (
        <Turn
          key={i}
          id={i}
          startingValues={{
            money: i == 0 ? 20 : undefined,
            time: [16, 16, 14, 12, 12, 12, 8, 6, 4][i],
          }}
        />
      ))}
    </div>
  );
}
