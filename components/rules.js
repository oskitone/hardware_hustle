import classnames from "classnames";

import Graph from "components/graph";
import Icon from "components/icon";
import LineInput from "components/line-input";
import PointSelector from "components/point-selector";

import styles from "@/styles/Rules.module.css";

export default function Rules() {
  const ACTIONS = [
    {
      title: "Buy",
      body: [
        [
          <Icon id="A" />,
          <PointSelector icon="time" options={[0, 0, 0, 0, 0]} value={0} />,
          <Icon id="money" prefix="-" suffix="1" />,
        ],
        [
          <Icon id="B" />,
          <PointSelector icon="time" options={[1, 0, 0, 0, 0]} value={1} />,
          <Icon id="money" prefix="-" suffix="2" />,
        ],
        [
          <Icon id="C" />,
          <PointSelector icon="time" options={[2, 1, 0, 0, 0]} value={2} />,
          <Icon id="money" prefix="-" suffix="3" />,
        ],
        [
          <Icon id="D" />,
          <PointSelector icon="time" options={[3, 2, 1, 0, 0]} value={3} />,
          <Icon id="money" prefix="-" suffix="4" />,
        ],
      ],
    },
    {
      title: "Make",
      body: [
        [
          <Icon id="AB" />,
          <PointSelector icon="time" options={[1, 0, 0, 0, 0]} value={1} />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" />
          </>,
        ],
        [
          <Icon id="ABC" />,
          <PointSelector icon="time" options={[2, 1, 0, 0, 0]} value={2} />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" /> <Icon id="C" />
          </>,
        ],
        [
          <Icon id="ABCD" />,
          <PointSelector icon="time" options={[3, 2, 1, 0, 0]} value={3} />,
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
          <PointSelector icon="time" options={[2, 1, 0, 0, 0]} value={2} />,
          <Icon id="money" prefix="+" suffix="6" />,
        ],
        [
          <Icon id="ABC" />,
          <PointSelector icon="time" options={[3, 2, 1, 0, 0]} value={3} />,
          <Icon id="money" prefix="+" suffix="18" />,
        ],
        [
          <Icon id="ABCD" />,
          <PointSelector icon="time" options={[4, 3, 2, 1, 0]} value={4} />,
          <Icon id="money" prefix="+" suffix="40" />,
        ],
      ],
    },
  ];

  return (
    <div class={styles.rules}>
      <h1>Hardware Hustle</h1>

      <LineInput title={"Name / Date"} className={styles.LineInput} />

      <div class={styles.actions}>
        <table class={styles.icons}>
          {ACTIONS.map((action, actionI) => (
            <tbody>
              {action.body.map((columns, bodyI) => (
                <tr>
                  {bodyI == 0 && (
                    <th rowspan={action.body.length}>
                      <h3>{action.title}</h3>
                    </th>
                  )}

                  {columns.map((column) => (
                    <td>{column}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td class={styles.gutter} />
              </tr>
            </tbody>
          ))}
          <tbody>
            <tr>
              <th rowspan={2}>
                <h3>PM</h3>
              </th>
              <td colspan={3}>
                <Icon id="time" /> &gt; <Icon id="roll" />
                <span class={styles.description}>
                  Research: Reduce Action <Icon id="time" />
                </span>
              </td>
            </tr>
            <tr>
              <td colspan={3}>
                <Icon id="time" /> &lt; 0
                <span class={styles.description}>Burnout: Lose next turn</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Graph
        turnCount={9}
        valueMax={100}
        valueStep={5}
        className={styles.Graph}
      />

      <footer class={styles.footer}>CC BY-SA 4.0 Oskitone</footer>
    </div>
  );
}
