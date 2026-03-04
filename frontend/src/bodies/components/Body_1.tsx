import styles from '../../styles/Body_1.module.css';
import DogIcon from "../../assets/DogIcon.png";

const Body_1 = () => {
  return (
    <div className={styles.body1}>
      <div className="section-content">
        <div className="bg-rect" aria-hidden />
        <div className="text">
          <h1>Care Comes First</h1>
          <p>
            At Quatro Patas, every interaction is built around responsible pet ownership.<br/>
            We promote safe environments, verified profiles, and partnerships with trusted
            veterinary clinics to ensure that every adoption or transaction prioritizes the
            health and happiness of animals.
          </p>          
        </div>

        <div className="white-rect" aria-hidden />

        <div className={styles.dogFloat}>
          <img src={DogIcon} alt="Dog Icon" className={styles.dogImage} aria-hidden />
        </div>

        <div className={styles.floatingOutlines} aria-hidden>
          <div className={styles.outline1} />
        </div>
      </div>
    </div>
  );
};

export default Body_1;