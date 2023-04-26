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

    0: "bi-0-square",
    1: "bi-1-square",
    2: "bi-2-square",
    3: "bi-3-square",
    4: "bi-4-square",
    5: "bi-5-square",
    6: "bi-6-square",
  }[id];

  return (
    <span title={id}>
      {prefix && `${prefix} `}
      <i className={`bi ${className}`}></i>
      {suffix && ` ${suffix}`}
    </span>
  );
}
