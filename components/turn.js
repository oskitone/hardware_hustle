import styles from "@/styles/Turn.module.css";

export default function Turn() {
  return (
    <div class={`${styles.table}`}>
      <div class={`${styles.thead}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.iconCol}`}></div>
          <div class={`${styles.th}`}>Buy</div>
          <div class={`${styles.th}`}>Make</div>
          <div class={`${styles.th}`}>Sell</div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-currency-dollar"></i>
          </div>
          <div class={`${styles.td} ${styles.topLeft} ${styles.bottomLeft}`}>
            2
          </div>
          <div class={`${styles.td}`}></div>
          <div class={`${styles.td} ${styles.topRight} ${styles.bottomRight}`}>
            41
          </div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-bezier2"></i>
          </div>
          <div class={`${styles.td} ${styles.topLeft}`}>5</div>
          <div class={`${styles.td}`}>3</div>
          <div class={`${styles.td} ${styles.topRight}`}></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-box-seam"></i>
          </div>
          <div class={`${styles.td}`}>2</div>
          <div class={`${styles.td}`}>1</div>
          <div class={`${styles.td}`}></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-hdd-rack"></i>
          </div>
          <div class={`${styles.td}`}>3</div>
          <div class={`${styles.td}`}>2</div>
          <div class={`${styles.td}`}></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-battery-half"></i>
          </div>
          <div class={`${styles.td} ${styles.bottomLeft}`}>1</div>
          <div class={`${styles.td}`}>0</div>
          <div class={`${styles.td} ${styles.bottomRight}`}></div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-motherboard"></i>
          </div>
          <div class={`${styles.td} ${styles.topLeft}`}></div>
          <div class={`${styles.td}`}>1</div>
          <div class={`${styles.td} ${styles.topRight}`}>0</div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-boombox"></i>
          </div>
          <div class={`${styles.td}`}>2</div>
          <div class={`${styles.td}`}></div>
          <div class={`${styles.td}`}></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-truck-front"></i>
          </div>
          <div class={`${styles.td} ${styles.bottomLeft}`}>1</div>
          <div class={`${styles.td}`}>2</div>
          <div class={`${styles.td} ${styles.bottomRight}`}>1</div>
        </div>
      </div>
    </div>
  );
}
