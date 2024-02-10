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
          
          <img
            className={styles.outerFrameWithRectangles}
            loading="eager"
            alt=""
            src="/cat12.png"
          />
          <img
            className={styles.multiRectanglesChild}
            loading="eager"
            alt=""
            src="/cat1.png"
          />

          <img
            className={styles.outerFrameWithRectangles1}
            loading="eager"
            alt=""
            src="/cat2.png"
          />

          <img
            className={styles.outerFrameWithRectangles2}
            loading="eager"
            alt=""
            src="/cat3.png"
          />
          
          <img
            className={styles.multiRectanglesItem}
            loading="eager"
            alt=""
            src="/cat4.png"
          />
          <img
            className={styles.multiRectanglesInner}
            loading="eager"
            alt=""
            src="/cat5.png"
          />
          <img
            className={styles.rectangleIcon}
            loading="eager"
            alt=""
            src="/cat6.png"
          />
          <img
            className={styles.multiRectanglesChild1}
            loading="eager"
            alt=""
            src="/cat7.png"
          />
          <img
            className={styles.multiRectanglesChild2}
            loading="eager"
            alt=""
            src="/cat8.png"
          />
             <img
            className={styles.outerFrameWithRectangles3}
            loading="eager"
            alt=""
            src="/cat9.png"
          />
              <img
            className={styles.outerFrameWithRectangles4}
            loading="eager"
            alt=""
            src="/cat10.png"
          />
             <img
            className={styles.outerFrameWithRectangles5}
            loading="eager"
            alt=""
            src="/cat11.png"
          />
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
