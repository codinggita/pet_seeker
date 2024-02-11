import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SizeLargeTypeFilledState1.module.css";

const SizeLargeTypeFilledState1 = () => {
  const [showMessage, setShowMessage] = useState(false);

  const notify = () => {
    setShowMessage(true);

    // Redirect to the main page after 3 seconds
    setTimeout(() => {
      // Use Link component to navigate to the main page
      window.location.href = "/";
    }, 3000); // Adjust the delay as needed
  };

  return (
    <div className={styles.sizelargeTypefilledState}>
      <div className={styles.buttonLargeFilledEnab}>
        {showMessage ? (
          <div className={styles.notification}>
            Congratulations! You have logged in.
          </div>
        ) : (
          <button className={styles.label} onClick={notify}>
            <div className={styles.label1}>LOGIN</div>
          </button>
        )}

        {/* Use Link component to navigate to the main page */}
        {showMessage && <Link to="/">Logged in </Link>}
      </div>
    </div>
  );
};

export default SizeLargeTypeFilledState1;





