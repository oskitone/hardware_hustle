import { isUndefined } from "lodash";
import classnames from "classnames";
import Icon from "components/icon";

import styles from "@/styles/Turn.module.css";

function Head({ children }) {
  return <div className={`${styles.thead}`}>{children}</div>;
}

function Body({ children }) {
  return <div className={`${styles.tbody}`}>{children}</div>;
}

function Row({ children }) {
  return <div className={`${styles.tr}`}>{children}</div>;
}

export function Cell({
  icon,
  children,

  head,
  day,

  carryOver,
  eod,

  plus,
  minus,
  equals,
  follow,

  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) {
  const props = {
    className: classnames({
      [styles.td]: !head && !icon,
      [styles.th]: head,
      [styles.day]: day,

      [styles.icon]: !!icon,
      [styles.carryOver]: carryOver,
      [styles.eod]: eod,

      [styles.plus]: plus,
      [styles.minus]: minus,
      [styles.equals]: equals,
      [styles.follow]: follow,

      [styles.topLeft]: topLeft,
      [styles.topRight]: topRight,
      [styles.bottomLeft]: bottomLeft,
      [styles.bottomRight]: bottomRight,
    }),
  };

  if (icon || !isUndefined(children)) {
    return (
      <div {...props}>
        {icon && <Icon id={icon} />}
        {children}
      </div>
    );
  }

  return <div {...props} contentEditable />;
}

export default function Turn({ id, startingValues }) {
  const COLUMNS = ["AM", "Buy", "Make", "Sell", "PM"];

  const BODIES = [
    {
      rows: ["money"],
      columns: [
        {},
        { minus: true },
        { carryOver: true },
        { plus: true },
        { equals: true },
      ],
    },
    {
      rows: ["A", "B", "C", "D"],
      columns: [
        {},
        { plus: true },
        { minus: true },
        { carryOver: true },
        { equals: true },
      ],
    },
    {
      rows: ["AB", "ABC", "ABCD"],
      columns: [
        {},
        { carryOver: true },
        { plus: true },
        { minus: true },
        { equals: true },
      ],
    },
    {
      rows: ["time"],
      columns: [
        {},
        { minus: true },
        { minus: true },
        { minus: true },
        { equals: true },
      ],
    },
  ];

  return (
    <div className={`${styles.turn}`}>
      <Head>
        <Row>
          <Cell head day={true}>
            <span>{id + 1}</span>
          </Cell>
          {COLUMNS.map((column, i) => (
            <Cell head key={i}>
              {column}
            </Cell>
          ))}
        </Row>
      </Head>

      {BODIES.map((body, bodyI) => (
        <Body key={bodyI}>
          {body.rows.map((rowIcon, rowI) => {
            const isFirstRow = rowI == 0;
            const isLastRow = rowI == body.rows.length - 1;

            return (
              <Row key={rowI}>
                <Cell icon={rowIcon} />

                {body.columns.map((column, columnI) => {
                  const isFirstColumn = columnI == 0;
                  const isLastColumn = columnI == body.columns.length - 1;

                  return (
                    <Cell
                      children={isFirstColumn && startingValues[rowIcon]}
                      topLeft={isFirstRow && isFirstColumn}
                      topRight={isFirstRow && isLastColumn}
                      bottomRight={isLastRow && isLastColumn}
                      bottomLeft={isLastRow && isFirstColumn}
                      carryOver={column.carryOver}
                      plus={column.plus}
                      minus={column.minus}
                      equals={column.equals}
                      follow={
                        isFirstColumn && isUndefined(startingValues[rowIcon])
                      }
                      key={columnI}
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
