import styles from '../../styles/Body_3.module.css';
import DogWalking from "../../assets/DogWalking.png";

const Body_3 = () => {
  return (
    <div className={styles.body3}>
      <div className="section-content">
        <div className="bg-rect" aria-hidden />
        <div className="text">
          <h1>Responsible Marketplace</h1>
          <p>
            Ethical connections for those who truly care.<br />
            For verified cases of responsible breeding and legal pet sales, our marketplace 
            provides a controlled and secure environment. We strictly limit listings to ensure 
            transparency, safety, and compliance with animal welfare standards.
          </p>          
        </div>

        <div className="white-rect" aria-hidden />
        <div className="text">
            <b>See more</b>
        </div>
        <div className={styles.catFloat}>
          <img src={DogWalking} alt="Dog Walking" className={styles.DogWalking} aria-hidden />
        </div>

        <div className={styles.floatingOutlines} aria-hidden>
          <div className={styles.outline1} />
        </div>
      </div>
    </div>
  );
};

export default Body_3;