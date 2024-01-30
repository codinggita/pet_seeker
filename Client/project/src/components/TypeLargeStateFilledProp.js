import styles from "./TypeLargeStateFilledProp.module.css";

const TypeLargeStateFilledProp = () => {
  return (
    <button className={styles.typelargeStatefilledProp}>
      <div className={styles.buttonLargeFilledEnab}>
        <div className={styles.label}>
          <div className={styles.label1}>ADOPT</div>
        </div>
      </div>
      <div className={styles.frameContainer} />
    </button>
  );
};

export default TypeLargeStateFilledProp;
