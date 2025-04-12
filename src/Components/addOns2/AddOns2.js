import React from "react";
import "./AddOns2.css";

const AddOns2 = () => {
  return (
    <section className="slider text-white">
      <div className="content">
        <h1>Book hotels on</h1>
        <h1>uzo.com</h1>

        <div className="offer">
          Get up to <strong>25%</strong> off*
        </div>

        <div className="code-box">
          Use code <span className="code">GOSTAY</span>
        </div>

        <div className="features">
          <div className="feature-item">
            <i className="fas fa-hotel"></i>7 lakh+ hotels
            <div className="divider"></div>
            <i className="fas fa-sync-alt"></i>
            Free cancellation
          </div>
          {/* <div className="feature-item">
            <i className="fas fa-sync-alt"></i>
            Free cancellation
          </div> */}
        </div>
      </div>

      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      /> */}
    </section>
  );
};

export default AddOns2;
