import LineInput from "components/line-input";

import styles from "@/styles/Scoresheet.module.css";

function Scoresheet({ count }) {
  return (
    <div className={styles.scoresheet}>
      <h1>Scoresheet</h1>

      {[...Array(count)].map((x, i) => (
        <div className={styles.entry} key={i}>
          <LineInput title={"Name/Date"} />
          <LineInput title={"Score"} />
        </div>
      ))}
    </div>
  );
}

Scoresheet.defaultProps = {
  count: 28,
};

export default Scoresheet;
