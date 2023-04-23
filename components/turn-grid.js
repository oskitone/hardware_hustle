import Turn from "components/turn";

import styles from "@/styles/TurnGrid.module.css";

export default function TurnGrid({ children }) {
  return (
    <div class={`${styles.turnGrid}`}>
      {[...Array(12)].map((e, i) => (
        <Turn key={i} id={i + 1} />
      ))}
    </div>
  );
}
