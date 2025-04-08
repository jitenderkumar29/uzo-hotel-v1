// import { Link } from "react-router-dom";
import { useState } from "react";
import { useStore } from "../Context/AppContext";

import { currencyFormater, setUrlParam } from "../Tools/helper";

import badgePng from "../Assets/icons/topsellerbadge.png";

import Header from "../Components/_Header";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

const MembershipPlans = () => {
  const {
    navigate,
    membershipData: { membershipPlans, membershipBenefits, nsPrivilegePlans },
  } = useStore();

  const [plan, setPlan] = useState({
    name: Object.keys(membershipPlans)[0],
    duration: membershipPlans[Object.keys(membershipPlans)[0]].packages[0].duration || "",
    addons: [],
  });

  const [privilegePlan, setPrivilegePlan] = useState(nsPrivilegePlans?.packages[0]);

  const changePlanName = (name) => {
    setPlan((prevState) => ({ ...prevState, name }));
  };

  const changePlanDuration = (duration) => {
    setPlan((prevState) => ({ ...prevState, duration }));
  };

  return (
    <>
      <Header />

      <section className="MembershipPlans-intro">
        <div className="container">
          <div className="row gap-3">
            <div className="col-lg">
              <div className="title">
                <h5 className="mb-0">
                  Upgrade now to find your perfect soul mate!
                </h5>
              </div>
            </div>

            <div className="col-5">
              <div className="mb-0 h-100 d-flex flex-column justify-content-evenly">
                <span>
                  Why Paid Member ? <a href="/">Know More</a>
                </span>
                <span>
                  Buy Personalized Services - <a href="/">JS Exclusive</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="MembershipPlans-plans">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center border-bottom">
              <div className="nav-btns d-flex">
                {Object.keys(membershipPlans).map((i, index) => {
                  return (
                    <div
                      key={index}
                      className={`nav-btn${plan.name === i ? " active" : ""}`}
                      onClick={() => changePlanName(i)}
                    >
                      {Object.keys(membershipPlans).length - 1 === index && (
                        <div className="cBadge">
                          <img src={badgePng} alt="" />
                        </div>
                      )}
                      <div className="d-flex gap-2 align-items-baseline">
                        <span className="c-accent">*</span>
                        <h4 className="mb-0">{i}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h4
                className="c-accent pb-2"
                onClick={() => navigate(setUrlParam("modal", "compareplans"))}
                role="button"
              >
                Compare Plans
              </h4>
            </div>
          </div>

          <div className="row gap-3 pt-4">
            <div className="col-lg">
              <div className="d-flex flex-column gap-2 h-100">
                {membershipPlans[plan.name]?.packages.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className={`plan${
                        plan.duration === i.duration ? " active" : ""
                      }`}
                      onClick={() => changePlanDuration(i.duration)}
                    >
                      <div className="text-start">
                        <h6>{i.duration}</h6>
                        {i.contactAccess > 0 && <h6>{i.contactAccess}</h6>}
                      </div>
                      <div className="line"></div>
                      <div className="text-end">
                        <h6 className="opacity-50 text-decoration-line-through">
                          {currencyFormater(i.price)}
                        </h6>
                        <h6>{currencyFormater(i.offerPrice)}</h6>
                      </div>
                      <input
                        type="radio"
                        name="plan"
                        id=""
                        className="form-check-input"
                        onChange={() => {}}
                        checked={plan.duration === i.duration}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-5">
              <div className="inclusions">
                <div className="py-2">
                  <h5>Basic Benefits</h5>
                </div>
                <ul>
                  {membershipBenefits.map((i, index) => {
                    if (membershipPlans[plan.name]?.benefits > index) {
                      return (
                        <li key={index}>
                          <i className="fas fa-check"></i>
                          <span className="ms-2">{i}</span>
                        </li>
                      );
                    }
                    return (
                      <li key={index} className="opacity-50">
                        <i className="fas fa-times"></i>
                        <span className="ms-2 text-decoration-line-through">
                          {i}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="row gap-3 pt-4">
            <div className="col-lg">
              <div className="pb-3">
                <h5>Add-Ons</h5>
              </div>

              <div className="d-flex gap-3">
                <div className="col-lg">
                  <div className="addon">
                    <h6>
                      Add Kundli Milan &nbsp;
                      <i className="fas fa-info-circle"></i>
                    </h6>
                    <ul>
                      <li className="d-flex">
                        <input
                          type="radio"
                          name="addon"
                          id=""
                          className="form-check-input me-2"
                          defaultChecked
                        />
                        <p>3 months for ₹ *****</p>
                      </li>

                      <li className="d-flex">
                        <input
                          type="radio"
                          name="addon"
                          id=""
                          className="form-check-input me-2"
                        />
                        <p>6 months for ₹ *****</p>
                      </li>
                    </ul>
                    <span>
                      <i className="fas fa-percent"></i> &nbsp; Get 10 mins of
                      astrologer consultation for free
                    </span>
                  </div>
                </div>
                {/* <div className="col-lg">
                  <div className="addon">
                    <div className="d-flex">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="form-check-input mt-0 me-2"
                      />
                      <h6>Add Premium Janampatri ₹ *****</h6>
                    </div>
                    <p className="mb-3">
                      Get manglik & kalsarpa dosh analysis & remedies, sadhesati
                      analysis etc.
                    </p>
                    <span>
                      <i className="fas fa-percent"></i> &nbsp; Get 10 mins of
                      astrologer consultation for free
                    </span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-5 text-center align-self-end">
              <button className="w-100 px-4 py-3 fw-normal">
                ₹ ***** | Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="MembershipPlans-service">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center border-bottom">
              <div className="nav-btns d-flex">
                <div className="nav-btn active">
                  <div className="d-flex gap-2 align-items-baseline">
                    <h4>NS Privilege</h4>
                    <span>Personalised service</span>
                  </div>
                </div>
              </div>

              <h4 className="pb-2">Request Callback</h4>
            </div>
          </div>

          <div className="row gap-3 pt-4">
            <div className="col-lg">
              <ul>
                {privilegePlan?.benefits.map((i, index) => {
                  return (
                    <li key={index}>
                      <i className="fas fa-check me-2"></i>
                      {i}
                    </li>
                  );
                })}
              </ul>
              <p>
                Also get benefits of NS Boost and make your number visible to
                free members
              </p>
            </div>

            <div className="col-lg">
              <div className="row">
                {nsPrivilegePlans?.packages.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className={`plan${
                        privilegePlan.duration === i.duration ? " active" : ""
                      }`}
                      onClick={() => setPrivilegePlan(i)}
                    >
                      <h6 className="mb-0">{i.duration}</h6>
                      <p className="mb-0 fs-7 opacity-50 text-decoration-line-through">
                        {currencyFormater(i.price)}
                      </p>
                      <p className="mb-0 fw-bold">
                        {currencyFormater(i.offerPrice)}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="row pt-4">
                <button className="px-4 py-3 fw-normal">
                  ₹ ***** | Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="MembershipPlans-benefits">
        <div className="container">
          <div className="pannel row">
            <h3>Why Paid Membership?</h3>
            <p>
              Upgrade your membership now to find your perfect partner! With a
              paid membership, you can seamlessly connect with your prospects
              and get more responses. Here are some key benefits:
            </p>
          </div>

          <div className="steps row">
            <div className="col-lg">
              <div className="poster">
                <i className="far fa-envelope"></i>
              </div>

              <h6>Send personalized messages to members you like</h6>
            </div>

            <div className="col-lg">
              <div className="poster">
                <i className="far fa-comment-dots"></i>
              </div>

              <h6>Send personalized messages to members you like</h6>
            </div>

            <div className="col-lg">
              <div className="poster">
                <i className="far fa-eye"></i>
              </div>

              <h6>Send personalized messages to members you like</h6>
            </div>

            <div className="col-lg">
              <div className="poster">
                <i className="far fa-address-card"></i>
              </div>

              <h6>Send personalized messages to members you like</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="MembershipPlans-features">
        <div className="container">
          <div className="row gap-4">
            <div className="col-lg">
              <div className="pb-2 mb-3 border-bottom">
                <h5>WHY NOBLESHAADI</h5>
              </div>

              <ul>
                <li>Maximum benefits per month</li>
                <li>Biggest savings per month</li>
                <li>Lowest price per contact</li>
              </ul>
            </div>

            <div className="col-lg">
              <div className="pb-2 mb-3 border-bottom">
                <h5>WHATS NEW</h5>
              </div>

              <ul>
                <li>Real-time profile updates</li>
                <li>Profiles verified by Jeevansathi</li>
                <li>Search got even more personalised</li>
              </ul>
            </div>

            <div className="col-lg">
              <div className="pb-2 mb-3 border-bottom">
                <h5>WE ARE SECURE</h5>
              </div>

              <ul>
                <li>Multiple methods for payment</li>
                <li>Safe & secure payment gateway</li>
                <li>We do not save your card details</li>
              </ul>
            </div>

            <div className="col-lg">
              <div className="pb-2 mb-3 border-bottom">
                <h5>WE ARE SECURE</h5>
              </div>

              <ul>
                <li>Multiple methods for payment</li>
                <li>Safe & secure payment gateway</li>
                <li>We do not save your card details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default MembershipPlans;
