import Turn, {
  defaultTurnsData,
  defaultSuppliedColumns,
  firstTurnSuppliedColumns,
} from "components/turn";

import styles from "@/styles/TurnGrid.module.css";

const TurnGrid = ({ turnsData }) => (
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

TurnGrid.defaultProps = {
  turnsData: defaultTurnsData,
};

export default TurnGrid;
