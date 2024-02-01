import PlaceholderHolder from "../components/PlaceholderHolder";
import FrameComponent3 from "../components/FrameComponent3";
import TypeLargeStateFilledProp1 from "../components/TypeLargeStateFilledProp1";
import styles from "./Rehome.module.css";

const Rehome = () => {
  return (
    <div className={styles.rehome}>
      <main className={styles.containerFrame}>
        <PlaceholderHolder
          group2="/group-21.svg"
          button26Padding="var(--padding-mid) 0px 0px"
          frameDivGap="421px"
          propWidth="157px"
          propPadding="0px var(--padding-2xl)"
        />
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.select}>
              <div className={styles.select1}>
                <FrameComponent3 prop="PET YOU WANT TO REHOME" />
                <div className={styles.typelargeStatefilledPropWrapper}>
                  <TypeLargeStateFilledProp1 />
                </div>
              </div>
              <div className={styles.div}>WHY YOU NEED TO REHOME YOUR PET</div>
              <div className={styles.textBlock}>
                <div className={styles.tellUsAboutContainer}>
                  <p className={styles.tellUsAbout}>
                    Tell us about your journey and your need to rehome your pet
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
          <h1 className={styles.rehome1}> REHOME</h1>
        </section>
      </main>
      <div className={styles.rehomeInner}>
        <img
          className={styles.frameInner}
          loading="eager"
          alt=""
          src="/group-2-1.svg"
        />
      </div>
    </div>
  );
};

export default Rehome;
