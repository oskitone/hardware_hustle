import classnames from "classnames";
import Icon from "components/icon";

import styles from "@/styles/Turn.module.css";

function Head({ children }) {
  return <div class={`${styles.thead}`}>{children}</div>;
}

function Body({ children }) {
  return <div class={`${styles.tbody}`}>{children}</div>;
}

function Row({ children }) {
  return <div class={`${styles.tr}`}>{children}</div>;
}

export function Cell({
  icon,
  children,

  head,
  inline,

  carryOver,
  eod,

  plus,
  minus,
  equals,

  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) {
  const hasContent = icon || children;

  return (
    <div
      contentEditable={!hasContent}
      className={classnames({
        [styles.td]: !head && !icon,
        [styles.th]: head,
        [styles.inline]: inline,

        [styles.icon]: !!icon,
        [styles.carryOver]: carryOver,
        [styles.eod]: eod,

        [styles.plus]: plus,
        [styles.minus]: minus,
        [styles.equals]: equals,

        [styles.topLeft]: topLeft,
        [styles.topRight]: topRight,
        [styles.bottomLeft]: bottomLeft,
        [styles.bottomRight]: bottomRight,
      })}
    >
      {icon && <Icon id={icon} />}
      {children}
    </div>
  );
}

export default function Turn({ id }) {
  const COLUMNS = ["AM", "Buy", "Make", "Sell", "PM"];

  const BODIES = [
    {
      rows: ["money"],
      columns: [
        { startValue: 12 },
        { minus: true },
        { carryOver: true },
        { plus: true },
        { equals: true },
      ],
    },
    {
      rows: ["time"],
      columns: [
        { startValue: 0 },
        { plus: true },
        { plus: true },
        { plus: true },
        { equals: true },
      ],
    },
    {
      rows: ["A", "B", "C", "D"],
      columns: [
        { startValue: 0 },
        { plus: true },
        { minus: true },
        { carryOver: true },
        { equals: true },
      ],
    },
    {
      rows: ["AB", "ABC", "ABCD"],
      columns: [
        { startValue: 0 },
        { carryOver: true },
        { plus: true },
        { minus: true },
        { equals: true },
      ],
    },
  ];

  return (
    <div class={`${styles.turn}`}>
      <Head>
        <Row>
          <Cell head />
          {COLUMNS.map((column) => (
            <Cell head>{column}</Cell>
          ))}
        </Row>
      </Head>

      {BODIES.map((body, bodyI) => (
        <Body>
          {body.rows.map((icon, rowI) => {
            const isFirstRow = rowI == 0;
            const isLastRow = rowI == body.rows.length - 1;

            return (
              <Row>
                <Cell icon={icon} />

                {body.columns.map((column, columnI) => {
                  const isFirstColumn = columnI == 0;
                  const isLastColumn = columnI == body.columns.length - 1;

                  return (
                    <Cell
                      children={id == 0 && isFirstColumn && column.startValue}
                      topLeft={isFirstRow && isFirstColumn}
                      topRight={isFirstRow && isLastColumn}
                      bottomRight={isLastRow && isLastColumn}
                      bottomLeft={isLastRow && isFirstColumn}
                      carryOver={
                        column.carryOver || (id !== 0 && isFirstColumn)
                      }
                      plus={column.plus}
                      minus={column.minus}
                      equals={column.equals}
                    />
                  );
                })}
              </Row>
            );
          })}
        </Body>
      ))}
    </div>
  );
}
