import styles from "./DOGSPage.module.css";
import { Link } from 'react-router-dom';
import React from 'react';
import ADOPTFORM from './ADOPTFORM'; // Import your AdoptFormPage component

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
         
          {/* Wrap each image with Link to navigate to AdoptFormPage */}
          <Link to="/adopt-form">
            <img
              className={`${styles.frameStack} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog9.png"
            />
          </Link>

          <Link to="/adopt-form">
            <img
              className={`${styles.mainRectanglesChild} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog1.png"
            />
          </Link>
          
          <Link to="/adopt-form">
            <img
              className={`${styles.frameStack1} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog8.png"
            />
          </Link>

          <Link to="/adopt-form">
            <img
              className={`${styles.frameStack2} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog7.png"
            />
          </Link>

          <Link to="/adopt-form">
            <img
              className={`${styles.mainRectanglesItem} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog2.png"
            />
          </Link>

          <Link to="/adopt-form">
            <img
              className={`${styles.mainRectanglesInner} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog3.png"
            />
          </Link>

          <Link to="/adopt-form">
            <img
              className={`${styles.rectangleIcon} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog4.png"
            />
          </Link>

          <Link to="/adopt-form">
            <img
              className={`${styles.mainRectanglesChild1} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog5.png"
            />
          </Link>

          <Link to="/adopt-form">
            <img
              className={`${styles.mainRectanglesChild2} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog6.png"
            />
          </Link>

          <Link to="/adopt-form">
            <img
              className={`${styles.frameStack3} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog10.png"
            />
          </Link>

          <Link to="/adopt-form">
            <img
              className={`${styles.frameStack4} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog11.png"
            />
          </Link>

          <Link to="/adopt-form">
            <img
              className={`${styles.frameStack5} ${styles.enlargeOnHover}`}
              loading="eager"
              alt=""
              src="/dog12.png"
            />
          </Link>

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
