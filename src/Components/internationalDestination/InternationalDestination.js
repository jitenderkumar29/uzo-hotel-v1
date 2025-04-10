import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import thailand from "../../Assets/images/thailand.jpg";
import maldives from "../../Assets/images/maldives.jpg";
import bali from "../../Assets/images/bali.jpg";
import singapore from "../../Assets/images/singapore.jpg";
import dubai from "../../Assets/images/dubai.jpg";
import vietnam from "../../Assets/images/vietnam.jpg";
import srilanka from "../../Assets/images/srilanka.jpg";
import jaipur from "../../Assets/images/jaipur.jpg";
import bangalore from "../../Assets/images/bangalore.jpg";

const InternationalDestination = () => {
  const destinations = [
    {
      name: "Thailand",
      code: "Starting at ₹66400 per person",
      properties: 488,
      image: thailand,
    },
    {
      name: "Maldives",
      code: "Starting at ₹93400 per person",
      properties: 4588,
      image: maldives,
    },
    {
      name: "Bali",
      code: "Starting at ₹106600 per person",
      properties: 4688,
      image: bali,
    },
    {
      name: "Singapore",
      code: "Starting at ₹59500 per person",
      properties: 1766,
      image: singapore,
    },
    {
      name: "Dubai",
      code: "Starting at ₹79600 per person",
      properties: 4728,
      image: dubai,
    },
    {
      name: "Vietnam",
      code: "Starting at ₹17600 per person",
      properties: 1801,
      image: vietnam,
    },
    {
      name: "Srilanka",
      code: "Starting at ₹59600 per person",
      properties: 101,
      image: srilanka,
    },
    // {
    //   name: "Kashmir",
    //   code: "Starting at ₹30600 per person",
    //   properties: 501,
    //   image: jaipur,
    // },
    // {
    //   name: "Bangalore",
    //   code: "Starting at ₹66400 per person",
    //   properties: 1187,
    //   image: bangalore,
    // },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="destinations-slider-container">
        <h2 className="section-title">
          Explore The International Destinations
        </h2>

        <div className="slider-wrapper">
          <button className="nav-button left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="destinations-slider" ref={sliderRef}>
            {destinations.map((destination, index) => (
              <div key={index} className="destination-card">
                <div className="card-image-container">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-image"
                  />
                  <div className="image-overlay"></div>
                  <div className="card-content">
                    <h3 className="city-name">{destination.name}</h3>
                    <p className="city-code">{destination.code}</p>
                    {/* <div className="properties-count">
                      {destination.properties.toLocaleString()} Properties →
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-button right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <style jsx>{`
        // .destinations-slider-container {
        //   max-width: 1300px;
        //   margin: 10px auto;
        //   padding: 0 20px;
        //   font-family: "Segoe UI", sans-serif;
        //   position: relative;
        // }

        // .section-title {
        //   font-size: 28px;
        //   color: #333;
        //   margin-bottom: 10px;
        // }

        // .slider-wrapper {
        //   position: relative;
        //   display: flex;
        //   align-items: center;
        // }

        // .destinations-slider {
        //   display: flex;
        //   overflow-x: auto;
        //   scroll-snap-type: x mandatory;
        //   gap: 20px;
        //   padding: 10px 0;
        //   scrollbar-width: none;
        //   -ms-overflow-style: none;
        // }

        // .destinations-slider::-webkit-scrollbar {
        //   display: none;
        // }

        // .destination-card {
        //   flex: 0 0 280px;
        //   scroll-snap-align: start;
        //   border-radius: 10px;
        //   overflow: hidden;
        //   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        //   transition: transform 0.1s ease;
        //   position: relative;
        // }

        // .destination-card:hover {
        //   transform: translateY(-5px);
        // }

        // .card-image-container {
        //   height: 315px;
        //   position: relative;
        // }

        // .destination-image {
        //   width: 100%;
        //   height: 100%;
        //   object-fit: cover;
        //   transition: transform 0.1s ease;
        // }

        // .image-overlay {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        //   // background: linear-gradient(
        //   //   to bottom,
        //   //   rgba(59, 59, 59, 0.1) 0%,
        //   //   rgba(128, 125, 125, 0.7) 100%
        //   // );
        // }

        // .destination-card:hover .destination-image {
        //   transform: scale(1.05);
        // }

        // .card-content {
        //   position: absolute;
        //   bottom: 0;
        //   left: 0;
        //   padding: 20px;
        //   color: white;
        //   width: 100%;
        //   z-index: 1;
        // }

        // .city-name {
        //   font-size: 20px;
        //   margin: 0 0 5px 0;
        //   color: white;
        // }

        // .city-code {
        //   font-size: 14px;
        //   color: rgba(255, 255, 255);
        //   // color: rgba(255, 255, 255, 0.8);
        //   margin: 0 0 15px 0;
        //   text-transform: uppercase;
        //   letter-spacing: 1px;
        // }

        // .properties-count {
        //   font-size: 16px;
        //   color: var(--dark-white);
        //   // color: #ff5a5f;
        //   font-weight: 600;
        // }

        // .nav-button {
        //   position: absolute;
        //   top: 50%;
        //   transform: translateY(-50%);
        //   // background: white;
        //   border: none;
        //   width: 40px;
        //   height: 40px;
        //   border-radius: 50%;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   box-shadow: 0 2px 10px rgba(0, 0, 0, 0);
        //   cursor: pointer;
        //   z-index: 2;
        //   transition: all 0.3s ease;
        // }

        // .nav-button:hover {
        //   background: var(--logo-color-hover);
        //   // background: #ff5a5f;
        //   color: white;
        // }

        // .left {
        //   left: -20px;
        // }

        // .right {
        //   right: -20px;
        // }

        // @media (max-width: 768px) {
        //   .nav-button {
        //     display: none;
        //   }

        //   .destinations-slider {
        //     padding: 10px 20px;
        //   }

        //   .destination-card {
        //     flex: 0 0 85%;
        //   }
        // }
      `}</style>
    </>
  );
};

export default InternationalDestination;
