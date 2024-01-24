import classnames from "classnames";

import { htmlEntity } from "common/utils";
import styles from "@/styles/Icon.module.css";

import {
  BiVolumeFull,
  BiPackage,
  BiCalculator,
  BiSolidPiano,
  BiMicrochip,
  BiMoney,
  BiSliderAlt,
  BiSpeaker,
  BiRightTopArrowCircle,
} from "react-icons/bi";

import { IoDiceOutline } from "react-icons/io5";

function Icon({ id, prefix, suffix, className, inline, row }) {
  const props = { className: styles.iconElement };

  const iconElement = {
    money: <BiMoney {...props} />,
    opportunity: <BiRightTopArrowCircle {...props} />,
    A: <BiPackage {...props} />,
    B: <BiVolumeFull {...props} />,
    C: <BiSliderAlt {...props} />,
    D: <BiMicrochip {...props} />,
    AB: <BiSpeaker {...props} />,
    ABC: <BiCalculator {...props} />,
    ABCD: <BiSolidPiano {...props} />,
    roll: <IoDiceOutline {...props} />,
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

const makeInlineIcon =
  (iconId) =>
  ({ prefix, suffix, className }) =>
    (
      <Icon
        id={iconId}
        inline
        prefix={prefix}
        suffix={suffix}
        className={className}
      />
    );

export const Money = makeInlineIcon("money");
export const Opportunity = makeInlineIcon("opportunity");
export const A = makeInlineIcon("A");
export const B = makeInlineIcon("B");
export const C = makeInlineIcon("C");
export const D = makeInlineIcon("D");
export const AB = makeInlineIcon("AB");
export const ABC = makeInlineIcon("ABC");
export const ABCD = makeInlineIcon("ABCD");
export const Roll = makeInlineIcon("roll");

const makeIconX =
  (iconId) =>
  ({ value }) =>
    (
      <span className={styles.IconX}>
        <Icon id={iconId} inline />
        <span className={styles.x}>&times;</span>
        {value}
      </span>
    );

export const MoneyX = makeIconX("money");
export const OpportunityX = makeIconX("opportunity");
export const AX = makeIconX("A");
export const BX = makeIconX("B");
export const CX = makeIconX("C");
export const DX = makeIconX("D");
export const ABX = makeIconX("AB");
export const ABCX = makeIconX("ABC");
export const ABCDX = makeIconX("ABCD");
export const RollX = makeIconX("roll");

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
