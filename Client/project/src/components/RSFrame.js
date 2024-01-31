import styles from "./RSFrame.module.css";

const RSFrame = () => {
  return (
    <section className={styles.rSFrame}>
      <div className={styles.frameParent}>
        <div className={styles.rs200Parent}>
          <div className={styles.rs200}>
            <span className={styles.rs200Txt}>
              <p className={styles.rs2001}>RS.200</p>
            </span>
          </div>
          <button className={styles.selectlargefilledenabled}>
            <div className={styles.buttonLargeFilledEnab}>
              <div className={styles.label}>
                <div className={styles.label1}>DONATE</div>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.rs500Parent}>
          <div className={styles.rs500}>
            <span className={styles.rs500Txt}>
              <p className={styles.rs5001}>RS.500</p>
            </span>
          </div>
          <div className={styles.selectlargefilledenabledWrapper}>
            <button className={styles.selectlargefilledenabled1}>
              <div className={styles.buttonLargeFilledEnab1}>
                <div className={styles.label2}>
                  <b className={styles.label3}>DONATE</b>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.petDonationButton}>
          <div className={styles.rs1000}>
            <span className={styles.rs1000Txt}>
              <p className={styles.rs10001}>RS.1000</p>
            </span>
          </div>
          <div className={styles.selectLargeFilledEnabled}>
            <button className={styles.selectlargefilledenabled2}>
              <div className={styles.buttonLargeFilledEnab2}>
                <div className={styles.label4}>
                  <div className={styles.label5}>DONATE</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.anotherFrame}>
        <div className={styles.button33}>
          <div className={styles.loginButtonFrame}>
            <div className={styles.loginbutton}>Home</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSFrame;
