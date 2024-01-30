import NavigationBar from "../components/NavigationBar";
import AdoptPet from "../components/AdoptPet";
import BackgroundFrames from "../components/BackgroundFrames";
import PersonalJourneyFrame from "../components/PersonalJourneyFrame";
import Footer from "../components/Footer";
import styles from "./pages.css";

const Mainpage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.headerBar} />
      <section className={styles.fRAMEA}>
        <NavigationBar />
        <AdoptPet />
      </section>
      <img
        className={styles.mainpageChild}
        loading="eager"
        alt=""
        src="/rectangle-23.svg"
      />
      <img
        className={styles.mainpageItem}
        loading="eager"
        alt=""
        src="/rectangle-23.svg"
      />
      <div className={styles.headerBar1} />
      <section className={styles.contentFrame}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/personal-journey-frame@2x.png"
          />
          <div className={styles.frameParent}>
            <div className={styles.rectangleWrapper}>
              <img
                className={styles.frameItem}
                loading="eager"
                alt=""
                src="/rectangle-7@2x.png"
              />
            </div>
            <img
              className={styles.frameInner}
              loading="eager"
              alt=""
              src="/rectangle-8@2x.png"
            />
            <img
              className={styles.rectangleIcon}
              loading="eager"
              alt=""
              src="/rectangle-9@2x.png"
            />
          </div>
        </div>
      </section>
      <BackgroundFrames />
      <PersonalJourneyFrame />
      <section className={styles.videoFrame}>
        <div className={styles.articlesFrame}>
          <div className={styles.articlesToTake}>
            {" "}
            Articles To Take Care Of Your Pets
          </div>
          <div className={styles.infoFrame}>
            <img
              className={styles.resourcesSectionIcon}
              loading="eager"
              alt=""
              src="/rectangle-24@2x.png"
            />
            <img
              className={styles.resourcesSectionIcon1}
              loading="eager"
              alt=""
              src="/rectangle-25@2x.png"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mainpage;
