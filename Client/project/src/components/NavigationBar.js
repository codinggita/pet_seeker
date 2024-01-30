import styles from "./NavigationBar.module.css";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className={styles.navigationBar}>
      <div className={styles.rectangleGroupA}>
        <div className={styles.rectangleGroupB}>
          <h3 className={styles.petseekers}>PETSEEKERS</h3>
          <div className={styles.button23}>
            <div className={styles.loginButton}>
              <div className={styles.takeAQuiz}>Take a Quiz</div>
            </div>
            <div className={styles.rectangleVector} />
          </div>
        </div>
      </div>
      <div className={styles.componentFRAMEC}>


        
          <div className={styles.button24}>
        <Link to="/login-signup" className={styles.loginbutton}>
          Login / Sign Up
        </Link>



          <button className={styles.magnifyingGlassIcon}>
            <div className={styles.magnifyingGlassIconChild} />
            <img className={styles.icons8481} alt="" src="/icons848-1@2x.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
