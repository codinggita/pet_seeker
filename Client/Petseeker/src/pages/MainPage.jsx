import NavigationBar from "../components/NavigationBar";
import AdoptPet from "../components/AdoptPet";
import BackgroundFrames from "../components/BackgroundFrames";
import PersonalJourneyFrame from "../components/PersonalJourneyFrame";
import AdoptPageHeader from "../components/AdoptPageHeader";
import styles from "./Mainpage.module.css";

const Mainpage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.navigationBar} />
      <section className={styles.navigationBarParent}>
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
      <div className={styles.navigationBar1} />
      <section className={styles.availablePetsFrame}>
        <div className={styles.adoptButtonInstance}>
          <img
            className={styles.personalJourneyFrame}
            alt=""
            src="/personal-journey-frame@2x.png"
          />
          <div className={styles.videosFrame}>
            <div className={styles.fAQsAndResourcesFrame}>
              <img
                className={styles.footerComponentsFrame}
                loading="eager"
                alt=""
                src="/rectangle-7@2x.png"
              />
            </div>
            <img
              className={styles.articlesFrameIcon}
              loading="eager"
              alt=""
              src="/rectangle-8@2x.png"
            />
            <img
              className={styles.articlesFrameIcon1}
              loading="eager"
              alt=""
              src="/rectangle-9@2x.png"
            />
          </div>
        </div>
      </section>
      <BackgroundFrames />
      <PersonalJourneyFrame />
      <section className={styles.mainpageInner}>
        <div className={styles.articlesToTakeCareOfYourParent}>
          <div className={styles.articlesToTake}>
            {" "}
            Articles To Take Care Of Your Pets
          </div>
          <div className={styles.articleContainerParent}>
            <img
              className={styles.articleContainerIcon}
              loading="eager"
              alt=""
              src="/rectangle-24@2x.png"
            />
            <img
              className={styles.articleContainerIcon1}
              loading="eager"
              alt=""
              src="/rectangle-25@2x.png"
            />
          </div>
        </div>
      </section>
      <AdoptPageHeader />
    </div>
  );
};

export default Mainpage;
