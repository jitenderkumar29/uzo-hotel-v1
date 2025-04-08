// import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import royalBg1Img from "../Assets/images/what-we-do.jpg";

const NsCenter = () => {
  return (
    <>
      <Header />

      <section className="Common-hero">
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="text-center">
              <h1>Getting in touch is easy !</h1>
              <p className="fs-4">
                You can reach out to us at any of the locations below
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="NsCenter-locators">
        <div className="container">
          <div className="row mb-5">
            <h4>BRANCH LOCATOR</h4>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <div className="list">
                {[...Array(5)].map((_) =>
                  [
                    "Ahmedabad",
                    "Banglore",
                    "Bhopal",
                    "Chandigarh",
                    "Kolkata",
                  ].map((j, index) => {
                    return (
                      <div key={index} className="locator">
                        {j}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="maps_embed">
                <iframe
                  title="gmaps"
                  style={{ width: "100%", minHeight: "344px" }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.130996150187!2d77.04397212983275!3d28.621286704493116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d9e11a08cf%3A0xc1a5a267ef8fd396!2sUttam%20Nagar%2C%20Delhi%2C%20110059%2C%20India!5e0!3m2!1sen!2sus!4v1645875145425!5m2!1sen!2sus"
                ></iframe>
              </div>

              <div className="address pb-3 px-2">
                <div className="border-bottom">
                  <h5 className="py-3 mb-0">
                    People Interactive ( i ) Pvt. Ltd ( Corporate Headquaters )
                  </h5>
                </div>

                <div className="mt-4">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>Addess</td>
                        <td>
                          : 2B (2) II Ground Floor, Film Center Building, 68
                          Tardeo Road, Mumbai - 400 034, India
                        </td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>: +91 0000 000 000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

export default NsCenter;
