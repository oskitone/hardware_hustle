import { isUndefined } from "lodash";
import classnames from "classnames";
import Icon from "components/icon";

import styles from "@/styles/Turn.module.css";

import { Gaegu } from "next/font/google";
const handwritingFont = Gaegu({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handwriting",
});

const emptyTurnData = {
  money: [],
  A: [],
  B: [],
  C: [],
  D: [],
  AB: [],
  ABC: [],
  ABCD: [],
  opportunity: [],
};

export const makeTurnData = (newData) => ({
  ...emptyTurnData,
  ...newData,
});

export const defaultSuppliedColumns = {
  ...emptyTurnData,
  opportunity: [true],
};

export const firstTurnSuppliedColumns = {
  ...defaultSuppliedColumns,
  money: [true],
  A: [true],
  B: [true],
  C: [true],
  D: [true],
  AB: [true],
  ABC: [true],
  ABCD: [true],
  opportunity: [true],
};

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

  supplied,

  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) {
  const hasContent = icon || !!children || children === 0 || carryOver;

  const props = {
    className: classnames(handwritingFont.variable, {
      [styles.td]: !head && !icon,
      [styles.th]: head || !!icon,
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

      [styles.handwritten]: !day && !head && !icon && !supplied,
    }),
  };

  if (hasContent) {
    return (
      <div {...props}>
        {icon && <Icon id={icon} />}
        {children}
      </div>
    );
  }

  return <div {...props} contentEditable />;
}

function Turn({ id, data, isFinalTurn, className, suppliedColumns }) {
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
        { equals: true, carryOver: true },
      ],
    },
    {
      rows: ["AB", "ABC", "ABCD"],
      columns: [
        {},
        { carryOver: true },
        { plus: true },
        { minus: true },
        { equals: true, carryOver: true },
      ],
    },
    {
      rows: ["opportunity"],
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
    <div className={classnames(className, styles.turn)}>
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
                      children={(data[rowIcon] || [])[columnI]}
                      topLeft={isFirstRow && isFirstColumn}
                      topRight={isFirstRow && isLastColumn}
                      bottomRight={isLastRow && isLastColumn}
                      bottomLeft={isLastRow && isFirstColumn}
                      carryOver={
                        !(isFinalTurn && isLastColumn) && column.carryOver
                      }
                      plus={column.plus}
                      minus={column.minus}
                      equals={column.equals}
                      follow={
                        isFirstColumn && isUndefined(data[rowIcon][columnI])
                      }
                      supplied={(suppliedColumns[rowIcon] || [])[columnI]}
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

Turn.defaultProps = {
  id: 0,
  data: emptyTurnData,
  isFinalTurn: false,
  className: undefined,
  suppliedColumns: defaultSuppliedColumns,
};

export default Turn;
