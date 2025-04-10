import React from "react";
import "./AddOns.css";
import adons from "../../Assets/images/adons.jpg";

const AddOns = () => {
  // const adons = adons;
  const addOnsData = [
    {
      title: "Pre book 6€ Prime",
      highlight: "6€ Prime",
      price: "Starting at ₹899",
      description: "Seat, snack combo and fast forward",
    },
    {
      title: "Pre-paid excess baggage",
      price: "Starting at ₹1515",
      description: "Pieces baggage and additional piece",
    },
    {
      title: "Pre book seat",
      price: "Starting ₹150",
      description: "Window, aisle or seat with extra legroom",
    },
  ];

  return (
    <div className="add-ons-container">
      {/* Centered Banner Image with overlay content */}
      <div className="banner-wrapper">
        <div className="banner-overlay-container">
          <img
            // src={adons}
            src="https://www.goindigo.in/content/dam/s6web/in/en/assets/homepage/new_banners/Banner_above_footer.png"
            alt="Indigo Airlines Banner"
            className="banner-image"
          />
          <div className="overlay-content">
            <div className="terms-conditions">T&amp;C Apply</div>
            <div className="addons-header-2">
              <h2> Add more add-ons </h2>
              <h2>to your journey</h2>
            </div>
            {/* <h2 className="addons-header">Add more add-ons to your journey</h2> */}
          </div>
        </div>
      </div>

      {/* Cards positioned to overlay the image */}
      <div className="cards-container">
        <div className="addons-grid">
          {addOnsData.map((addOn, index) => (
            <div key={index} className="addon-card">
              <div className="addon-content">
                <div className="addon-title">
                  {addOn.title.includes(addOn.highlight) ? (
                    <>
                      {addOn.title.split(addOn.highlight)[0]}
                      <span className="highlight">{addOn.highlight}</span>
                      {addOn.title.split(addOn.highlight)[1]}
                    </>
                  ) : (
                    addOn.title
                  )}
                </div>
                <div className="addon-price">{addOn.price}</div>
              </div>
              <div className="addon-description">{addOn.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOns;
