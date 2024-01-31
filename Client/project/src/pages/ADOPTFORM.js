import PlaceholderHolder from "../components/PlaceholderHolder";
import FrameComponent3 from "../components/FrameComponent3";
import TypeLargeStateFilledProp from "../components/TypeLargeStateFilledProp";
import styles from "./ADOPTFORM.module.css";

const ADOPTFORM = () => {
  return (
    <div className={styles.adoptForm}>
      <main className={styles.formContainer}>
        <PlaceholderHolder
          group2="/paw-group.svg"
          button26Padding="var(--padding-xs) 0px 0px"
          frameDivGap="445px"
          propWidth="135px"
          propPadding="0px var(--padding-3xs)"
        />
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.selectParent}>
              <div className={styles.select}>
                <FrameComponent3 prop="PET YOU WANT TO ADOPT" />
                <TypeLargeStateFilledProp />
              </div>
              <div className={styles.div}>WHY YOU NEED TO ADOPT</div>
              <div className={styles.textBlock}>
                <div className={styles.tellUsAboutContainer}>
                  <p className={styles.tellUsAbout}>
                    Tell us about your passion for pets
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <p className={styles.blankLine2}>&nbsp;</p>
                  <p className={styles.blankLine3}>&nbsp;</p>
                  <p className={styles.blankLine4}>&nbsp;</p>
                  <p className={styles.blankLine5}>&nbsp;</p>
                  <p className={styles.blankLine6}>&nbsp;</p>
                </div>
                <div className={styles.value}>255 / 225</div>
              </div>
            </div>
          </div>
          <h1 className={styles.adoptAPet}> ADOPT A PET</h1>
        </section>
      </main>
      <img
        className={styles.adoptFormChild}
        loading="eager"
        alt=""
        src="/group-3.svg"
      />
    </div>
  );
};

export default ADOPTFORM;
