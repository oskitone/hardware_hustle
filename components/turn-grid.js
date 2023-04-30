import Turn from "components/turn";

import styles from "@/styles/TurnGrid.module.css";

const TURNS_COUNT = 9;

export default function TurnGrid({ children }) {
  return (
    <div class={`${styles.turnGrid}`}>
      {[...Array(TURNS_COUNT)].map((e, i) => (
        <Turn key={i} id={i} />
      ))}
    </div>
  );
}
