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
      <Body>
        <Row>
          <Cell icon="money" />
          <Cell minus topLeft bottomLeft />
          <Cell carryOver />
          <Cell plus />
          <Cell equals topRight bottomRight />
        </Row>
      </Body>
      <Body>
        <Row>
          <Cell icon="time" />
          <Cell topLeft bottomLeft />
          <Cell plus />
          <Cell plus />
          <Cell equals topRight bottomRight />
        </Row>
      </Body>
      <Body>
        <Row>
          <Cell icon="A" />
          <Cell plus topLeft />
          <Cell minus />
          <Cell carryOver />
          <Cell equals topRight />
        </Row>
        <Row>
          <Cell icon="B" />
          <Cell plus />
          <Cell minus />
          <Cell carryOver />
          <Cell equals />
        </Row>
        <Row>
          <Cell icon="C" />
          <Cell plus />
          <Cell minus />
          <Cell carryOver />
          <Cell equals />
        </Row>
        <Row>
          <Cell icon="D" />
          <Cell plus bottomLeft />
          <Cell minus />
          <Cell carryOver />
          <Cell equals bottomRight />
        </Row>
      </Body>
      <Body>
        <Row>
          <Cell icon="AB" />
          <Cell topLeft carryOver />
          <Cell plus />
          <Cell minus />
          <Cell equals topRight />
        </Row>
        <Row>
          <Cell icon="ABC" />
          <Cell carryOver />
          <Cell plus />
          <Cell minus />
          <Cell equals />
        </Row>
        <Row>
          <Cell icon="ABCD" />
          <Cell bottomLeft carryOver />
          <Cell plus />
          <Cell minus />
          <Cell equals bottomRight />
        </Row>
      </Body>
    </div>
  );
}
