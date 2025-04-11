import React from "react";
import "./PrepareToTravel.css";
import logoPng from "../../Assets/icons/logo26.png";
// import logoPng from "../Assets/icons/logo26.png";

const cards = [
  {
    title: "BAGGAGE ESSENTIALS",
    text: "Travel light on worries and heavy on information. Baggage rules decoded.",
    img: "https://airindia.scene7.com/is/image/airindia/baggage-essential-new",
    link: "/in/en/travel-information/baggage-guidelines.html",
    alt: "Baggage Essentials",
  },
  {
    title: "AIRPORT ADVENTURES",
    text: "Turn layovers into mini vacations—insights on terminals, lounges, amenities and more.",
    img: "https://airindia.scene7.com/is/image/airindia/2x_Airport_info",
    link: "/in/en/travel-information/airport-information.html",
    alt: "Airport Adventures",
  },
  {
    title: "BEFORE YOU FLY",
    text: "From visa essentials to medical assistance, everything you need to know.",
    img: "https://airindia.scene7.com/is/image/airindia/2x_Before_you_fly",
    link: "/in/en/travel-information.html",
    alt: "Before You Fly",
  },
];

const PrepareToTravel = () => {
  return (
    <section className="prepare-to-travel">
      <div className="prepare-content">
        <h2>
          Prepare
          <br />
          To Travel
          <br />
          Your Destination
        </h2>
        <p>
          Helpful hints for everything from packing to paperwork, so you are
          fully prepared.
        </p>
      </div>

      {/* <div className="headline">
        Find <span className="highlight">exclusive offers</span> and the best
        deals available for you.
      </div>
      <div className="cardContainer">
        <div className="slogans">
          <div className="slogan">
            <span>Keep</span>
            <br />
            <span>booking</span>
          </div>
          <div className="slogan">
            <span>Keep</span>
            <br />
            <span>saving</span>
          </div>
          <div className="slogan">
            <span>Keep</span>
            <br />
            <span>enjoying</span>
          </div>
          <div className="slogan">
            <div className="logo">
              <img src={logoPng} className="logoImage" />
            </div>
          </div>
        </div>

        <div className="tsc">T&amp;C apply.</div>
      </div> */}

      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="travel-card" key={index}>
            <a href={card.link}>
              <img src={card.img} alt={card.alt} />
            </a>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrepareToTravel;
