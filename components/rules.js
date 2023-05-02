import classnames from "classnames";
import PointSelector from "components/point-selector";
import LineInput from "components/line-input";
import Icon from "components/icon";

import styles from "@/styles/Rules.module.css";

export default function Rules() {
  const ACTIONS = [
    {
      title: "Buy",
      body: [
        [
          <Icon id="A" />,
          <PointSelector icon="time" options={[0]} value={0} />,
          <Icon id="money" prefix="-" suffix="1" />,
        ],
        [
          <Icon id="B" />,
          <PointSelector icon="time" options={[1, 0]} value={1} />,
          <Icon id="money" prefix="-" suffix="2" />,
        ],
        [
          <Icon id="C" />,
          <PointSelector icon="time" options={[2, 1, 0]} value={2} />,
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
          <PointSelector icon="time" options={[1, 0]} value={1} />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" />
          </>,
        ],
        [
          <Icon id="ABC" />,
          <PointSelector icon="time" options={[2, 1, 0]} value={2} />,
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
          <Icon id="money" prefix="+" suffix="5" />,
          <PointSelector icon="time" options={[2, 1, 0]} value={2} />,
        ],
        [
          <Icon id="ABC" />,
          <Icon id="money" prefix="+" suffix="20" />,
          <PointSelector icon="time" options={[3, 2, 1, 0]} value={3} />,
        ],
        [
          <Icon id="ABCD" />,
          <Icon id="money" prefix="+" suffix="40" />,
          <PointSelector icon="time" options={[4, 3, 2, 1, 0]} value={4} />,
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
            <>
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
                {actionI !== action.body.length - 1 && (
                  <tr>
                    <td class={styles.gutter} />
                  </tr>
                )}
              </tbody>
            </>
          ))}
        </table>
      </div>

      {/* TODO: bring back */}
      {/* <Icon id="time" /> &gt; <Icon id="roll" />
      <h4>Research</h4>
      <em>Add Skill Point</em>
      <Icon id="time" /> &lt; <Icon id="roll" />
      <h4>Burnout</h4>
      <em>Lose next turn</em> */}

      <footer class={styles.footer}>CC BY-SA 4.0 Oskitone</footer>
    </div>
  );
}
