import Icon from "components/icon";

import styles from "@/styles/Rules.module.css";

export default function Rules() {
  const ACTIONS = [
    {
      title: ["Buy"],
      head: ["", "Time", "Cost"],
      body: [
        [<Icon id="A" />, "0hr", "$1"],
        [<Icon id="B" />, "1hr", "$2"],
        [<Icon id="C" />, "2hr", "$3"],
        [<Icon id="D" />, "3hr", "$4"],
      ],
    },
    {
      title: "Make",
      head: ["", "Time", "Parts"],
      body: [
        [
          <Icon id="AB" />,
          "2hr",
          <>
            <Icon id="A" /> <Icon id="B" />
          </>,
        ],
        [
          <Icon id="ABC" />,
          "3hr",
          <>
            <Icon id="A" /> <Icon id="B" /> <Icon id="C" />
          </>,
        ],
        [
          <Icon id="ABCD" />,
          "4hr",
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
        [<Icon id="AB" />, "1hr", "$12"],
        [<Icon id="ABC" />, "2hr", "$18"],
        [<Icon id="ABCD" />, "3hr", "$30"],
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
