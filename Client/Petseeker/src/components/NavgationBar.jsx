import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={styles.navigationBar}>
      <div className={styles.fRAME}>
        <div className={styles.adoptSection}>
          <h3 className={styles.petseekers}>PETSEEKERS</h3>
          <div className={styles.button23}>
            <div className={styles.pETSEEKERS}>
              <div className={styles.takeAQuiz}>Take a Quiz</div>
            </div>
            <div className={styles.button23Child} />
          </div>
        </div>
      </div>
      <div className={styles.button24Wrapper}>
        <div className={styles.button24}>
          <div className={styles.loginbutton}>Login /Sign Up</div>
          <button className={styles.placeholderLabel}>
            <div className={styles.placeholderLabelChild} />
            <img className={styles.icons8481} alt="" src="/icons848-1@2x.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

