export default function Icon({ id, prefix, suffix }) {
  const className = {
    money: "bi-piggy-bank",
    time: "bi-stopwatch",

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
      <i className={`bi ${className}`}></i>
      {suffix && ` ${suffix}`}
    </span>
  );
}
