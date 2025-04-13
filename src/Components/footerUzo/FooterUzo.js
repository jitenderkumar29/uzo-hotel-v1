// FooterUzo.jsx
import React, { useState } from "react";
// import footerData from "./footerData";
import "./FooterUzo.css";
import logoPng from "../../Assets/icons/logo25.png";
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
      title: "Download The App",
      storeButtons: [appStore, playStore],
    },
    footerLinks: [
      {
        heading: "About Us",
        links: [
          "Who We Are",
          "Tales Of India",
          "Sustainability",
          "Leadership & Governance",
          // "Careers",
        ],
      },
      {
        heading: "Security & Customer Rights",
        links: [
          "Terms & Conditions",
          "Privacy Notice",
          "Conditions of Carriage",
          "Fees & Charges",
          // "Passenger Rights",
        ],
      },
      {
        heading: "Cargo Services",
        links: [
          "Sitemap",
          "GST Invoice",
          "Domestic Fares",
          "Domestic Tariff",
          // "Download Invoice",
        ],
      },
    ],
    socialIcons: [facebook, x, instagram, linkedin, youtube],
    footerBottomLinks: [
      {
        heading: "",
        links: [
          "Hotels near me",
          "Hotels in Goa",
          "Hotels in Puri",
          "Hotels in Mahabaleshwar",
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
          "Hotels in Visakhapatnam",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Pimpri",
          "Hotels in Patna",
          "Hotels in Vadodara",
          "Hotels in Ludhiana",
          "Hotels in Nashik",
        ],
      },
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
      {
        heading: "",
        links: [
          "Hotels in Greece",
          "Hotels in Luxembourg",
          "Hotels in Thailand",
          "Hotels in Portugal",
          "Hotels in Brazil",
        ],
      },
    ],
    copyright: {
      logo: logoPng,
      text: "Copyright@2025 UZO HOTELS- All Right Reserved",
    },
  };

  return (
    <>
      {/* <FooterStates /> */}
      <footer className="footer-box">
        <div className="footer-container">
          <div className="footer-toggle-buttons">
            <i onClick={() => setShowTop(!showTop)}>
              {showTop ? (
                <FaChevronUp className="text-[#0D0156] text-xs" />
              ) : (
                <>
                  {/* <h2>About Us</h2> */}
                  <FaChevronDown className="text-[#0D0156] text-xs" />
                </>
              )}
            </i>
            {/* <button onClick={() => setShowBottom(!showBottom)}>
          {showBottom ? "Hide Bottom ▲" : "Show Bottom ▼"}
        </button> */}
          </div>

          {showTop && (
            <div className="footer-top">
              <div className="app-section">
                <img
                  src={footerData.appSection.logo}
                  alt="Logo"
                  className="logo"
                />
                <h3 className="app-section-head">
                  {footerData.appSection.title}
                </h3>
                <div className="store-buttons">
                  {footerData.appSection.storeButtons.map((src, idx) => (
                    <img key={idx} src={src} alt={`store-${idx}`} />
                  ))}
                </div>
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
            </div>
          )}

          <div className="footer-toggle-buttons">
            <i onClick={() => setShowBottom(!showBottom)}>
              {showBottom ? (
                <FaChevronUp className="text-[#0D0156] text-xs" />
              ) : (
                <FaChevronDown className="text-[#0D0156] text-xs" />
              )}
              {/* {showBottom ? "Hide Bottom ▲" : "Show Bottom ▼"} */}
            </i>
          </div>
          <h4 className="hotels-in-india">UZO Hotels Domestic</h4>
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

          {/* International hotels List */}
          <div className="footer-toggle-buttons">
            <i onClick={() => setShowInternational(!showInternational)}>
              {showInternational ? (
                <FaChevronUp className="text-[#0D0156] text-xs" />
              ) : (
                <FaChevronDown className="text-[#0D0156] text-xs" />
              )}
              {/* {showBottom ? "Hide Bottom ▲" : "Show Bottom ▼"} */}
            </i>
          </div>
          <h4 className="hotels-in-international">UZO Hotels International</h4>
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
                <li>
                  <i className="fab fa-whatsapp"></i>
                </li>
                <li className="logoFooter">
                  {/* <i className="fas fa-comments"></i> */}
                  <img src={logoPng} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterUzo;
