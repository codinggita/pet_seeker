import SocialMediaIcons from "./SocialMediaIcons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.adoptAndGetInvolved}>
      <div className={styles.allAboutCatsContainer}>
        <span className={styles.allAboutCatsContainer1}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.allAboutCats}>All about Cats</p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.catsBreeds}>Cats Breeds</p>
          <p className={styles.feedingYourCats}>Feeding your Cats</p>
          <p className={styles.catHealth}>{`Cat Health `}</p>
          <p className={styles.catBehaviour}>Cat Behaviour</p>
          <p className={styles.blankLine2}>&nbsp;</p>
        </span>
      </div>
      <div className={styles.adoptOrGetContainer}>
        <span className={styles.adoptOrGetContainer1}>
          <p className={styles.p}>{` `}</p>
          <p className={styles.adoptOrGet}>Adopt or Get Involved</p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.adoptingPet}>Adopting pet</p>
          <p className={styles.animalSheltersAnd}>
            Animal Shelters and rescues
          </p>
          <p className={styles.blankLine4}>&nbsp;</p>
          <p className={styles.blankLine5}>&nbsp;</p>
        </span>
      </div>
      <div className={styles.frequentlyAskedQuestions}>
        <div className={styles.frequentlyAskedQuestionsChild} />
        <div className={styles.resourcesFaqsContactContainer}>
          <span className={styles.resourcesFaqsContactContainer1}>
            <p className={styles.blankLine6}>&nbsp;</p>
            <p className={styles.resources}>RESOURCES</p>
            <p className={styles.blankLine7}>&nbsp;</p>
            <p className={styles.faqs}>FAQs</p>
            <p className={styles.contactUs}>Contact Us</p>
            <p className={styles.partnership}>Partnership</p>
            <p className={styles.newsCentre}>News Centre</p>
            <p className={styles.forDevelopers}>For Developers</p>
            <p className={styles.aboutUs}>About Us</p>
          </span>
        </div>
        <div className={styles.partnership1}>
          <div className={styles.articlesAboutDogs}>
            <div className={styles.allAboutDogsContainer}>
              <span>
                <p className={styles.blankLine8}>&nbsp;</p>
                <p className={styles.allAboutDogs}>All about Dogs</p>
                <p className={styles.blankLine9}>&nbsp;</p>
                <p className={styles.dogsBreeds}>Dogs Breeds</p>
                <p className={styles.feedingYourDogs}>Feeding your dogs</p>
                <p className={styles.dogHealth}>{`Dog Health `}</p>
                <p className={styles.dogBehaviour}>Dog Behaviour</p>
                <p className={styles.blankLine10}>&nbsp;</p>
              </span>
            </div>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
