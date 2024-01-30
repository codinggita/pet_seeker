import styles from "./SocialMediaIcons.module.css";

const SocialMediaIcons = () => {
  return (
    <div className={styles.component1}>
      <img
        className={styles.githubIcon}
        loading="eager"
        alt=""
        src="/github@2x.png"
      />
      <img
        className={styles.instagramCircleIcon}
        loading="eager"
        alt=""
        src="/instagram-circle@2x.png"
      />
      <img
        className={styles.facebookIcon}
        loading="eager"
        alt=""
        src="/facebook@2x.png"
      />
      <img
        className={styles.googlePlusIcon}
        loading="eager"
        alt=""
        src="/google-plus@2x.png"
      />
    </div>
  );
};

export default SocialMediaIcons;
