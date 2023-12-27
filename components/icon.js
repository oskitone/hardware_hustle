import classnames from "classnames";

import { htmlEntity } from "common/utils";
import styles from "@/styles/Icon.module.css";

import { BsArrowUpRightCircle } from "react-icons/bs";

import {
  BiVolumeFull,
  BiPackage,
  BiCalculator,
  BiSolidPiano,
  BiMicrochip,
  BiMoney,
  BiSliderAlt,
  BiSpeaker,
} from "react-icons/bi";

import { IoDiceOutline } from "react-icons/io5";

function Icon({ id, prefix, suffix, className, inline, row }) {
  // TODO: tidy
  const iconElement = {
    money: <BiMoney className={styles.iconElement} />,
    opportunity: <BsArrowUpRightCircle className={styles.iconElement} />,
    A: <BiPackage className={styles.iconElement} />,
    B: <BiVolumeFull className={styles.iconElement} />,
    C: <BiSliderAlt className={styles.iconElement} />,
    D: <BiMicrochip className={styles.iconElement} />,
    AB: <BiSpeaker className={styles.iconElement} />,
    ABC: <BiCalculator className={styles.iconElement} />,
    ABCD: <BiSolidPiano className={styles.iconElement} />,
    roll: <IoDiceOutline className={styles.iconElement} />,
  }[id];

  return (
    <span
      className={classnames(className, styles.icon, {
        [styles.inline]: inline,
        [styles.row]: row,
      })}
      title={id}
    >
      {htmlEntity(prefix)}
      {iconElement}
      {htmlEntity(suffix)}
    </span>
  );
}

export const Money = () => <Icon id="money" inline />;
export const Opportunity = () => <Icon id="opportunity" inline />;
export const A = () => <Icon id="A" inline />;
export const B = () => <Icon id="B" inline />;
export const C = () => <Icon id="C" inline />;
export const D = () => <Icon id="D" inline />;
export const AB = () => <Icon id="AB" inline />;
export const ABC = () => <Icon id="ABC" inline />;
export const ABCD = () => <Icon id="ABCD" inline />;
export const Roll = () => <Icon id="roll" inline />;

export const MoneyX = ({ value }) => (
  <span className={styles.IconX}>
    <Icon id="money" inline />
    <span className={styles.x}>&times;</span>
    {value}
  </span>
);
export const OpportunityX = ({ value }) => (
  <span className={styles.IconX}>
    <Icon id="opportunity" inline />
    <span className={styles.x}>&times;</span>
    {value}
  </span>
);

export const IconsParen = ({ ids }) => (
  <span className={styles.IconsParen}>
    <span className={styles.paren}>(</span>
    {ids.map((id, i) => (
      <Icon id={id} key={i} />
    ))}
    <span className={styles.paren}>)</span>
  </span>
);

export default Icon;
