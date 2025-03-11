"use client";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Low from "./components/Low/Low";
import Simple from "./components/Simple/Simple";
import Footer from "./components/Footer/Footer";

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
              <li>Ghana Route</li>
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
      <Hero />
      <Low />
      <Simple />
      <Footer />
    </div>
  );
};
export default page;
