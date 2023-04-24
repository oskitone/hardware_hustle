export default function Icon({ id, prefix, suffix }) {
  const className = {
    money: "bi-currency-dollar",
    time: "bi-clock",
    A: "bi-bezier2",
    B: "bi-box-seam",
    C: "bi-hdd-rack",
    D: "bi-battery-half",
    AB: "bi-motherboard",
    ABC: "bi-boombox",
    ABCD: "bi-truck-front",
  }[id];

  return (
    <span className="icon">
      {prefix}

      {/* Time icon needs a little breathing room */}
      {prefix && id == "time" && " "}

      <i className={`bi ${className}`}></i>

      {suffix && id == "time" && " "}

      {suffix}
    </span>
  );
}
