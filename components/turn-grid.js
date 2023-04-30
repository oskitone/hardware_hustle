import Turn from "components/turn";

import styles from "@/styles/TurnGrid.module.css";

export default function TurnGrid({ count }) {
  return (
    <div class={`${styles.turnGrid}`}>
      {[...Array(count)].map((e, i) => (
        <Turn key={i} id={i} />
      ))}
    </div>
  );
}
