import classnames from "classnames";
import PointSelector from "components/point-selector";
import TurnGrid from "components/turn-grid";
import Icon from "components/icon";

import styles from "@/styles/Rules.module.css";

export default function Rules() {
  const ACTIONS = [
    {
      title: "Buy",
      body: [
        [
          <Icon id="A" />,
          <Icon id="money" prefix="-" suffix="1" />,
          <PointSelector options={[0]} value={0} />,
        ],
        [
          <Icon id="B" />,
          <Icon id="money" prefix="-" suffix="2" />,
          <PointSelector options={[1, 0]} value={1} />,
        ],
        [
          <Icon id="C" />,
          <Icon id="money" prefix="-" suffix="3" />,
          <PointSelector options={[2, 1, 0]} value={2} />,
        ],
        [
          <Icon id="D" />,
          <Icon id="money" prefix="-" suffix="4" />,
          <PointSelector options={[3, 2, 1, 0]} value={3} />,
        ],
      ],
    },
    {
      title: "Make",
      body: [
        [
          <Icon id="AB" />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" />
          </>,
          <PointSelector options={[1, 0]} value={1} />,
        ],
        [
          <Icon id="ABC" />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" /> <Icon id="C" />
          </>,
          <PointSelector options={[2, 1, 0]} value={2} />,
        ],
        [
          <Icon id="ABCD" />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" /> <Icon id="C" />
            <Icon id="D" />
          </>,
          <PointSelector options={[3, 2, 1, 0]} value={3} />,
        ],
      ],
    },

    {
      title: "Sell",
      body: [
        [
          <Icon id="AB" />,
          <Icon id="money" prefix="+" suffix="9" />,
          <PointSelector options={[2, 1, 0]} value={2} />,
        ],
        [
          <Icon id="ABC" />,
          <Icon id="money" prefix="+" suffix="18" />,
          <PointSelector options={[3, 2, 1, 0]} value={3} />,
        ],
        [
          <Icon id="ABCD" />,
          <Icon id="money" prefix="+" suffix="30" />,
          <PointSelector options={[4, 3, 2, 1, 0]} value={4} />,
        ],
      ],
    },

    {
      title: "PM",
      text: true,
      body: [
        [
          <>
            <Icon id="time" /> &gt; <Icon id="roll" />
          </>,
          <>
            <h4>Research</h4>
            <em>Add Skill Point</em>
          </>,
        ],
        [
          <>
            <Icon id="time" /> &lt; <Icon id="roll" />
          </>,
          <>
            <h4>Burnout</h4>
            <em>Lose next turn</em>
          </>,
        ],
      ],
    },
  ];

  return (
    <div class={styles.rules}>
      <h1>Hardware Hustle</h1>

      <h2>Actions</h2>

      <div class={styles.actions}>
        {ACTIONS.map((action, i) => (
          <>
            <h3>
              {i + 1} {action.title}
            </h3>
            <table
              class={classnames({
                [styles.icons]: !action.text,
                [styles.text]: action.text,
              })}
            >
              <tbody>
                {action.body.map((columns) => (
                  <tr>
                    {columns.map((column) => (
                      <td>{column}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ))}
      </div>

      <h2>Skill Points</h2>

      <div class={styles.skillPoints}>
        <table>
          <tbody>
            <tr>
              <th>
                <h4>Buy</h4>
              </th>
              <td>
                <PointSelector options={[0, 1, 2, 3, 4, 5, 6]} value={0} />
              </td>
            </tr>
            <tr>
              <th>
                <h4>Make</h4>
              </th>
              <td>
                <PointSelector options={[0, 1, 2, 3, 4, 5, 6]} value={0} />
              </td>
            </tr>
            <tr>
              <th>
                <h4>Sell</h4>
              </th>
              <td>
                <PointSelector options={[0, 1, 2, 3, 4, 5, 6]} value={0} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class={styles.footer}>CC BY-SA 4.0 Oskitone</footer>
    </div>
  );
}
