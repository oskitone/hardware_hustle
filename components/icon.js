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
