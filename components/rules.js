import classnames from "classnames";
import { Cell } from "components/turn";
import Icon from "components/icon";

import styles from "@/styles/Rules.module.css";

export default function Rules() {
  const ACTIONS = [
    {
      title: "Buy",
      body: [
        [
          <Icon id="A" />,
          <Icon id="time" prefix="-" suffix="0" />,
          <Icon id="money" prefix="-" suffix="1" />,
        ],
        [
          <Icon id="B" />,
          <Icon id="time" prefix="-" suffix="1" />,
          <Icon id="money" prefix="-" suffix="2" />,
        ],
        [
          <Icon id="C" />,
          <Icon id="time" prefix="-" suffix="2" />,
          <Icon id="money" prefix="-" suffix="3" />,
        ],
        [
          <Icon id="D" />,
          <Icon id="time" prefix="-" suffix="3" />,
          <Icon id="money" prefix="-" suffix="4" />,
        ],
      ],
    },
    {
      title: "Make",
      body: [
        [
          <Icon id="AB" />,
          <Icon id="time" prefix="-" suffix="2" />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" />
          </>,
        ],
        [
          <Icon id="ABC" />,
          <Icon id="time" prefix="-" suffix="3" />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" /> <Icon id="C" />
          </>,
        ],
        [
          <Icon id="ABCD" />,
          <Icon id="time" prefix="-" suffix="4" />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" /> <Icon id="C" />{" "}
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
          <Icon id="time" prefix="-" suffix="1" />,
          <Icon id="money" prefix="+" suffix="12" />,
        ],
        [
          <Icon id="ABC" />,
          <Icon id="time" prefix="-" suffix="2" />,
          <Icon id="money" prefix="+" suffix="18" />,
        ],
        [
          <Icon id="ABCD" />,
          <Icon id="time" prefix="-" suffix="3" />,
          <Icon id="money" prefix="+" suffix="30" />,
        ],
      ],
    },

    {
      title: "EOD",
      text: true,
      body: [
        [
          <>&#62;12</>,
          <>
            <Icon id="roll" /> &#8805; <Icon id="time" />
            -12
            <br />
            <em>Lose next turn</em>
          </>,
        ],
        [
          <>&#60;5</>,
          <>
            <Icon id="roll" /> &#8804; <Icon id="time" />
            <br />
            <em>Add a skill point</em>
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
            <table class={classnames({ [styles.text]: action.text })}>
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

      <h2>Skills</h2>
      <div class={styles.skillPoints}>
        <table>
          <tbody>
            <tr>
              <td>Buy</td>
              <td>
                {[...Array(6)].map((e, i) => (
                  <Cell
                    inline
                    topLeft={i == 0}
                    bottomLeft={i == 0}
                    topRight={i == 6 - 1}
                    bottomRight={i == 6 - 1}
                  />
                ))}
              </td>
            </tr>
            <tr>
              <td>Make</td>
              <td>
                {[...Array(6)].map((e, i) => (
                  <Cell
                    inline
                    topLeft={i == 0}
                    bottomLeft={i == 0}
                    topRight={i == 6 - 1}
                    bottomRight={i == 6 - 1}
                  />
                ))}
              </td>
            </tr>
            <tr>
              <td>Sell</td>
              <td>
                {[...Array(6)].map((e, i) => (
                  <Cell
                    inline
                    topLeft={i == 0}
                    bottomLeft={i == 0}
                    topRight={i == 6 - 1}
                    bottomRight={i == 6 - 1}
                  />
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class={styles.footer}>CC BY-SA 4.0 Oskitone</footer>
    </div>
  );
}
