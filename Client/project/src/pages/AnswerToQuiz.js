import React from 'react';
import { Link } from 'react-router-dom';
import FrameComponent2 from '../components/FrameComponent2';
import styles from './AnswerToQuiz.module.css';

const AnswerToQuiz = () => {
  return (
    <div className={styles.answerToQuiz}>
      <section className={styles.rectangleGroup}>
        <div className={styles.rectangleGroupChild} />
        <div className={styles.frame} />
        <div className={styles.frame1} />
        <div className={styles.frame2} />
      </section>
      <header className={styles.basedOnThe}>
        BASED ON THE ANSWER YOU CHOOSE
      </header>
      <section className={styles.answerToQuizInner}>
        <div className={styles.frameParent}>
          <FrameComponent2 />
          <div className={styles.frameContainerButton}>
            <div className={styles.button32}>
              <div className={styles.frameNestedLoginButton}>
                {/* Use Link to navigate to the '/' route */}
                <Link to="/" className={styles.loginbutton}>
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnswerToQuiz;
