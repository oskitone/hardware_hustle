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

const PLUS = "+";
const MINUS = "-";
const EQUALS = "=";
const FOLLOW = "⇢";

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

  prefix,

  supplied,

  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) {
  const hasContent = icon || !!children || children === 0;

  const props = {
    prefix,
    className: classnames(handwritingFont.variable, {
      [styles.td]: !head && !icon,
      [styles.th]: head || !!icon,
      [styles.day]: day,

      [styles.icon]: !!icon,
      [styles.carryOver]: carryOver,
      [styles.eod]: eod,

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
        { prefix: MINUS },
        { carryOver: true },
        { prefix: PLUS },
        { prefix: EQUALS },
      ],
    },
    {
      rows: ["A", "B", "C", "D"],
      columns: [
        {},
        { prefix: PLUS },
        { prefix: MINUS },
        { carryOver: true },
        { prefix: EQUALS },
      ],
    },
    {
      rows: ["AB", "ABC", "ABCD"],
      columns: [
        {},
        { carryOver: true },
        { prefix: PLUS },
        { prefix: MINUS },
        { prefix: EQUALS },
      ],
    },
    {
      rows: ["opportunity"],
      columns: [
        {},
        { prefix: MINUS },
        { prefix: MINUS },
        { prefix: MINUS },
        { prefix: EQUALS },
      ],
    },
  ];

  return (
    <div className={classnames(className, styles.turn)}>
      <Head>
        <Row>
          <Cell head day={true}>
            {!isUndefined(id) && <span>{id + 1}</span>}
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
                  const isSupplied = (suppliedColumns[rowIcon] || [])[columnI];
                  const isEmpty = isUndefined(data[rowIcon][columnI]);

                  // TODO: obviate or tidy, please
                  const isFollow =
                    (isFirstColumn && isEmpty) ||
                    (isFirstColumn && id > 0 && !isSupplied);

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
                      prefix={isFollow ? FOLLOW : column.prefix}
                      supplied={isSupplied}
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
