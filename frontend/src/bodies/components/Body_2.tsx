import styles from '../../styles/Body_2.module.css';
import CatIcon from "../../assets/CatIcon.png";

const Body_2 = () => {
  return (
    <div className={styles.body2}>
      <div className="section-content">
        <div className="bg-rect" aria-hidden />
        <div className="text">
          <h1>Adopt with Purpose</h1>
          <p>
            Find a lifelong companion and change a life.<br />
            Our adoption system connects responsible owners with pets in need
            of a loving home. Through a structured and transparent process,
            we ensure every adoption is safe, ethical, and focused on long-term
            commitment.
          </p>
        </div>

        <div className="white-rect" aria-hidden />

        <div className={styles.catFloat}>
          <img src={CatIcon} alt="Cat Icon" className={styles.catImage} aria-hidden />
        </div>

        <div className={styles.floatingOutlines} aria-hidden>
          <div className={styles.outline1} />
        </div>
      </div>
    </div>
  );
};

export default Body_2;