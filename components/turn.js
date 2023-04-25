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

  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) {
  return (
    <div
      contentEditable
      className={classnames({
        [styles.td]: !head && !icon,
        [styles.th]: head,

        [styles.carryOver]: carryOver,
        [styles.final]: final,

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
  return (
    <div class={`${styles.turn}`}>
      <Head>
        <Row>
          <Cell head />
          <Cell head>Buy</Cell>
          <Cell head>Make</Cell>
          <Cell head>Sell</Cell>
        </Row>
      </Head>
      <Body>
        <Row>
          <Cell icon="money" />
          <Cell topLeft bottomLeft />
          <Cell carryOver />
          <Cell topRight bottomRight final />
        </Row>
      </Body>
      <Body>
        <Row>
          <Cell icon="time" />
          <Cell topLeft bottomLeft />
          <Cell />
          <Cell topRight bottomRigh final />
        </Row>
      </Body>
      <Body>
        <Row>
          <Cell icon="A" />
          <Cell topLeft />
          <Cell />
          <Cell topRight final carryOver />
        </Row>
        <Row>
          <Cell icon="B" />
          <Cell />
          <Cell />
          <Cell final carryOver />
        </Row>
        <Row>
          <Cell icon="C" />
          <Cell />
          <Cell />
          <Cell final carryOver />
        </Row>
        <Row>
          <Cell icon="D" />
          <Cell bottomLeft />
          <Cell />
          <Cell bottomRight final carryOver />
        </Row>
      </Body>
      <Body>
        <Row>
          <Cell icon="AB" />
          <Cell topLeft carryOver />
          <Cell />
          <Cell topRight final />
        </Row>
        <Row>
          <Cell icon="ABC" />
          <Cell carryOver />
          <Cell />
          <Cell final />
        </Row>
        <Row>
          <Cell icon="ABCD" />
          <Cell bottomLeft carryOver />
          <Cell />
          <Cell bottomRight final />
        </Row>
      </Body>
    </div>
  );
}
