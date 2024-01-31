import styles from "./TypeSimpleStateError.module.css";

const TypeSimpleStateError = () => {
  return (
    <div className={styles.typesimpleStateerror}>
      <div className={styles.selectSimpleError}>
        <div className={styles.div}>YOUR EMAIL</div>
        <div className={styles.textBlock}>
          <input className={styles.text} placeholder="Text" type="text" />
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

export default TypeSimpleStateError;
