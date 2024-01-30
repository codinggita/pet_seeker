import TypeSimpleStateDefault2 from "./TypeSimpleStateDefault2";
import TypeSimpleStateError2 from "./TypeSimpleStateError2";
import TypeRequiredStateDefault3 from "./TypeRequiredStateDefault3";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ prop }) => {
  return (
    <div className={styles.typesimpleStatedefaultParent}>
      <TypeSimpleStateDefault2 />
      <TypeSimpleStateError2 />
      <TypeRequiredStateDefault3 />
    </div>
  );
};

export default FrameComponent3;
