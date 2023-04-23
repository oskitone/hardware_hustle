import styles from "@/styles/Rules.module.css";

export default function Rules() {
  const ACTIONS = [
    {
      title: ["Buy"],
      head: ["Part", "Time", "Cost"],
      body: [
        ["A", "0hr", "$1"],
        ["B", "1hr", "$2"],
        ["C", "2hr", "$3"],
        ["D", "3hr", "$4"],
      ],
    },
    {
      title: "Make",
      head: ["Widget", "Time", "Parts"],
      body: [
        ["AB", "2hr", "A, B"],
        ["ABC", "3hr", "A, B, C"],
        ["ABCD", "4hr", "A, B, C, D"],
      ],
    },

    {
      title: "Sell",
      head: ["Widget", "Time", "Price"],
      body: [
        ["AB", "1hr", "$12"],
        ["ABC", "2hr", "$18"],
        ["ABCD", "3hr", "$30"],
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
