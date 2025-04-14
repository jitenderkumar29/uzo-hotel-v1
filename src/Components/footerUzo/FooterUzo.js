// FooterUzo.jsx
import React, { useState } from "react";
// import footerData from "./footerData";
import "./FooterUzo.css";
import logoPng from "../../Assets/icons/logo22.png";
import playStore from "../../Assets/icons/playStore.png";
import appStore from "../../Assets/icons/appStore.png";
import facebook from "../../Assets/icons/facebook.png";
import x from "../../Assets/icons/x.png";
import instagram from "../../Assets/icons/instagram.png";
import linkedin from "../../Assets/icons/linkedin.png";
import youtube from "../../Assets/icons/youtube.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FooterStates from "../footerStates/FooterStates";

const FooterUzo = () => {
  const [showTop, setShowTop] = useState(true);
  const [showBottom, setShowBottom] = useState(true);
  const [showInternational, setShowInternational] = useState(true);

  const footerData = {
    appSection: {
      logo: logoPng,
      title: "Download Our App",
      storeButtons: [appStore, playStore],
    },
    footerLinks: [
      {
        heading: "Information",
        links: [
          "About Us",
          "Investore Relation",
          "Careers",
          "Blogs",
          "Testimonial",
        ],
      },
    ],
    footerLinks2: [
      {
        heading: "Support",
        links: [
          "Contact Us",
          "FAQ",
          "Sustainability",
          "Medical Assistance",
          "Disclaimer",
        ],
      },
    ],
    footerLinks3: [
      {
        heading: "Services",
        links: [
          "Partner with Us",
          "Magazines",
          "Travel Tips",
          "Cookies Policy",
          "Advertise Your Hotels",
        ],
      },
    ],
    footerLinks4: [
      {
        heading: "Legal",
        links: [
          "Terms & Conditions",
          "Guest Policy",
          "Privacy Policy",
          "Cyber Security",
          "Trus & safety",
        ],
      },
    ],
    socialIcons: [facebook, x, instagram, linkedin, youtube],
    footerBottomLinks: [
      {
        heading: "",
        links: [
          "Hotels Kanpur",
          "Hotels in Goa",
          "Hotels in Puri",
          "Hotels in Ghaziabad",
          "Hotels in Jajpur",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Shimla",
          "Hotels in Manali",
          "Hotels in Udaipur",
          "Hotels in Mussoorie",
          "Hotels in Pondicherry",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Delhi",
          "Hotels in Mumbai",
          "Hotels in Sharjah",
          "Hotels in Kannur",
          "Hotels in Trivandrum",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Surat",
          "Hotels in Ahmedabad",
          "Hotels in Kolkata",
          "Hotels in Jaipur",
          "Hotels in Lucknow",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Nagpur",
          "Hotels in Indore",
          "Hotels in Thane",
          "Hotels in Bhopal",
          "Hotels in Noida",
        ],
      },
      // {
      //   heading: "",
      //   links: [
      //     "Hotels in Pimpri",
      //     "Hotels in Patna",
      //     "Hotels in Vadodara",
      //     "Hotels in Ludhiana",
      //     "Hotels in Nashik",
      //   ],
      // },
    ],
    internationalHotelsList: [
      {
        heading: "",
        links: [
          "Hotels near Usa",
          "Hotels in Switzerland",
          "Hotels in Japan",
          "Hotels in Canada",
          "Hotels in Australia",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Sweden",
          "Hotels in Germany",
          "Hotels in UK",
          "Hotels in New Zealand",
          "Hotels in Denmark",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Norway",
          "Hotels in France",
          "Hotels in Netherlands",
          "Hotels in Singapore",
          "Hotels in Italy",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in China",
          "Hotels in UAE",
          "Hotels in South Korea",
          "Hotels in Spain",
          "Hotels in Finland",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Austria",
          "Hotels in Iceland",
          "Hotels in Belgium",
          "Hotels in Ireland",
          "Hotels in Qatar",
        ],
      },
      // {
      //   heading: "",
      //   links: [
      //     "Hotels in Greece",
      //     "Hotels in Luxembourg",
      //     "Hotels in Thailand",
      //     "Hotels in Portugal",
      //     "Hotels in Brazil",
      //   ],
      // },
    ],
    copyright: {
      logo: logoPng,
      text: "Copyright@2025 UZO HOTELS- All Right Reserved",
    },
  };

  return (
    <>
      <footer className="footer-box">
        <div className="overlap-with-footer"></div>

        <div className="footer-container">
          {showTop && (
            <div className="footer-top">
              <div className="app-section">
                {/* <img
                  src={footerData.appSection.logo}
                  alt="Logo"
                  className="logo-footer"
                />*/}
                <h4 className="app-section-head">
                  {footerData.appSection.title}
                </h4>
                <div className="store-buttons">
                  {footerData.appSection.storeButtons.map((src, idx) => (
                    <img key={idx} src={src} alt={`store-${idx}`} />
                  ))}
                </div>
                <h4>Customer Care No.</h4>
                <h4> 1800 1612 1211</h4>
              </div>

              <div className="footer-links">
                {footerData.footerLinks.map((col, idx) => (
                  <div key={idx} className="column">
                    <h4>{col.heading}</h4>
                    {col.links.map((link, i) => (
                      <a key={i} href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                ))}

                {/* <div className="">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    {footerData.socialIcons.map((icon, i) => (
                      <img key={i} src={icon} alt={`icon-${i}`} />
                    ))}
                  </div>
                </div> */}
              </div>
              <div className="footer-links">
                {footerData.footerLinks2.map((col, idx) => (
                  <div key={idx} className="column">
                    <h4>{col.heading}</h4>
                    {col.links.map((link, i) => (
                      <a key={i} href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              <div className="footer-links">
                {footerData.footerLinks3.map((col, idx) => (
                  <div key={idx} className="column">
                    <h4>{col.heading}</h4>
                    {col.links.map((link, i) => (
                      <a key={i} href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              <div className="footer-links">
                {footerData.footerLinks4.map((col, idx) => (
                  <div key={idx} className="column">
                    <h4>{col.heading}</h4>
                    {col.links.map((link, i) => (
                      <a key={i} href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* <div className="footer-toggle-buttons-1">
            <i onClick={() => setShowTop(!showTop)}>
              {showTop ? (
                <FaChevronUp className="text-[#0D0156] text-xs" />
              ) : (
                <FaChevronDown className="text-[#0D0156] text-xs" />
              )}
            </i>
          </div> */}

          {/* Domestic Hotels */}
          <h4 className="hotels-in-india">Domestic Hotels</h4>
          {showBottom && (
            <div className="footer-bottom">
              {footerData.footerBottomLinks.map((col, idx) => (
                <div key={idx} className="column">
                  {/* <h4>{col.heading}</h4> */}
                  {/* <h4>{col.heading}</h4> */}
                  {col.links.map((link, i) => (
                    <a key={i} href="#">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
          <div className="footer-toggle-buttons-2">
            <i onClick={() => setShowBottom(!showBottom)}>
              {showBottom ? (
                <FaChevronUp className="text-[#0D0156] text-xs" />
              ) : (
                <FaChevronDown className="text-[#0D0156] text-xs" />
              )}
            </i>
          </div>

          {/* International hotels List */}

          <h4 className="hotels-in-international">International Hotels</h4>
          {showInternational && (
            <div className="footer-bottom">
              {footerData.internationalHotelsList.map((col, idx) => (
                <div key={idx} className="column">
                  {col.links.map((link, i) => (
                    <a key={i} href="#">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
          <div className="footer-toggle-buttons-3">
            <i onClick={() => setShowInternational(!showInternational)}>
              {showInternational ? (
                <FaChevronUp className="text-[#0D0156] text-xs" />
              ) : (
                <FaChevronDown className="text-[#0D0156] text-xs" />
              )}
            </i>
          </div>

          <div className="custom-socials">
            <div className="custom-socials-left">
              {/* <img src={footerData.copyright.logo} /> */}
              <span>{footerData.copyright.text}</span>
            </div>
            {/* <div className=""> */}
            <div className="custom-socials-middle">
              <ul>
                <li>
                  {/* <i class="fa-solid fa-phone"> Call Us 1800 23568914</i> */}
                  <div className="">
                    {/* <h4>Follow Us</h4> */}
                    <div className="social-icons">
                      Follow Us:&nbsp;
                      {footerData.socialIcons.map((icon, i) => (
                        <img key={i} src={icon} alt={`icon-${i}`} />
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="custom-socials-right">
              <ul>
                <li className="connect-whatsapp" style={{ textAlign: "right" }}>
                  {/* <div style={{ textAlign: "right" }}> */}
                  {/* <span> */}
                  {/* <i className="fab fa-whatsapp"></i> */}
                  &nbsp; +918956231245
                  {/* </span> */}
                  <br />
                  {/* <span> */}
                  Connect with Us on WhatsApp
                  {/* </span> */}
                  {/* </div> */}
                </li>
                <div class="chat-icon" title="Chat with us">
                  <i class="fas fa-comments"></i>
                </div>
                {/* <li className="logoFooter">
                  <i className="fas fa-comments"></i>
                  <img src={logoPng} />
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterUzo;
