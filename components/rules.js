import classnames from "classnames";

import Graph from "components/graph";
import Icon from "components/icon";
import LineInput from "components/line-input";
import PointSelector from "components/point-selector";

import styles from "@/styles/Rules.module.css";

export default function Rules({ startingValues }) {
  const ACTIONS = [
    {
      title: "Buy",
      body: [
        [
          <Icon id="A" />,
          <PointSelector icon="time" options={[0, 0, 0, 0]} value={0} />,
          <Icon id="money" prefix="-" suffix="1" />,
        ],
        [
          <Icon id="B" />,
          <PointSelector icon="time" options={[1, 0, 0, 0]} value={1} />,
          <Icon id="money" prefix="-" suffix="2" />,
        ],
        [
          <Icon id="C" />,
          <PointSelector icon="time" options={[2, 1, 0, 0]} value={2} />,
          <Icon id="money" prefix="-" suffix="3" />,
        ],
        [
          <Icon id="D" />,
          <PointSelector icon="time" options={[3, 2, 1, 0]} value={3} />,
          <Icon id="money" prefix="-" suffix="4" />,
        ],
      ],
    },
    {
      title: "Make",
      body: [
        [
          <Icon id="AB" />,
          <PointSelector icon="time" options={[1, 0, 0, 0]} value={1} />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" />
          </>,
        ],
        [
          <Icon id="ABC" />,
          <PointSelector icon="time" options={[2, 1, 0, 0]} value={2} />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" /> <Icon id="C" />
          </>,
        ],
        [
          <Icon id="ABCD" />,
          <PointSelector icon="time" options={[3, 2, 1, 0]} value={3} />,
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
          <PointSelector icon="time" options={[2, 1, 0, 0]} value={2} />,
          <Icon id="money" prefix="+" suffix="6" />,
        ],
        [
          <Icon id="ABC" />,
          <PointSelector icon="time" options={[3, 2, 1, 0]} value={3} />,
          <Icon id="money" prefix="+" suffix="18" />,
        ],
        [
          <Icon id="ABCD" />,
          <PointSelector icon="time" options={[4, 3, 2, 1]} value={4} />,
          <Icon id="money" prefix="+" suffix="40" />,
        ],
      ],
    },
  ];

  return (
    <div className={styles.rules}>
      <h1>Hardware Hustle</h1>

      <LineInput title={"Name / Date"} className={styles.LineInput} />

      <h2>Actions</h2>
      <div className={styles.actions}>
        <table className={styles.icons}>
          {ACTIONS.map((action, actionI) => (
            <tbody key={actionI}>
              {action.body.map((columns, bodyI) => (
                <tr key={bodyI}>
                  {bodyI == 0 && (
                    <th rowSpan={action.body.length}>
                      <h3>{action.title}</h3>
                    </th>
                  )}

                  {columns.map((column, columnI) => (
                    <td key={columnI}>{column}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td colspan={4} className={styles.gutter} />
              </tr>
            </tbody>
          ))}
          <tbody>
            <tr>
              <th>
                <h3>PM</h3>
              </th>
              <td colSpan={4}>
                <table className={styles.description}>
                  <tbody>
                    <tr>
                      <td>
                        <Icon id="opportunity" /> &gt;= <Icon id="roll" />
                      </td>
                      <td className={styles.descriptionHead}>Research</td>
                      <td>
                        Reduce Action <Icon id="opportunity" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Icon id="opportunity" /> &lt; 0
                      </td>
                      <td className={styles.descriptionHead}>Burnout</td>
                      <td>Lose next turn</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Money</h2>
      <Graph
        turnCount={startingValues.time.length}
        valueMax={100}
        valueStep={10}
        values={startingValues.money}
        className={styles.Graph}
      />

      <footer className={styles.footer}>CC BY-SA 4.0 Oskitone</footer>
    </div>
  );
}
