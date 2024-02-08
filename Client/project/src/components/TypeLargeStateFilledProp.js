import React from "react";
import { Link } from "react-router-dom";
import styles from "./TypeLargeStateFilledProp.module.css";

const TypeLargeStateFilledProp = () => {
  return (
    <Link to="/adoptFill-form" className={styles.typelargeStatefilledProp}>
      <div className={styles.buttonLargeFilledEnab}>
        <div className={styles.label}>
          <div className={styles.label1}>ADOPT</div>
        </div>
      </div>
      <div className={styles.frameContainer} />
    </Link>
  );
};

export default TypeLargeStateFilledProp;
