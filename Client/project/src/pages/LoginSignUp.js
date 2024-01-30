import PlaceholderHolder from "../components/PlaceholderHolder";
import TypeSimpleStateDefault from "../components/TypeSimpleStateDefault";
import TypeSimpleStateError from "../components/TypeSimpleStateError";
import TypeRequiredStateDefault1 from "../components/TypeRequiredStateDefault1";
import TypeRequiredStateDefault from "../components/TypeRequiredStateDefault";
import SizeLargeTypeFilledState1 from "../components/SizeLargeTypeFilledState1";
import SizeLargeTypeFilledState from "../components/SizeLargeTypeFilledState";
import styles from "./pages.css";

const LoginSignUp = () => {
  return (
    <div className={styles.loginSignup}>
      <main className={styles.registrationContainer}>
        <PlaceholderHolder
          group2="/group-2.svg"
          button26Padding="var(--padding-xl) 0px 0px"
          frameDivGap="427px" 
          propWidth="131px"
          propPadding="0px var(--padding-5xs)"
        />
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <form className={styles.select}>
              <div className={styles.frameParent}>
                <div className={styles.typesimpleStatedefaultWrapper}>
                  <TypeSimpleStateDefault />
                </div>
                <div className={styles.typesimpleStateerrorWrapper}>
                  <TypeSimpleStateError />
                </div>
                <TypeRequiredStateDefault1 />
                <TypeRequiredStateDefault />
              </div>
              <div className={styles.loginFrame}>
                <div className={styles.groupFrame}>
                  <SizeLargeTypeFilledState1 />
                  <SizeLargeTypeFilledState />
                </div>
              </div>
            </form>
          </div>
          <h1 className={styles.loginSignin}>Login / SignIn</h1>
        </section>
      </main>
      <div className={styles.groupFrame1}>
        <img
          className={styles.groupFrameChild}
          loading="eager"
          alt=""
          src="/group-3.svg"
        />
      </div>
    </div>
  );
};

export default LoginSignUp;