import FrameComponent from "./FrameComponent";
import styles from "./Quiz.module.css";

const Quiz = () => {
  return (
    <div className={styles.quiz}>
      <div className={styles.rectangleBase} />
      <div className={styles.quizChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameTypeLabelParent}>
          <div className={styles.frameTypeLabel}>
            <div className={styles.loginButtonLabel}>
              <div className={styles.button25}>
                <div className={styles.frameWhatType}>
                  <h1 className={styles.loginbutton}>Back to Home</h1>
                </div>
              </div>
            </div>
            <img
              className={styles.pawGroup}
              loading="eager"
              alt=""
              src="/paw-group.svg"
            />
          </div>
          <FrameComponent />
        </div>
      </div>
      <img
        className={styles.pawGroup2}
        loading="eager"
        alt=""
        src="/group-3.svg"
      />
    </div>
  );
};

export default Quiz;
