import React from "react";
import { Link } from "react-router-dom";

import couple2Jpg from "../Assets/images/couple2.jpg";

const defaultPropData = {
  title: "",
  list: [
    {
      img: couple2Jpg,
      title: "Lorem, ipsum dolor.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorem vitae quasi.",
    },
  ],
};

const SweetStories = ({ data = defaultPropData }) => {
  return (
    <section className="SweetStories">
      <div className="container">
        <div className="mb-5 text-center">
          <h2>Celebrating Happy {data.title} Families on NobleShaadi</h2>
        </div>

        <div className="custom-grid">
          {[...Array(8)].map((_, index) => {
            return (
              <div className="g-item" key={index}>
                <div className="mask">
                  <div className="front">
                    <img src={couple2Jpg} alt="" />
                  </div>
                  <div className="back">
                    <h5>Lorem, ipsum dolor.</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dicta dolorem vitae quasi.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5">
          <Link to={"/sweet-stories"}>
            <button className="px-4">View More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SweetStories;
