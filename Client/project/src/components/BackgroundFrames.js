import styles from "./BackgroundFrames.module.css";
import { Link } from 'react-router-dom';
import React from 'react';

const BackgroundFrames = () => {
  return (
    <section className={styles.petsNearbyFrame}>
      <div className={styles.petsAvailableForAdoptionNeWrapper}>
        <div className={styles.petsAvailableFor}>
          Pets Available For Adoption Nearby
        </div>
      </div>
      <div className={styles.apiCall}>

        <Link to ="/cats-page">
        <img
          className={styles.petsFrameIcon}
          loading="eager"
          alt=""
          src="/rectangle-16@2x.png"
        />
        </Link>

        <Link to ="/cats-page">
        <img
          className={styles.petsFrameIcon1}
          loading="eager"
          alt=""
          src="/rectangle-17@2x.png"
        />
        </Link>

        <Link to = "/dogs-page">
        <img
          className={styles.petsFrameIcon2}
          loading="eager"
          alt=""
          src="/rectangle-18@2x.png"
        />
       </Link>

        <Link to="/dogs-page">
          <img
          className={styles.petsFrameIcon3}
          loading="eager"
          alt=""
          src="/rectangle-19@2x.png"
        />
        </Link>
        <div className={styles.adoptButton} />
      </div>
    </section>
  );
};

export default BackgroundFrames;
