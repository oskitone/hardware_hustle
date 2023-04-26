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

function Cell({
  icon,
  children,

  head,

  carryOver,
  final,
  eod,

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

        [styles.carryOver]: carryOver,
        [styles.final]: final,
        [styles.eod]: eod,

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
    ["money"],
    ["time"],
    ["A", "B", "C", "D"],
    ["AB", "ABC", "ABCD"],
  ];

  const CARRYOVER_COLUMNS = [undefined, [1], [2], [0]];

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
      {BODIES.map((row, i) => (
        <Body>
          {row.map((icon, ii) => (
            <Row>
              <Cell icon={icon} />
              <Cell
                topLeft={ii == 0}
                bottomLeft={ii == row.length - 1}
                carryOver={CARRYOVER_COLUMNS[i] == 0}
              />
              <Cell carryOver={CARRYOVER_COLUMNS[i] == 1} />
              <Cell carryOver={CARRYOVER_COLUMNS[i] == 2} />
              <Cell
                topRight={ii == 0}
                bottomRight={ii == row.length - 1}
                carryOver={CARRYOVER_COLUMNS[i] == 3}
                final
              />
            </Row>
          ))}
        </Body>
      ))}
    </div>
  );
}
