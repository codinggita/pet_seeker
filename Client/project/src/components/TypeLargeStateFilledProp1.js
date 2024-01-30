import styles from "./TypeLargeStateFilledProp1.module.css";

const TypeLargeStateFilledProp1 = () => {
  return (
    <button className={styles.typelargeStatefilledProp}>
      <div className={styles.buttonLargeFilledEnab}>
        <div className={styles.label}>
          <div className={styles.label1}>REHOME</div>
        </div>
      </div>
      <div className={styles.typelargeStatefilledPropChild} />
    </button>
  );
};

export default TypeLargeStateFilledProp1;
