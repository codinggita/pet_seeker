import NavigationBar from "../components/NavigationBar";
import AdoptPet from "../components/AdoptPet";
import BackgroundFrames from "../components/BackgroundFrames";
import PersonalJourneyFrame from "../components/PersonalJourneyFrame";
import Footer from "../components/Footer";
import styles from "./Mainpage.module.css";
import {Link } from 'react-router-dom';

const Mainpage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.headerBar} />
      <section className={styles.fRAMEA}>
        <NavigationBar />
        <AdoptPet />
      </section>
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

              <Link to = "/dogs-page">
              <img
                className={styles.frameItem}
                loading="eager"
                alt=""
                src="/rectangle-7@2x.png"
              />
              </Link>
              </div>
          
            
              <Link to="/cats-page">
              <img
                className={styles.frameItem}
                loading="eager"
                alt=""
                src="/rectangle-8@2x.png"
              />
            </Link>
            <Link to="/bird-page">
              <img
                className={styles.frameItem}
                loading="eager"
                alt=""
                src="/rectangle-9@2x.png"
              />
            </Link>
             
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
              {/* Link to Forbes pet care tips */}
             
          
              <a
              href="https://www.dailypaws.com/cats-kittens/health-care/ways-to-keep-your-cat-healthy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ width: '550px', height: '625px' }}
                loading="eager"
                alt=""
                src="/rectangle-24@2x.png"
              />
            </a>
            {/* Link to Forbes pet care tips */}
            <a
              href="https://www.forbes.com/advisor/pet-insurance/pet-care/dog-care-tips/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ width: '550px', height: '625px' }}
                loading="eager"
                alt=""
                src="/rectangle-25@2x.png"
              />
            </a>








          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mainpage;
