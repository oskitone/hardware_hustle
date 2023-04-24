import Icon from "components/icon";

import styles from "@/styles/Rules.module.css";

export default function Rules() {
  const ACTIONS = [
    {
      title: ["Buy"],
      head: ["", "Time", "Cost"],
      body: [
        [
          <Icon id="A" />,
          <Icon id="time" suffix="0" />,
          <Icon id="money" suffix="1" />,
        ],
        [
          <Icon id="B" />,
          <Icon id="time" suffix="1" />,
          <Icon id="money" suffix="2" />,
        ],
        [
          <Icon id="C" />,
          <Icon id="time" suffix="2" />,
          <Icon id="money" suffix="3" />,
        ],
        [
          <Icon id="D" />,
          <Icon id="time" suffix="3" />,
          <Icon id="money" suffix="4" />,
        ],
      ],
    },
    {
      title: "Make",
      head: ["", "Time", "Parts"],
      body: [
        [
          <Icon id="AB" />,
          <Icon id="time" suffix="2" />,
          <>
            <Icon id="A" /> <Icon id="B" />
          </>,
        ],
        [
          <Icon id="ABC" />,
          <Icon id="time" suffix="3" />,
          <>
            <Icon id="A" /> <Icon id="B" /> <Icon id="C" />
          </>,
        ],
        [
          <Icon id="ABCD" />,
          <Icon id="time" suffix="4" />,
          <>
            <Icon id="A" /> <Icon id="B" /> <Icon id="C" /> <Icon id="D" />
          </>,
        ],
      ],
    },

    {
      title: "Sell",
      head: ["", "Time", "Price"],
      body: [
        [
          <Icon id="AB" />,
          <Icon id="time" suffix="1" />,
          <Icon id="money" suffix="12" />,
        ],
        [
          <Icon id="ABC" />,
          <Icon id="time" suffix="2" />,
          <Icon id="money" suffix="18" />,
        ],
        [
          <Icon id="ABCD" />,
          <Icon id="time" suffix="3" />,
          <Icon id="money" suffix="30" />,
        ],
      ],
    },
  ];

  return (
    <div class={`${styles.rules}`}>
      <h1>Hardware Hustle</h1>

      <h2>Actions</h2>

      <div class={`${styles.actions}`}>
        {ACTIONS.map((action) => (
          <>
            <h3>{action.title}</h3>
            <table>
              <thead>
                <tr>
                  {action.head.map((column) => (
                    <th>{column}</th>
                  ))}
                </tr>
              </thead>
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
    </div>
  );
}
