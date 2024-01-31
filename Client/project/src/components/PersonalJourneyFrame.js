import ADOPTBUTTON from "./ADOPTBUTTON";
import styles from "./PersonalJourneyFrame.module.css";

const PersonalJourneyFrame = () => {
  return (
    <section className={styles.personalJourneyFrame}>
      <div className={styles.articleFrame}>
        <div className={styles.catsArticleFrame}>
          <ADOPTBUTTON
            rEHOME=" ADOPT"
            propBoxShadow="-4px 4px 0px #7b61ff"
            propWidth="311px"
            propFlex="unset"
            propFlex1="1"
          />
          <div className={styles.contactUsFrame}>
            <ADOPTBUTTON
              rEHOME="DONATE"
              propBoxShadow="-4px 4px 0px #b9a2f3"
              propWidth="unset"
              propFlex="1"
              propFlex1="1"
            />
            <div className={styles.contactUsFrameChild} />
          </div>
          <ADOPTBUTTON rEHOME="REHOME" propBoxShadow="-4px 4px 0px #b9a2f3" />
        </div>
      </div>
      <div className={styles.fAQsFrame}>
        <div className={styles.allAboutCatsFrame}>
          <div className={styles.personalJourney}> PERSONAL JOURNEY .....</div>
        </div>
        <div className={styles.video}>
          <img
            className={styles.gitHubInstagramCircleFaceb}
            loading="eager"
            alt=""
            src="/rectangle-21@2x.png"
          />
          <img
            className={styles.gitHubInstagramCircleFaceb1}
            alt=""
            src="/rectangle-22-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalJourneyFrame;
