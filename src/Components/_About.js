import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import hero1Jpg from "../Assets/images/hero1.jpg";
import hero2Jpg from "../Assets/images/hero2.jpg";
import hero3Jpg from "../Assets/images/hero3.jpg";

SwiperCore.use([Autoplay]);

const defaultPropData = {
  name: "NobleShaadi",
  banners: [hero1Jpg, hero2Jpg, hero3Jpg],
};

const About = ({ data = defaultPropData }) => {
  const swiperProps = (delay) => {
    return {
      style: { height: "100%" },
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 3600,
        disableOnInteraction: false,
      },
      onInit: (e) => {
        e.autoplay.stop();
        setTimeout(() => {
          e?.autoplay?.start();
        }, delay);
      },
    };
  };

  return (
    <section className="About">
      <div className="container">
        <div className="row position-relative">
          <div className="col-4">
            <h2>
              We <b>help</b> at every stage
            </h2>
            <p>
              NobleShaadi - India's No. 1 and Most Trusted Matrimony service,
              has helped Millions like you find matches from across different
              communities such as Agarwal, Brahmin, Kalita, Kayastha, Khandayat,
              Khatri, Lingayath, Maratha, Nair, Parsi, Rajput, Reddy.
            </p>
            <br />
            <h3>Why Choose {data?.name} Matrimony</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur.
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
          </div>
          <div className="col-8 row position-absolute end-0 h-100">
            <div className="h-100 col-8 p-0 b">
              <Swiper {...swiperProps(0)}>
                {data?.banners.map((i, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={i} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="h-100 col-4 ps-2 p-0">
              <div className="w-100 mb-2 b">
                <Swiper {...swiperProps(1200)}>
                  {data?.banners.map((i, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img src={i} alt="" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="w-100 mt-2 b">
                <Swiper {...swiperProps(2400)}>
                  {data?.banners.map((i, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img src={i} alt="" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            {/* <img className="h-100 w-75" src={poster} alt="" />
            <img className="h-50 w-25" src={poster} alt="" />
            <img className="h-100 w-25" src={poster} alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
