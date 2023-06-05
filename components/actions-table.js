import classnames from "classnames";

import Icon from "components/icon";
import PointSelector from "components/point-selector";

import styles from "@/styles/ActionsTable.module.css";

function PS({ options, value, firstRow, lastRow }) {
  return (
    <>
      {"- "}
      <PointSelector
        firstRow={firstRow}
        lastRow={lastRow}
        icon="opportunity"
        options={options}
        value={value}
      />
    </>
  );
}

export const ACTIONS = {
  BUY: {
    title: "Buy",
    body: [
      [
        <Icon id="A" />,
        <PS options={[0, 0, 0, 0]} value={0} firstRow />,
        <>
          - <Icon id="money" suffix="1" />
        </>,
      ],
      [
        <Icon id="B" />,
        <PS options={[1, 0, 0, 0]} value={1} />,
        <>
          - <Icon id="money" suffix="2" />
        </>,
      ],
      [
        <Icon id="C" />,
        <PS options={[2, 1, 0, 0]} value={2} />,
        <>
          - <Icon id="money" suffix="3" />
        </>,
      ],
      [
        <Icon id="D" />,
        <PS options={[3, 2, 1, 0]} value={3} lastRow />,
        <>
          - <Icon id="money" suffix="4" />
        </>,
      ],
    ],
  },
  MAKE: {
    title: "Make",
    body: [
      [
        <Icon id="AB" />,
        <PS options={[1, 0, 0, 0]} value={1} firstRow />,
        <>
          - <Icon id="A" row /> <Icon id="B" row />
        </>,
      ],
      [
        <Icon id="ABC" />,
        <PS options={[2, 1, 0, 0]} value={2} />,
        <>
          - <Icon id="A" row /> <Icon id="B" row /> <Icon id="C" row />
        </>,
      ],
      [
        <Icon id="ABCD" />,
        <PS options={[3, 2, 1, 0]} value={3} lastRow />,
        <>
          - <Icon id="A" row /> <Icon id="B" row /> <Icon id="C" row />
          <Icon id="D" row />
        </>,
      ],
    ],
  },
  SELL: {
    title: "Sell",
    body: [
      [
        <Icon id="AB" />,
        <PS options={[2, 1, 0, 0]} value={2} firstRow />,
        <>
          + <Icon id="money" suffix="6" />
        </>,
      ],
      [
        <Icon id="ABC" />,
        <PS options={[3, 2, 1, 0]} value={3} />,
        <>
          + <Icon id="money" suffix="18" />
        </>,
      ],
      [
        <Icon id="ABCD" />,
        <PS options={[4, 3, 2, 1]} value={4} lastRow />,
        <>
          + <Icon id="money" suffix="40" />
        </>,
      ],
    ],
  },
};

function ActionsTable({ className, actions }) {
  return (
    <div className={classnames(className, styles.actionsTable)}>
      {actions.map((action, actionI) => (
        <div className={styles.action} key={actionI}>
          <div className={styles.title}>{action.title}</div>
          {action.body.map((columns, bodyI) =>
            columns.map((column, columnI) => (
              <div className={styles.column} key={columnI}>
                {column}
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

ActionsTable.defaultProps = {
  className: undefined,
  actions: [ACTIONS.BUY, ACTIONS.MAKE, ACTIONS.SELL],
};

export default ActionsTable;
