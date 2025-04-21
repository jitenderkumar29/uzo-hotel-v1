import React from "react";
import styles from "./HotelCard.module.css";

const HotelCard = () => {
  return (
    <div className={styles.hotelCard}>
      <div className={styles.cardContent}>
        <div className={styles.left}>
          <img
            className={styles.mainImg}
            src="https://www.ahstatic.com/photos/9470_roskc_01_p_1024x768.jpg"
            alt="Hotel Main"
          />
          <div className={styles.thumbnailList}>
            <img
              src="https://www.ahstatic.com/photos/a248_ho_00_p_2048x1536.jpg"
              alt=""
            />
            <img
              src="https://www.ahstatic.com/photos/a248_ro_01_p_2048x1536.jpg"
              alt=""
            />
            <img
              src="https://www.ahstatic.com/photos/a248_rs_00_p_2048x1536.jpg"
              alt=""
            />
            <img
              src="https://www.ahstatic.com/photos/a248_rs_03_p_2048x1536.jpg"
              alt=""
            />
            <img
              src="https://www.ahstatic.com/photos/a248_ho_05_p_2048x1536.jpg"
              alt=""
            />
            <div className={styles.viewAll}>VIEW ALL</div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.hotelInfo}>
            <div>
              <span className={styles.badge}>5★ · Hotel</span>
              <h2>Pride Plaza Hotel Aerocity New Delhi</h2>
              <p className={styles.location}>
                Aerocity | 4 km drive to Indira Gandhi International Airport
              </p>
              <div className={styles.tags}>
                <span>Gym</span>
                <span>Restaurant</span>
                <span style={{ color: "#0077cc" }}>& more</span>
              </div>
              <div className={styles.labels}>
                <p className={styles.couple}>👫 Couple Friendly</p>
                <p className={styles.breakfast}>✔ Free Cancellation</p>
                <p className={styles.breakfast}>✔ Book @ $0 Available</p>
                <p className={styles.breakfast}>
                  ✔ Breakfast available at extra charges
                </p>
              </div>
            </div>
            <div className={styles.priceBox}>
              <button type="button" className={styles.buttonRoom}>
                Last 1 Room Left
              </button>
              <div>
                3145 Ratings <span className={styles.rating}>4/5</span>
              </div>
              <div className={styles.oldPrice}>₹4,000</div>
              <div className={styles.newPrice}>₹3,600</div>
              <div className={styles.taxes}>+₹432 taxes & fees per night</div>
              <a className={styles.loginMsg} href="#">
                Login now & save more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
