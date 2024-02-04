import { useMemo } from "react";
import styles from "./PlaceholderHolder.module.css";
import { Link } from "react-router-dom";

const PlaceholderHolder = ({
  group2,
  button26Padding,
  frameDivGap,
  propWidth,
  propPadding,
}) => {
  const placeholderHolderStyle = useMemo(() => {
    return {
      padding: button26Padding,
    };
  }, [button26Padding]);

  const frameDivStyle = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className={styles.placeholderHolder} style={placeholderHolderStyle}>
      <div className={styles.button26Parent} style={frameDivStyle}>
        <div className={styles.button26}>

          {/* Use Link for navigation */}
        <Link to="/"style={{ textDecoration: 'none' }} className={styles.button26}>
          <div className={styles.loginbuttonWrapper}>
            <h3 className={styles.loginbutton}>Back to Home</h3>
          </div>
        </Link>
          



          </div>
        </div>
        <div className={styles.frameWrapper} style={frameDiv1Style}>
          <img
            className={styles.frameChild}
            loading="eager"
            alt=""
            src={group2}
          />
        </div>
      </div>
    
  );
};

export default PlaceholderHolder;
