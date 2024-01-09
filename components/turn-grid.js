import Turn, {
  defaultSuppliedColumns,
  firstTurnSuppliedColumns,
} from "components/turn";

import styles from "@/styles/TurnGrid.module.css";

export default function TurnGrid({ turnsData }) {
  return (
    <div className={`${styles.turnGrid}`}>
      {turnsData.map((turnData, i) => (
        <Turn
          key={i}
          id={i}
          data={turnData}
          suppliedColumns={
            i == 0 ? firstTurnSuppliedColumns : defaultSuppliedColumns
          }
        />
      ))}
    </div>
  );
}
