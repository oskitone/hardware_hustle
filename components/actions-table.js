import classnames from "classnames";

import Icon from "components/icon";
import PointSelector from "components/point-selector";

import styles from "@/styles/ActionsTable.module.css";

export default function ActionsTable({ className }) {
  function PS({ options, value, first, last }) {
    return (
      <PointSelector
        first={first}
        last={last}
        icon="opportunity"
        iconPrefix="-"
        options={options}
        value={value}
      />
    );
  }

  const ACTIONS = [
    {
      title: "Buy",
      body: [
        [
          <Icon id="A" />,
          <PS options={[0, 0, 0, 0]} value={0} first />,
          <Icon id="money" prefix="-" suffix="1" />,
        ],
        [
          <Icon id="B" />,
          <PS options={[1, 0, 0, 0]} value={1} />,
          <Icon id="money" prefix="-" suffix="2" />,
        ],
        [
          <Icon id="C" />,
          <PS options={[2, 1, 0, 0]} value={2} />,
          <Icon id="money" prefix="-" suffix="3" />,
        ],
        [
          <Icon id="D" />,
          <PS options={[3, 2, 1, 0]} value={3} last />,
          <Icon id="money" prefix="-" suffix="4" />,
        ],
      ],
    },
    {
      title: "Make",
      body: [
        [
          <Icon id="AB" />,
          <PS options={[1, 0, 0, 0]} value={1} first />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" />
          </>,
        ],
        [
          <Icon id="ABC" />,
          <PS options={[2, 1, 0, 0]} value={2} />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" /> <Icon id="C" />
          </>,
        ],
        [
          <Icon id="ABCD" />,
          <PS options={[3, 2, 1, 0]} value={3} last />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" /> <Icon id="C" />
            <Icon id="D" />
          </>,
        ],
      ],
    },

    {
      title: "Sell",
      body: [
        [
          <Icon id="AB" />,
          <PS options={[2, 1, 0, 0]} value={2} first />,
          <Icon id="money" prefix="+" suffix="6" />,
        ],
        [
          <Icon id="ABC" />,
          <PS options={[3, 2, 1, 0]} value={3} />,
          <Icon id="money" prefix="+" suffix="18" />,
        ],
        [
          <Icon id="ABCD" />,
          <PS options={[4, 3, 2, 1]} value={4} last />,
          <Icon id="money" prefix="+" suffix="40" />,
        ],
      ],
    },
  ];

  return (
    <div className={classnames(className, styles.actionsTable)}>
      {ACTIONS.map((action, actionI) => (
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
