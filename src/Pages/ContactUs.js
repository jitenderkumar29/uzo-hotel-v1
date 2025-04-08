// import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import bannerPng from "../Assets/images/contactus-poster1.png";

const ContactUs = () => {
  return (
    <>
      <Header />

      <section className="ContactUs-content">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row py-4">
            <div className="col-lg">
              <div className="d-flex flex-column gap-3">
                <article>
                  <i className="fas fa-phone-volume"></i>
                  <div className="ms-3">
                    <div className="d-flex flex-column gap-1">
                      <h5>Call Us</h5>
                      <a href="tel:+">1800 - 103 - 4080 (INDIA-Toll Free)</a>
                      <span>Night Support - 7.30 pm to 11.00 pm IST</span>
                    </div>
                  </div>
                </article>

                <article>
                  <i className="fas fa-phone-volume"></i>
                  <div className="ms-3">
                    <div className="d-flex flex-column gap-1">
                      <h5>Call Us</h5>
                      <a href="tel:+">1800 - 103 - 4080 (INDIA-Toll Free)</a>
                      <span>Night Support - 7.30 pm to 11.00 pm IST</span>
                    </div>
                  </div>
                </article>

                <article>
                  <i className="fas fa-phone-volume"></i>
                  <div className="ms-3">
                    <div className="d-flex flex-column gap-1">
                      <h5>Call Us</h5>
                      <a href="tel:+">1800 - 103 - 4080 (INDIA-Toll Free)</a>
                      <span>Night Support - 7.30 pm to 11.00 pm IST</span>
                    </div>
                  </div>
                </article>

                <article>
                  <i className="fas fa-phone-volume"></i>
                  <div className="ms-3">
                    <div className="d-flex flex-column gap-1">
                      <h5>Call Us</h5>
                      <a href="tel:+">1800 - 103 - 4080 (INDIA-Toll Free)</a>
                      <span>Night Support - 7.30 pm to 11.00 pm IST</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-lg align-self-end">
              <img className="h-auto" src={bannerPng} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="ContactUs-branches">
        <div className="container">
          <div className="row gap-3">
            <div className="col-lg d-flex flex-column">
              <h4>Head Office</h4>
              <p>
                Chavara Family Welfare Centre 2nd Floor, Chavara Cultural Centre
                Near St.Joseph's Church Karikkamuri Cross Road, Cochin - 682 011
                Kerala, India
              </p>
              <a href="tel:+">Ph : +91 0000 000 000</a>
              <a href="mailto:">Email : test@testmail.com</a>
            </div>

            <div className="col-lg d-flex flex-column">
              <h4>Head Office</h4>
              <p>
                Chavara Family Welfare Centre 2nd Floor, Chavara Cultural Centre
                Near St.Joseph's Church Karikkamuri Cross Road, Cochin - 682 011
                Kerala, India
              </p>
              <a href="tel:+">Ph : +91 0000 000 000</a>
              <a href="mailto:">Email : test@testmail.com</a>
            </div>

            <div className="col-lg d-flex flex-column">
              <h4>Head Office</h4>
              <p>
                Chavara Family Welfare Centre 2nd Floor, Chavara Cultural Centre
                Near St.Joseph's Church Karikkamuri Cross Road, Cochin - 682 011
                Kerala, India
              </p>
              <a href="tel:+">Ph : +91 0000 000 000</a>
              <a href="mailto:">Email : test@testmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="ContactUs-locators">
        <div className="container">
          <div className="row mb-5">
            <h4>BRANCH LOCATOR</h4>
          </div>
          <div className="row gap-3">
            <div className="col-lg">
              <div className="list">
                {[...Array(10)].map((_, index) => {
                  return (
                    <div key={index} className="locator">
                      New Delhi
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg">
              <div className="maps_embed h-100">
                <iframe
                  title="gmaps"
                  style={{ width: "100%", minHeight: "344px" }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.130996150187!2d77.04397212983275!3d28.621286704493116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d9e11a08cf%3A0xc1a5a267ef8fd396!2sUttam%20Nagar%2C%20Delhi%2C%20110059%2C%20India!5e0!3m2!1sen!2sus!4v1645875145425!5m2!1sen!2sus"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterTop />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactUs;
