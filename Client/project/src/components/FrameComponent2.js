import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.textInputWrapper}>
        <div className={styles.textInput}>
          <div className={styles.mostlyAs}>
            <span>
              <p className={styles.mostlyAs1}>Mostly A’s</p>
            </span>
          </div>
          <button className={styles.selectlargefilledenabled}>
            <div className={styles.buttonLargeFilledEnab}>
              <div className={styles.label}>
                <div className={styles.label1}>DOG PERSON</div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.mostlyBsWrapper}>
          <div className={styles.mostlyBs}>
            <span className={styles.mostlyBsTxtContainer}>
              <p className={styles.mostly}>Mostly</p>
              <p className={styles.bs}>B’s</p>
            </span>
          </div>
        </div>
        <div className={styles.instance}>
          <button className={styles.selectlargefilledenabled1}>
            <div className={styles.buttonLargeFilledEnab1}>
              <div className={styles.label2}>
                <div className={styles.label3}>CAT PERSON</div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.enabledFrameC}>
        <div className={styles.mostlyCs}>
          <span>
            <p className={styles.mostly1}>{`Mostly `}</p>
            <p className={styles.cs}>c’s</p>
          </span>
        </div>
        <div className={styles.enabledButtonLabel}>
          <button className={styles.selectlargefilledenabled2}>
            <div className={styles.buttonLargeFilledEnab2}>
              <div className={styles.label4}>
                <div className={styles.label5}>BIRD PERSON</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
