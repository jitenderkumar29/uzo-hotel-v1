import React from "react";
import "./GalleryDestination.css";
import mumbaig1 from "../../Assets/images/mumbaig1.jpg";
import phuketg1 from "../../Assets/images/phuketg1.jpg";
import delhiindiagate from "../../Assets/images/delhiindiagate.jpg";
import mumbaitaj from "../../Assets/images/mumbaitaj.jpg";
import goabeach from "../../Assets/images/goabeach.jpg";
import chennai from "../../Assets/images/chennai.jpg";
import noidamall from "../../Assets/images/noidamall.jpg";
import jaipur from "../../Assets/images/jaipur.jpg";
import bangalore from "../../Assets/images/bangalore.jpg";

const GalleryDestination = () => {
  const destinations = [
    {
      id: 1,
      name: "Ho Chi Minh",
      description: "Economical, historical and entertainment centre of Vietnam",
      imageUrl:
        "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_HoChiMinh-1581456751.jpg",
    },
    {
      id: 2,
      name: "Paris",
      description: "The City of Light",
      imageUrl:
        "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Paris-1581458044.jpg",
    },
    {
      id: 3,
      name: "Krabi",
      description: "A quaint destination featuring endless natural beauty",
      imageUrl:
        "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Krabi-1581455438.jpg",
    },
    {
      id: 4,
      name: "Maldives",
      description: "An ultimate luxurious and romantic holiday destination",
      imageUrl:
        "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Maldives-1581454743.jpg",
    },
    {
      id: 5,
      name: "Phuket",
      description: "A tropical paradise boasting of stunning beaches",
      imageUrl:
        "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Phuket-1581457448.jpg",
    },
    {
      id: 6,
      name: "Hyderabad",
      description: "The glorious city of Nizams known for radiant pearls",
      imageUrl:
        "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Hyderabad-1581426329.jpg",
    },
    {
      id: 7,
      name: "Udaipur",
      description: " Crowned as India's most romantic city",
      imageUrl:
        "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Udaipur_1-1581427188.jpg",
    },
    {
      id: 8,
      name: "Ooty",
      description: "Endless natural beauty of the Nilgiris",
      imageUrl:
        "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Ooty-1581430518.jpg",
    },
    {
      id: 9,
      name: "Manali",
      description:
        "Panoramic views of snow-laden mountains and dense deodar trees",
      imageUrl:
        "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Manali-1581428152.jpg",
    },
    // {
    //   id: 9,
    //   name: "Bengaluru",
    //   description: "India's Silicon Valley",
    //   imageUrl: bangalore,
    // },
  ];

  return (
    <div className="container">
      <div>
        <h1>Popular Destinations</h1>
        <p>We have selected some best locations around the world for you.</p>
      </div>
      {/* <div className="header-gallary">
        <h1>Popular Destinations</h1>
        <p className="intro">
          We have selected some best locations around the world for you.
        </p>
      </div> */}

      <hr className="divider" />

      <div className="gallery">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="card-image"
            />
            <div className="card-content">
              <h2>{destination.name}</h2>
              <p className="card-description">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDestination;
