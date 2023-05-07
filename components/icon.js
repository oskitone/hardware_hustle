export default function Icon({ id, prefix, suffix, className }) {
  const iconClassName = {
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
    <span title={id}>
      {prefix && `${prefix} `}
      <i className={`${className} bi ${iconClassName}`}></i>
      {suffix && ` ${suffix}`}
    </span>
  );
}
