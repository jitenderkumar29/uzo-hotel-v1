import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

import poster from "../Assets/images/app-ui-promo.webp";

const Feature = () => {
  return (
    <section className="Feature">
      <div className="container">
        <div className="row">
          <div className="col-6 align-self-center content">
            <div className="my-4 bb">
              <h2>Download Our App</h2>
            </div>
            <div className="my-4">
              <h4>!! Want To Find Your Match Get Our App Now</h4>
            </div>
            <br />
            <button className="Google-btn">
              <div className="d-flex">
                <svg
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  style={{ fill: "#000000" }}
                >
                  <linearGradient
                    id="jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1"
                    x1="1688.489"
                    x2="1685.469"
                    y1="-883.003"
                    y2="-881.443"
                    gradientTransform="matrix(11.64 0 0 22.55 -19615.32 19904.924)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#047ed6"></stop>
                    <stop offset="1" stopColor="#50e6ff"></stop>
                  </linearGradient>
                  <path
                    fill="url(#jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1)"
                    fillRule="evenodd"
                    d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z"
                    clipRule="evenodd"
                  ></path>
                  <linearGradient
                    id="jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2"
                    x1="1645.286"
                    x2="1642.929"
                    y1="-897.055"
                    y2="-897.055"
                    gradientTransform="matrix(9.145 0 0 7.7 -15001.938 6931.316)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ffda1c"></stop>
                    <stop offset="1" stopColor="#feb705"></stop>
                  </linearGradient>
                  <path
                    fill="url(#jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2)"
                    fillRule="evenodd"
                    d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z"
                    clipRule="evenodd"
                  ></path>
                  <linearGradient
                    id="jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3"
                    x1="1722.978"
                    x2="1720.622"
                    y1="-889.412"
                    y2="-886.355"
                    gradientTransform="matrix(15.02 0 0 11.5775 -25848.943 10324.73)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#d9414f"></stop>
                    <stop offset="1" stopColor="#8c193f"></stop>
                  </linearGradient>
                  <path
                    fill="url(#jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3)"
                    fillRule="evenodd"
                    d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561"
                    clipRule="evenodd"
                  ></path>
                  <linearGradient
                    id="jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4"
                    x1="1721.163"
                    x2="1722.215"
                    y1="-891.39"
                    y2="-890.024"
                    gradientTransform="matrix(15.02 0 0 11.5715 -25848.943 10307.886)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#33c481"></stop>
                    <stop offset="1" stopColor="#61e3a7"></stop>
                  </linearGradient>
                  <path
                    fill="url(#jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4)"
                    fillRule="evenodd"
                    d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="ms-2">
                  <span className="sub">GET IT ON</span>
                  <span>Google Play</span>
                </div>
              </div>
            </button>
            <button className="Apple-btn">
              <div className="d-flex">
                <FontAwesomeIcon icon={faApple} />
                <div className="ms-2">
                  <span className="sub">Download on the</span>
                  <span>App Store</span>
                </div>
              </div>
            </button>
            <div className="mt-5 d-flex justify-content-center">
              <img className="icon" src="" alt="" />
              <div className="ms-2 text-start">
                <div className="d-block">
                  <span>Nobleshaadi® - Trusted Matrimony, NobleShaadi App</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span>10M+ Downloads | Rated 4.1</span>
                  <FontAwesomeIcon icon={faStar} color="#fc0" />
                  <FontAwesomeIcon icon={faStar} color="#fc0" />
                  <FontAwesomeIcon icon={faStar} color="#fc0" />
                  <FontAwesomeIcon icon={faStar} color="#fc0" />
                  <FontAwesomeIcon icon={faStar} color="#cfcfcf" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 poster">
            <img
              style={{ height: "420px", objectFit: "contain" }}
              src={poster}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
