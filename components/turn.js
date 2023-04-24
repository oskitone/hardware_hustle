import Icon from "components/icon";

import styles from "@/styles/Turn.module.css";

export default function Turn({ id }) {
  return (
    <div class={`${styles.turn}`}>
      <div class={`${styles.thead}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.id}`}>{id}</div>
          <div class={`${styles.th}`}>Buy</div>
          <div class={`${styles.th}`}>Make</div>
          <div class={`${styles.th}`}>Sell</div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <Icon id="money" />
          </div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topLeft} ${styles.bottomLeft}`}
          ></div>
          <div class={`${styles.td} ${styles.carryover}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topRight} ${styles.bottomRight} ${styles.final}`}
          ></div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <Icon id="time" />
          </div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topLeft} ${styles.bottomLeft}`}
          ></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topRight} ${styles.bottomRight} ${styles.final}`}
          ></div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <Icon id="A" />
          </div>
          <div contentEditable class={`${styles.td} ${styles.topLeft}`}></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topRight} ${styles.final} ${styles.carryover}`}
          ></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <Icon id="B" />
          </div>
          <div contentEditable class={`${styles.td}`}></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.final} ${styles.carryover}`}
          ></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <Icon id="C" />
          </div>
          <div contentEditable class={`${styles.td}`}></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.final} ${styles.carryover}`}
          ></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <Icon id="D" />
          </div>
          <div
            contentEditable
            class={`${styles.td} ${styles.bottomLeft}`}
          ></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.bottomRight} ${styles.final} ${styles.carryover}`}
          ></div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <Icon id="AB" />
          </div>
          <div
            class={`${styles.td} ${styles.topLeft} ${styles.carryover}`}
          ></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topRight} ${styles.final}`}
          ></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <Icon id="ABC" />
          </div>
          <div class={`${styles.td} ${styles.carryover}`}></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div contentEditable class={`${styles.td} ${styles.final}`}></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <Icon id="ABCD" />
          </div>
          <div
            class={`${styles.td} ${styles.bottomLeft} ${styles.carryover}`}
          ></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.bottomRight} ${styles.final}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
