import styles from "./Low.module.css";

const low = () => {
  return (
    <div className={styles.main}>
      <div>
        <img src="gig.png" alt="" />
      </div>
      <div className={styles.low}>Company</div>
      <div className={styles.low}>Experience</div>
      <div className={styles.low}>Terms</div>
      <div className={styles.low}>Connect With Us</div>
    </div>
  );
};
export default low;
