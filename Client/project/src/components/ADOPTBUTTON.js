import { useMemo } from "react";
import styles from "./ADOPTBUTTON.module.css";

const ADOPTBUTTON = ({
  rEHOME,
  propBoxShadow,
  propWidth,
  propFlex,
  propFlex1,
}) => {
  const aDOPTBUTTONStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      width: propWidth,
      flex: propFlex,
    };
  }, [propBoxShadow, propWidth, propFlex]);

  const aDPOTStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  return (
    <div className={styles.adoptButton} style={aDOPTBUTTONStyle}>
      <div className={styles.adpot} style={aDPOTStyle}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.rehome}>{rEHOME}</p>
      </div>
    </div>
  );
};

export default ADOPTBUTTON;
