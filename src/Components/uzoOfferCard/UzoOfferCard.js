import React from "react";
import logoPng from "../../Assets/icons/logo21.png";

const UzoOfferCard = () => {
  return (
    <>
      <div style={styles.headline}>
        Find <span style={styles.highlight}>exclusive offers</span> and the best
        deals available for you.
      </div>
      <div style={styles.cardContainer}>
        <div style={styles.slogans}>
          <div style={styles.slogan}>
            <span>Keep</span>
            <br />
            <span>booking</span>
          </div>
          <div style={styles.slogan}>
            <span>Keep</span>
            <br />
            <span>saving</span>
          </div>
          <div style={styles.slogan}>
            <span>Keep</span>
            <br />
            <span>enjoying</span>
          </div>
          <div style={styles.slogan}>
            <div style={styles.logo}>
              <img src={logoPng} style={styles.logoImage} />
            </div>
          </div>
        </div>

        <div style={styles.tsc}>T&amp;C apply.</div>
      </div>
    </>
  );
};

const styles = {
  cardContainer: {
    maxWidth: "1200px",
    margin: "40px auto",
    background: "#fffef7",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(0,0,0,0.05)",
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  headline: {
    maxWidth: "1200px",
    margin: "40px auto",
    fontSize: "1.8rem",
    marginBottom: "40px",
    color: "#2c2c2c",
  },
  highlight: {
    color: "green",
    fontWeight: "600",
  },
  slogans: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  slogan: {
    fontSize: "2rem",
    color: "#008443",
    margin: "20px",
  },
  logo: {
    marginTop: "30px",
  },
  logoImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  tsc: {
    fontSize: "10px",
    color: "#444",
    textAlign: "left",
    marginTop: "20px",
    marginLeft: "20px",
  },
};

export default UzoOfferCard;
