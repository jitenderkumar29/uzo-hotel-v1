import React from "react";
import { Link } from "react-router-dom";

// import logoPng from "../Assets/icons/logo.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="quicklinks row">
          <h4>Discover your premium luxury hotel in 20+ country</h4>
          <section className="col-lg">
            {/* <div className="mb-3 pb-3 pe-3 border-bottom">
              <h4>Help & Support</h4>
            </div> */}
            <ul>
              <li>
                <Link to="/">Hotels in Agra</Link>
              </li>
              {/* <li>
                <Link to="#">Feedback</Link>
              </li> */}
              <li>
                <Link to="/">Hotels in Bareilly</Link>
              </li>
              <li>
                <Link to="/">Hotels in Chennai</Link>
              </li>
              <li>
                <Link to="/">Hotels in Bareilly</Link>
              </li>
              <li>
                <Link to="/">Hotels in Mumbai</Link>
              </li>
              <li>
                <Link to="/">Hotels in Bangalore</Link>
              </li>
            </ul>
          </section>

          <section className="col-lg">
            {/* <div className="mb-3 pb-3 pe-3 border-bottom">
              <h4>Information</h4>
            </div> */}
            <ul>
              <li>
                <Link to="/">Hotels in Delhi</Link>
              </li>
              <li>
                <Link to="/">Hotels in Gurgaon</Link>
              </li>
              <li>
                <Link to="/">Hotels in Goa</Link>
              </li>
              {/* <li>
                <Link to="#">Testimonials</Link>
              </li> */}
              <li>
                <Link to="/">Hotels in Kolkata</Link>
              </li>
              <li>
                <Link to="/">Hotels in Noida</Link>
              </li>
              <li>
                <Link to="/">Hotels in Pune</Link>
              </li>
            </ul>
          </section>

          <section className="col-lg">
            {/* <div className="mb-3 pb-3 pe-3 border-bottom">
              <h4>Services</h4>
            </div> */}
            <ul>
              <li>
                <Link to="/">Hotels in Ghaziabad</Link>
              </li>
              <li>
                <Link to="/">Hotels in Haridwar</Link>
              </li>
              <li>
                <Link to="/">Hotels in Shirdi</Link>
              </li>
              <li>
                <Link to="/">Hotels in Varansi</Link>
              </li>
              <li>
                <Link to="/">Hotels in Jaipur</Link>
              </li>
              <li>
                <Link to="/">Hotels in Sikandrabad</Link>
              </li>
              {/* <li>
                <Link to="#">IOS App</Link>
              </li> */}
            </ul>
          </section>

          <section className="col-lg">
            {/* <div className="mb-3 pb-3 pe-3 border-bottom">
              <h4>Legal & You</h4>
            </div> */}
            <ul>
              <li>
                <Link to="/">Hotels in Gaya</Link>
              </li>
              <li>
                <Link to="/">Hotels in Raipur</Link>
              </li>
              <li>
                <Link to="/">Hotels in Dwarka</Link>
              </li>
              <li>
                <Link to="/">Hotels in Junagadh</Link>
              </li>
              <li>
                <Link to="/">Hotels in Surat</Link>
              </li>
              {/* <li>
                <Link to="/grievance">Grievance</Link>
              </li> */}
              <li>
                <Link to="/">Hotels in Ambala</Link>
              </li>
            </ul>
          </section>

          <section className="col-lg">
            {/* <div className="mb-3 pb-3 pe-3 border-bottom">
              <h4>Legal & You</h4>
            </div> */}
            <ul>
              <li>
                <Link to="/">Hotels in Hisar</Link>
              </li>
              <li>
                <Link to="/">Hotels in Rewari</Link>
              </li>
              <li>
                <Link to="/">Hotels in Sonipat</Link>
              </li>
              <li>
                <Link to="/">Hotels in Mandi</Link>
              </li>
              <li>
                <Link to="/">Hotels in Jammu</Link>
              </li>
              {/* <li>
                <Link to="/grievance">Grievance</Link>
              </li> */}
              <li>
                <Link to="/">Hotels in Amritsar</Link>
              </li>
            </ul>
          </section>
        </div>

        {/* <div className="socials row">
          <section className="col-lg text-start d-flex align-items-center"> */}
        {/* <img src={logoPng} alt="" /> */}
        {/* Uzo @ 2025 All Copyright Reserved */}
        {/* </section> */}

        {/* <section className="col-lg">
            <ul>
              <li className="facebook">
                <i className="fab fa-facebook-f"></i>
              </li>
              <li className="twitter">
                <i className="fab fa-twitter"></i>
              </li>
              <li className="instagram">
                <i className="fab fa-instagram"></i>
              </li>
              <li className="youtube">
                <i className="fab fa-youtube"></i>
              </li>
              <li className="linkedin">
                <i className="fab fa-linkedin-in"></i>
              </li>
            </ul>
          </section> */}
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
