import AdoptAPetAndFindYourNew from "./AdoptAPetAndFindYourNew";
import styles from "./AdoptPet.module.css";

const AdoptPet = () => {
  return (
    <div className={styles.rectangleShapeD}>
      <header className={styles.frameE}>
        <div className={styles.rectangleF}>
          <img
            className={styles.rectangleFChild}
            loading="eager"
            alt=""
            src="/rectangle-14.svg"
          />
          <div className={styles.adoptButtonGroup}>
            <div className={styles.infoIconsContainer}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="eager"
                  alt=""
                  src="/ellipse-8@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.adoptButton}>
          <AdoptAPetAndFindYourNew />
          <div className={styles.searchbar}>
            <div className={styles.content}>
              <div className={styles.magnifyingglass}>
                <div className={styles.magnifyingglass1}>􀊫</div>
              </div>
              <div className={styles.placeholderLabel}>Search</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AdoptPet;
