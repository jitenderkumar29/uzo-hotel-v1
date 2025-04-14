import React from "react";
import styles from "./FooterStates.module.css";

const FooterStates = () => {
  return (
    <>
      <div className={`${styles.container} ${styles.statCardCont}`}>
        <div className={styles.statsWrapper}>
          <div className={`${styles.statCardhead} ${styles.highlight}`}>
            <div>
              <h2>2,200+</h2>
              <br />
              <p>
                Daily <br />
                Flights
              </p>
            </div>
            {/* <div className={styles.icon}>🛫</div> */}
          </div>

          <div className={styles.statCard}>
            <h2>90+</h2>
            <p>
              Domestic <br />
              Destinations
            </p>
          </div>

          <div className={styles.statCard}>
            <h2>40+</h2>
            <p>
              International <br /> Destinations
            </p>
          </div>

          <div className={styles.statCard}>
            <h2>700 Mn+</h2>
            <p>
              Happy <br /> Customers
            </p>
          </div>

          <div className={styles.statCard}>
            <h2>400+</h2>
            <p>
              Fleet <br /> Strong
            </p>
          </div>
        </div>
      </div>
      <div className={styles.overlapWithFooter}>Hello</div>
    </>
  );
};

export default FooterStates;
