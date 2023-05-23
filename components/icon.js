import classnames from "classnames";

import styles from "@/styles/Icon.module.css";

export default function Icon({ id, prefix, suffix, className, inline }) {
  const bootstrapIconClassName = {
    money: "bi-piggy-bank",
    opportunity: "bi-arrow-up-right-circle",

    A: "bi-nut",
    B: "bi-box-seam",
    C: "bi-gear",
    D: "bi-display",

    AB: "bi-speaker",
    ABC: "bi-boombox",
    ABCD: "bi-motherboard",

    roll: "bi-question-square",
  }[id];

  return (
    <span
      className={classnames(className, styles.icon, {
        [styles.inline]: inline,
      })}
      title={id}
    >
      {prefix}
      <i
        className={classnames(
          "bi",
          bootstrapIconClassName,
          styles.bootstrapIcon
        )}
      />
      {suffix}
    </span>
  );
}
