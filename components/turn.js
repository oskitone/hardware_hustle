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
  standAlone,
  carryOver,

  prefix,

  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) {
  const hasContent = icon || children;

  return (
    <div
      contentEditable={!hasContent}
      prefix={prefix}
      className={classnames({
        [styles.td]: !head && !icon,
        [styles.th]: head,
        [styles.inline]: inline,
        [styles.standAlone]: standAlone,
        [styles.icon]: !!icon,
        [styles.carryOver]: carryOver,
        [styles.prefix]: !!prefix,

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
  const isStart = id == 1;

  return (
    <div class={`${styles.turn}`}>
      <Head>
        <Row>
          <Cell head />
          <Cell head>{!isStart && "ZZZ"}</Cell>
          <Cell head>Buy</Cell>
          <Cell head>Make</Cell>
          <Cell head>Sell</Cell>
        </Row>
      </Head>
      <Body>
        <Row>
          <Cell icon="money" />
          <Cell
            standAlone
            prefix={!isStart && "="}
            topLeft
            bottomLeft
            topRight
            bottomRight
          >
            {isStart ? "12" : undefined}
          </Cell>
          <Cell prefix="-" topLeft bottomLeft />
          <Cell carryOver />
          <Cell prefix="+" topRight bottomRight />
        </Row>
      </Body>
      <Body>
        <Row>
          <Cell icon="time" />
          <Cell
            standAlone
            prefix={!isStart && "="}
            topLeft
            bottomLeft
            topRight
            bottomRight
            carryOver={isStart}
          />
          <Cell topLeft bottomLeft />
          <Cell prefix="+" />
          <Cell prefix="+" topRight bottomRight />
        </Row>
      </Body>
      <Body>
        <Row>
          <Cell icon="A" />
          <Cell standAlone prefix={!isStart && "="} topLeft topRight>
            {isStart ? "0" : undefined}
          </Cell>
          <Cell prefix="+" topLeft />
          <Cell prefix="-" />
          <Cell carryOver topRight />
        </Row>
        <Row>
          <Cell icon="B" />
          <Cell standAlone prefix={!isStart && "="}>
            {isStart ? "0" : undefined}
          </Cell>
          <Cell prefix="+" />
          <Cell prefix="-" />
          <Cell carryOver />
        </Row>
        <Row>
          <Cell icon="C" />
          <Cell standAlone prefix={!isStart && "="}>
            {isStart ? "0" : undefined}
          </Cell>
          <Cell prefix="+" />
          <Cell prefix="-" />
          <Cell carryOver />
        </Row>
        <Row>
          <Cell icon="D" />
          <Cell standAlone prefix={!isStart && "="} bottomLeft bottomRight>
            {isStart ? "0" : undefined}
          </Cell>
          <Cell prefix="+" bottomLeft />
          <Cell prefix="-" />
          <Cell carryOver bottomRight />
        </Row>
      </Body>
      <Body>
        <Row>
          <Cell icon="AB" />
          <Cell standAlone prefix={!isStart && "="} topLeft topRight>
            {isStart ? "0" : undefined}
          </Cell>
          <Cell carryOver topLeft />
          <Cell prefix="+" />
          <Cell prefix="-" topRight />
        </Row>
        <Row>
          <Cell icon="ABC" />
          <Cell standAlone prefix={!isStart && "="}>
            {isStart ? "0" : undefined}
          </Cell>
          <Cell carryOver />
          <Cell prefix="+" />
          <Cell prefix="-" />
        </Row>
        <Row>
          <Cell icon="ABCD" />
          <Cell standAlone prefix={!isStart && "="} bottomLeft bottomRight>
            {isStart ? "0" : undefined}
          </Cell>
          <Cell carryOver bottomLeft />
          <Cell prefix="+" />
          <Cell prefix="-" bottomRight />
        </Row>
      </Body>
    </div>
  );
}
