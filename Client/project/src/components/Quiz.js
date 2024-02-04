import React from 'react';
import { Link } from 'react-router-dom';
import FrameComponent from './FrameComponent';
import styles from './Quiz.module.css';

const Quiz = () => {
  return (
    <div className={styles.quiz}>
      <div className={styles.rectangleBase} />
      <div className={styles.quizChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameTypeLabelParent}>
          <div className={styles.frameTypeLabel}>
            <div className={styles.loginButtonLabel}>
              <div className={styles.button25}>
                <div className={styles.frameWhatType}>
                  {/* Use Link to navigate to the '/answer-to-quiz' route */}
                  <Link to="/" className={styles.loginbutton}>
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
            <img
              className={styles.pawGroup}
              loading="eager"
              alt=""
              src="/paw-group.svg"
            />
          </div>
          {/* Wrap the content of FrameComponent with Link */}
          <Link to="/answer-to-quiz"style={{ textDecoration: 'none' }}>
            <FrameComponent />
          </Link>
        </div>
      </div>
      <img
        className={styles.pawGroup2}
        loading="eager"
        alt=""
        src="/group-3.svg"
      />
    </div>
  );
};

export default Quiz;
