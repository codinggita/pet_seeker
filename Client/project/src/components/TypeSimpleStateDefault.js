import styles from "./TypeSimpleStateDefault.module.css";

const TypeSimpleStateDefault = () => {
  return (
    <div className={styles.typesimpleStatedefault}>
      <div className={styles.div}>YOUR NAME</div>
      <input className={styles.textBlock} placeholder="Text" type="text" />
    </div>
  );
};

export default TypeSimpleStateDefault;
