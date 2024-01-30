import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.buttonFrameParent}>
      <div className={styles.buttonFrame}>
        <div className={styles.button29}>
          <div className={styles.textComponent}>
            <div className={styles.loginbutton}>Home</div>
          </div>
        </div>
        <div className={styles.findYourPetBird}>
          <div className={styles.backgroundRectangle} />
        </div>
      </div>
      <img
        className={styles.frameChild}
        loading="eager"
        alt=""
        src="/rectangle-34.svg"
      />
      <img
        className={styles.frameItem}
        loading="eager"
        alt=""
        src="/rectangle-34.svg"
      />
    </div>
  );
};

export default FrameComponent1;
