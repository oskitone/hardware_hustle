import classnames from "classnames";
import TurnGrid from "components/turn-grid";
import Icon from "components/icon";

import styles from "@/styles/Rules.module.css";

function SkillPointsSelector() {
  return (
    <div class={styles.skillPointsSelector}>
      {[...Array(7)].map((e, i) => (
        <span class={classnames(styles.option, { [styles.selected]: i == 0 })}>
          {i}
        </span>
      ))}
    </div>
  );
}

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
          <Icon id="time" prefix="-" suffix="1" />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" />
          </>,
        ],
        [
          <Icon id="ABC" />,
          <Icon id="time" prefix="-" suffix="2" />,
          <>
            <Icon prefix="-" id="A" /> <Icon id="B" /> <Icon id="C" />
          </>,
        ],
        [
          <Icon id="ABCD" />,
          <Icon id="time" prefix="-" suffix="3" />,
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
          <Icon id="time" prefix="-" suffix="2" />,
          <Icon id="money" prefix="+" suffix="9" />,
        ],
        [
          <Icon id="ABC" />,
          <Icon id="time" prefix="-" suffix="3" />,
          <Icon id="money" prefix="+" suffix="18" />,
        ],
        [
          <Icon id="ABCD" />,
          <Icon id="time" prefix="-" suffix="4" />,
          <Icon id="money" prefix="+" suffix="30" />,
        ],
      ],
    },

    {
      title: "PM",
      text: true,
      body: [
        [
          <Icon id="time" suffix="<6" />,
          <>
            <h4>Research</h4>
            <em>Add a skill point</em>
          </>,
        ],
        [
          <Icon id="time" suffix=">12" />,
          <>
            <h4>Burnout</h4>
            <em>
              <Icon id="roll" /> = 0, all next turn
            </em>
          </>,
        ],
      ],
    },
  ];

  return (
    <div class={styles.rules}>
      <h1>Hardware Hustle</h1>

      <h2>Actions</h2>

      <p class={styles.description}>
        Roll <Icon id="roll" /> for max available <Icon id="time" />
      </p>

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
        <p class={styles.description}>
          Decreases <Icon id="time" /> Action cost
        </p>

        <table>
          <tbody>
            <tr>
              <th>
                <h4>Buy</h4>
              </th>
              <td>
                <SkillPointsSelector />
              </td>
            </tr>
            <tr>
              <th>
                <h4>Make</h4>
              </th>
              <td>
                <SkillPointsSelector />
              </td>
            </tr>
            <tr>
              <th>
                <h4>Sell</h4>
              </th>
              <td>
                <SkillPointsSelector />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class={styles.footer}>CC BY-SA 4.0 Oskitone</footer>
    </div>
  );
}
