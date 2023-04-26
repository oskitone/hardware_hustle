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
  }[id];

  return (
    <span className="icon">
      {prefix && `${prefix} `}
      <i className={`bi ${className}`}></i>
      {suffix && ` ${suffix}`}
    </span>
  );
}