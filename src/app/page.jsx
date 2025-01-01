"use client";
import styles from "./page.module.css";
import Footer from "./components/Footer/Footer";

const page = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbar__wrap}>
          <div className={styles.navbar__logo}>
            <img src="gig.png" alt="Gig logo" />
          </div>
          <div className={styles.navbar__middle}>middel</div>
          <div className={styles.navbar__right}>right</div>
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
      <Footer />
    </div>
  );
};
export default page;
