import styles from "./TypeRequiredStateDefault.module.css";

const TypeRequiredStateDefault = () => {
  return (
    <div className={styles.typerequiredStatedefault}>
      <div className={styles.div}>PHONE NUMBER</div>
      <input className={styles.textBlock} placeholder="Text" type="text" />
    </div>
  );
};

export default TypeRequiredStateDefault;
