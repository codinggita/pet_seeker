import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SizeLargeTypeFilledState1.module.css";

const SizeLargeTypeFilledState1 = () => {
  const navigate = useNavigate();

  const notify = () => {
    alert("Congratulations! You have logged in."); // Replace this with your notification component

    // Redirect to the main page after 3 seconds
    setTimeout(() => {
      navigate("/"); // Replace "/" with your desired route
    }, 3000); // Adjust the delay as needed
  };

  return (
    <div className={styles.sizelargeTypefilledState}>
      <div className={styles.buttonLargeFilledEnab}>
        <button className={styles.label} onClick={notify}>
          <div className={styles.label1}>LOGIN</div>
        </button>
      </div>
    </div>
  );
};

export default SizeLargeTypeFilledState1;




