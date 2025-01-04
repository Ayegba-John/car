"use client";
import styles from "./page.module.css";
import Low from "./components/Low/Low";

const page = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbar__wrap}>
          <div className={styles.navbar__logo}>
            <img src="gig.png" alt="Gig logo" />
          </div>
          <div>
            <ul className={styles.navbar__middle}>
              <li>Route Price</li>
              <li>Move Freely</li>
              <li>Do Freely</li>
              <li>Suggest Route</li>
              <li></li>
            </ul>
          </div>
          <div className={styles.navbar__right}>
            <button className={styles.btn}>Sign in/Sign out</button>
          </div>
        </div>
      </nav>
      <section className={styles.hero}>
        <div className={styles.hero__wrap}>
          <div className={styles.hero__left}></div>
          <div className={styles.hero__right}></div>
        </div>
      </section>
      <div className={styles.feedback}>
        <div className={styles.feedback__warp}>
          <div className={styles.feedback__top}></div>
          <div className={styles.feedback__buttom}></div>
        </div>
      </div>
      <Low />
    </div>
  );
};
export default page;
