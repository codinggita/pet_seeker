import React from "react";
import styles from "./SizeLargeTypeFilledState.module.css";

const SizeLargeTypeFilledState = () => {
  const handleSignUp = () => {
    alert("Congratulations! You have successfully signed up.");
    // Add any other logic you need after the alert
  };

  return (
    <div className={styles.sizelargeTypefilledState}>
      <div className={styles.buttonLargeFilledEnab}>
        <button className={styles.label} onClick={handleSignUp}>
          <div className={styles.label1}>SIGN UP</div>
        </button>
      </div>
    </div>
  );
};

export default SizeLargeTypeFilledState;

