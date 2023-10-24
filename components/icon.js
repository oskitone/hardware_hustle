import classnames from "classnames";

import { htmlEntity } from "common/utils";
import styles from "@/styles/Icon.module.css";

import {
  BsCoin,
  BsArrowUpRightCircle,
  BsNut,
  BsBoxSeam,
  BsSliders,
  BsCpu,
  BsSpeaker,
  BsBoombox,
  BsJoystick,
  BsDice5,
} from "react-icons/bs";

function Icon({ id, prefix, suffix, className, inline, row }) {
  // TODO: tidy
  const bootstrapIcon = {
    money: <BsCoin className={styles.bootstrapIcon} />,
    opportunity: <BsArrowUpRightCircle className={styles.bootstrapIcon} />,
    A: <BsNut className={styles.bootstrapIcon} />,
    B: <BsBoxSeam className={styles.bootstrapIcon} />,
    C: <BsSliders className={styles.bootstrapIcon} />,
    D: <BsCpu className={styles.bootstrapIcon} />,
    AB: <BsSpeaker className={styles.bootstrapIcon} />,
    ABC: <BsBoombox className={styles.bootstrapIcon} />,
    ABCD: <BsJoystick className={styles.bootstrapIcon} />,
    roll: <BsDice5 className={styles.bootstrapIcon} />,
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
      {bootstrapIcon}
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

export default Icon;
