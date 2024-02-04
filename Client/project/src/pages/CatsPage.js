import styles from "./CatsPage.module.css";
import { Link } from 'react-router-dom';
import React from 'react';


const CatsPage = () => {
  return (
    <div className={styles.catsPage}>
      <img
        className={styles.catContainerIcon}
        loading="eager"
        alt=""
        src="/rectangle-46@2x.png"
      />
      <section className={styles.outerFrame}>
        <div className={styles.innerFrames}>
          <div className={styles.loginButtonFrame}>
            <div className={styles.findYourPetText}>
              <div className={styles.button30}>
                <div className={styles.loginbuttonWrapper}>
                <Link to = "/"style={{ textDecoration: 'none' }}>
                <div className={styles.loginbutton}>Home</div>
                </Link>
                </div>
              </div>
            </div>
            <h1 className={styles.findYourPet}>FIND YOUR PET CAT</h1>
          </div>
        </div>
        <div className={styles.multiRectangles}>
          <div className={styles.rectangleGroup} />
          <div className={styles.outerFrameWithRectangles} />
          <img
            className={styles.multiRectanglesChild}
            loading="eager"
            alt=""
            src="/rectangle-341.svg"
          />
          <div className={styles.outerFrameWithRectangles1} />
          <div className={styles.outerFrameWithRectangles2} />
          <img
            className={styles.multiRectanglesItem}
            loading="eager"
            alt=""
            src="/rectangle-341.svg"
          />
          <img
            className={styles.multiRectanglesInner}
            loading="eager"
            alt=""
            src="/rectangle-34.svg"
          />
          <img
            className={styles.rectangleIcon}
            loading="eager"
            alt=""
            src="/rectangle-34.svg"
          />
          <img
            className={styles.multiRectanglesChild1}
            loading="eager"
            alt=""
            src="/rectangle-34.svg"
          />
          <img
            className={styles.multiRectanglesChild2}
            loading="eager"
            alt=""
            src="/rectangle-341.svg"
          />
          <div className={styles.outerFrameWithRectangles3} />
          <div className={styles.outerFrameWithRectangles4} />
          <div className={styles.outerFrameWithRectangles5} />
        </div>
      </section>
      <img
        className={styles.catContainerIcon1}
        loading="eager"
        alt=""
        src="/rectangle-46@2x.png"
      />
    </div>
  );
};

export default CatsPage;
