import styles from "./Hero.module.css";

const hero = () => {
  return (
    <div>
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
      <div className={styles.appvantage}>
        Enjoy GIGM appvantage Move Freely, Do Easily
      </div>

      <div className={styles.light}>
        The lightest digital wallet you will ever own The GIGM digital wallet is
        a seamless way to pay for transactions within our ecosystem. Purchase
        bus tickets, airtime, data and pay for utility bills using the digital
        wallet available only on the mobile app.
      </div>
      <div className={styles.light}>
        The lightest digital wallet you will ever own The GIGM digital wallet is
        a seamless way to pay for transactions within our ecosystem. Purchase
        bus tickets, airtime, data and pay for utility bills using the digital
        wallet available only on the mobile app.
      </div>
      <div className={styles.light}>
        The lightest digital wallet you will ever own The GIGM digital wallet is
        a seamless way to pay for transactions within our ecosystem. Purchase
        bus tickets, airtime, data and pay for utility bills using the digital
        wallet available only on the mobile app.
      </div>

      <div className={styles.heavy}>
        We do heavy liftin Earn easy With GIGM become an enterprise partner
        <div>
          <button>Start earnng</button>
        </div>
      </div>
    </div>
  );
};
export default hero;
