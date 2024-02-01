import RSFrame from "../components/RSFrame";
import styles from "./Donate.module.css";

const Donate = () => {
  return (
    <div className={styles.donate}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} />
      </section>
      <header className={styles.donateFrameLabel}>
        <div className={styles.donateForA}>DONATE FOR A PET</div>
      </header>
      <RSFrame />
    </div>
  );
};

export default Donate;
