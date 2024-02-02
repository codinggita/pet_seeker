import React from 'react';
import { Link } from 'react-router-dom';
import ADOPTBUTTON from './ADOPTBUTTON';
import styles from './PersonalJourneyFrame.module.css';

const PersonalJourneyFrame = () => {
  return (
    <section className={styles.personalJourneyFrame}>
      <div className={styles.articleFrame}>
        <div className={styles.catsArticleFrame}>
          <Link to="/adopt-form" className={styles.linkStyle}>
            <ADOPTBUTTON
              rEHOME="ADOPT"
              propBoxShadow="-4px 4px 0px #7b61ff"
              propWidth="311px"
              propFlex="unset"
              propFlex1="1"
            />
          </Link>
          <div className={styles.contactUsFrame}>
            <Link to="/donate" className={styles.linkStyle}>
              <ADOPTBUTTON
                rEHOME="DONATE"
                propBoxShadow="-4px 4px 0px #b9a2f3"
                propWidth="unset"
                propFlex="1"
                propFlex1="1"
              />
            </Link>
            <div className={styles.contactUsFrameChild} />
          </div>
          <Link to="/rehome" className={styles.linkStyle}>
            <ADOPTBUTTON
              rEHOME="REHOME"
              propBoxShadow="-4px 4px 0px #b9a2f3"
            />
          </Link>
        </div>
      </div>
      <div className={styles.fAQsFrame}>
        <div className={styles.allAboutCatsFrame}>
          <div className={styles.personalJourney}>PERSONAL JOURNEY .....</div>
        </div>
        <div className={styles.video}>
          <div>
            {/* First YouTube video iframe */}
            <iframe
              className='gitHubInstagramCircleFaceb1'
              title="Video 1"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8DQ8VwS6NyY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            {/* Second YouTube video iframe */}
            <iframe 
              className='gitHubInstagramCircleFaceb'
              title="Video 2"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/StAzSO75FXg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalJourneyFrame;



