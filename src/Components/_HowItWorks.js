import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

import htw1Png from "../Assets/images/htw1.png";

const HowItWorks = () => {
  return (
    <section className="HowItWorks">
      <div className="container">
        <div className="pannel row">
          <h2>You're Just 4 Steps Away From A Great Date</h2>
        </div>

        <div className="steps row">
          <article className="col-lg">
            <div className="poster">
              <img src={htw1Png} alt="" />
              <div className="step">
                <span className="fw-bold">Step</span>
                <p>01</p>
              </div>
            </div>
            <h3>Create A Profile</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              numquam sint ipsum iusto perferendis beatae perspiciatis.
            </p>
          </article>

          <article className="col-lg">
            <div className="poster">
              <img src={htw1Png} alt="" />
              <div className="step">
                <span className="fw-bold">Step</span>
                <p>01</p>
              </div>
            </div>
            <h3>Create A Profile</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              numquam sint ipsum iusto perferendis beatae perspiciatis.
            </p>
          </article>

          <article className="col-lg">
            <div className="poster">
              <img src={htw1Png} alt="" />
              <div className="step">
                <span className="fw-bold">Step</span>
                <p>01</p>
              </div>
            </div>
            <h3>Create A Profile</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              numquam sint ipsum iusto perferendis beatae perspiciatis.
            </p>
          </article>

          <article className="col-lg">
            <div className="poster">
              <img src={htw1Png} alt="" />
              <div className="step">
                <span className="fw-bold">Step</span>
                <p>01</p>
              </div>
            </div>
            <h3>Create A Profile</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              numquam sint ipsum iusto perferendis beatae perspiciatis.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
