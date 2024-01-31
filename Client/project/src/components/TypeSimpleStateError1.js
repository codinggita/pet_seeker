import styles from "./TypeSimpleStateError1.module.css";

const TypeSimpleStateError1 = () => {
  return (
    <div className={styles.typesimpleStateerror}>
      <div className={styles.selectSimpleError}>
        <div className={styles.div}>YOUR EMAIL</div>
        <div className={styles.textBlock}>
          <div className={styles.text}>Text</div>
          <img
            className={styles.mdiArrowDropDownIcon}
            alt=""
            src="/mdi-arrow-drop-down.svg"
          />
        </div>
        <div className={styles.errorMessage}>Error message</div>
      </div>
    </div>
  );
};

export default TypeSimpleStateError1;
