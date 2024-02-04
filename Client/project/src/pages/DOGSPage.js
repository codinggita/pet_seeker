import styles from "./DOGSPage.module.css";
import { Link } from 'react-router-dom';
import React from 'react';

const DOGSPage = () => {
  return (
    <div className={styles.dogsPage}>
      <img
        className={styles.dogsContainerIcon}
        loading="eager"
        alt=""
        src="/rectangle-46@2x.png"
      />
      <section className={styles.rectangleGroup}>
        <div className={styles.firstFrame}>
          <div className={styles.buttonFrame}>
            <div className={styles.button31}>
              <div className={styles.findYourPetText}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <div className={styles.loginbutton}>Home</div>
                </Link>
              </div>
            </div>
            <h1 className={styles.findYourPet}>FIND YOUR PET DOG</h1>
          </div>
        </div>
        <div className={styles.mainRectangles}>
          <div className={`${styles.finalRectangle} ${styles.enlargeOnHover}`} />
          <div className={`${styles.frameStack} ${styles.enlargeOnHover}`} />
          <img
            className={`${styles.mainRectanglesChild} ${styles.enlargeOnHover}`}
            loading="eager"
            alt=""
            src="/rectangle-341.svg"
          />
          <div className={`${styles.frameStack1} ${styles.enlargeOnHover}`} />
          <div className={`${styles.frameStack2} ${styles.enlargeOnHover}`} />
          <img
            className={`${styles.mainRectanglesItem} ${styles.enlargeOnHover}`}
            loading="eager"
            alt=""
            src="/rectangle-341.svg"
          />
          <img
            className={`${styles.mainRectanglesInner} ${styles.enlargeOnHover}`}
            loading="eager"
            alt=""
            src="/rectangle-341.svg"
          />
          <img
            className={`${styles.rectangleIcon} ${styles.enlargeOnHover}`}
            loading="eager"
            alt=""
            src="/rectangle-341.svg"
          />
          <img
            className={`${styles.mainRectanglesChild1} ${styles.enlargeOnHover}`}
            loading="eager"
            alt=""
            src="/rectangle-341.svg"
          />
          <img
            className={`${styles.mainRectanglesChild2} ${styles.enlargeOnHover}`}
            loading="eager"
            alt=""
            src="/rectangle-341.svg"
          />
          <div className={`${styles.frameStack3} ${styles.enlargeOnHover}`} />
          <div className={`${styles.frameStack4} ${styles.enlargeOnHover}`} />
          <div className={`${styles.frameStack5} ${styles.enlargeOnHover}`} />
        </div>
      </section>
      <img
        className={styles.dogsContainerIcon1}
        loading="eager"
        alt=""
        src="/rectangle-46@2x.png"
      />
    </div>
  );
};

export default DOGSPage;
