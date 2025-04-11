import React from "react";
import "./ImageLayouts.css";

const images = {
  layoutA: {
    large: {
      url: "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_HoChiMinh-1581456751.jpg",
      name: "Ho Chi Minh",
      description: "Economical, historical and entertainment centre of Vietnam",
      label: "Large - Left",
    },
    middle: [
      {
        url: "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Paris-1581458044.jpg",
        name: "Paris",
        description: "The City of Light",
        label: "Small Middle 1",
      },
      {
        url: "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Krabi-1581455438.jpg",
        name: "Krabi",
        description: "A quaint destination featuring endless natural beauty",
        label: "Small Middle 2",
      },
    ],
    right: [
      {
        url: "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Maldives-1581454743.jpg",
        name: "Maldives",
        description: "An ultimate luxurious and romantic holiday destination",
        label: "Small Right 1",
      },
      {
        url: "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Phuket-1581457448.jpg",
        name: "Phuket",
        description: "A tropical paradise boasting of stunning beaches",
        label: "Small Right 2",
      },
    ],
  },
  layoutB: {
    left: [
      {
        url: "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Hyderabad-1581426329.jpg",
        name: "Hyderabad",
        description: "The glorious city of Nizams known for radiant pearls",
        label: "Small Left 1",
      },
      {
        url: "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Udaipur_1-1581427188.jpg",
        name: "Udaipur",
        description: " Crowned as India's most romantic city",
        label: "Small Left 2",
      },
    ],
    middle: [
      {
        url: "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Ooty-1581430518.jpg",
        name: "Ooty",
        description: "Endless natural beauty of the Nilgiris",
        label: "Small Middle 1",
      },
      {
        url: "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Manali-1581428152.jpg",
        name: "Manali",
        description:
          "Panoramic views of snow-laden mountains and dense deodar trees",
        label: "Small Middle 2",
      },
    ],
    large: {
      url: "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Amsterdam-1581457941.jpg",
      name: "Amsterdam",
      description: "Venice of the North",
      label: "Large - Right",
    },
  },
};

export default function ImageLayouts() {
  return (
    <div className="container">
      <h1>Popular Holiday Destinations</h1>
      <p>We have selected some best locations around the world for you.</p>
      {/* <h2>Layout A</h2> */}
      <div className="layout">
        <div className="column">
          <div
            className="large-image"
            style={{ backgroundImage: `url(${images.layoutA.large.url})` }}
          >
            <div className="overlay-text">
              {images.layoutA.large.name}
              <p className="overlay-text-desc">
                {images.layoutA.large.description}
              </p>
            </div>
            {/* <div class="overlay-text-desc">
              {images.layoutA.large.description}
            </div> */}
            {/* <div className="caption">{images.layoutA.large.name}</div> */}
            {/* <div className="caption">{images.layoutA.large.label}</div> */}
          </div>
        </div>
        <div className="column">
          {images.layoutA.middle.map((img, index) => (
            <div
              className="small-image"
              key={index}
              style={{ backgroundImage: `url(${img.url})` }}
            >
              {/* <div className="overlay-text">{img.name}</div> */}
              <div className="overlay-text">
                {img.name}
                <p className="overlay-text-desc">{img.description}</p>
              </div>
              {/* <div className="caption">{img.label}</div> */}
            </div>
          ))}
        </div>
        <div className="column">
          {images.layoutA.right.map((img, index) => (
            <div
              className="small-image"
              key={index}
              style={{ backgroundImage: `url(${img.url})` }}
            >
              {/* <div className="overlay-text">{img.name}</div> */}
              <div className="overlay-text">
                {img.name}
                <p className="overlay-text-desc">{img.description}</p>
              </div>
              {/* <div className="caption">{img.label}</div> */}
            </div>
          ))}
        </div>
      </div>

      {/* <h2>Layout B</h2> */}
      <div className="layout">
        <div className="column">
          {images.layoutB.left.map((img, index) => (
            <div
              className="small-image"
              key={index}
              style={{ backgroundImage: `url(${img.url})` }}
            >
              {/* <div className="overlay-text">{img.name}</div> */}
              <div className="overlay-text">
                {img.name}
                <p className="overlay-text-desc">{img.description}</p>
              </div>
              {/* <div className="caption">{img.label}</div> */}
            </div>
          ))}
        </div>
        <div className="column">
          {images.layoutB.middle.map((img, index) => (
            <div
              className="small-image"
              key={index}
              style={{ backgroundImage: `url(${img.url})` }}
            >
              {/* <div className="overlay-text">{img.name}</div> */}
              <div className="overlay-text">
                {img.name}
                <p className="overlay-text-desc">{img.description}</p>
              </div>
              {/* <div className="caption">{img.label}</div> */}
            </div>
          ))}
        </div>
        <div className="column">
          <div
            className="large-image"
            style={{ backgroundImage: `url(${images.layoutB.large.url})` }}
          >
            {/* <div className="overlay-text">{images.layoutB.large.name}</div> */}
            <div className="overlay-text">
              {images.layoutB.large.name}
              <p className="overlay-text-desc">
                {images.layoutB.large.description}
              </p>
            </div>
            {/* <div className="caption">{images.layoutB.large.label}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
