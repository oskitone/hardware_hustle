import Turn, {
  defaultTurnsData,
  defaultSuppliedColumns,
  firstTurnSuppliedColumns,
} from "components/turn";

import styles from "@/styles/TurnGrid.module.css";

const TurnGrid = ({ turnsData, zine }) => (
  <div className={`${styles.turnGrid}`}>
    {turnsData.map((turnData, i) => (
      <Turn
        key={i}
        id={i}
        data={turnData}
        suppliedColumns={
          i == 0 ? firstTurnSuppliedColumns : defaultSuppliedColumns
        }
        zine={zine}
      />
    ))}
  </div>
);

TurnGrid.defaultProps = {
  turnsData: defaultTurnsData,
  zine: undefined,
};

export default TurnGrid;
