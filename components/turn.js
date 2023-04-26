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
  const BODIES = [
    {
      rowIcons: ["money"],
      columns: [
        { carryOver: false, plus: false, minus: true },
        { carryOver: true, plus: false, minus: false },
        { carryOver: false, plus: true, minus: false },
      ],
    },
    {
      rowIcons: ["time"],
      columns: [
        { carryOver: false, plus: false, minus: false },
        { carryOver: false, plus: true, minus: false },
        { carryOver: false, plus: true, minus: false },
      ],
    },
    {
      rowIcons: ["A", "B", "C", "D"],
      columns: [
        { carryOver: false, plus: true, minus: false },
        { carryOver: false, plus: false, minus: true },
        { carryOver: true, plus: false, minus: false },
      ],
    },
    {
      rowIcons: ["AB", "ABC", "ABCD"],
      columns: [
        { carryOver: true, plus: false, minus: false },
        { carryOver: false, plus: true, minus: false },
        { carryOver: false, plus: false, minus: true },
      ],
    },
  ];

  const CARRYOVER_COLUMNS = [[], [1], [2], [0]];
  const PLUS_COLUMNS = [[2], [1, 2], [0], [1]];

  return (
    <div class={`${styles.turn}`}>
      <Head>
        <Row>
          <Cell head />
          <Cell head>Buy</Cell>
          <Cell head>Make</Cell>
          <Cell head>Sell</Cell>
          <Cell head>EOD</Cell>
        </Row>
      </Head>
      {BODIES.map((body, i) => (
        <Body>
          {body.rowIcons.map((icon, ii) => (
            <Row>
              <Cell icon={icon} />
              <Cell
                topLeft={ii == 0}
                bottomLeft={ii == body.rowIcons.length - 1}
                carryOver={body.columns[0].carryOver}
                plus={body.columns[0].plus}
                minus={body.columns[0].minus}
              />
              <Cell
                carryOver={body.columns[1].carryOver}
                plus={body.columns[1].plus}
                minus={body.columns[1].minus}
              />
              <Cell
                carryOver={body.columns[2].carryOver}
                plus={body.columns[2].plus}
                minus={body.columns[2].minus}
              />
              <Cell
                topRight={ii == 0}
                bottomRight={ii == body.rowIcons.length - 1}
                equals
              />
            </Row>
          ))}
        </Body>
      ))}
    </div>
  );
}
