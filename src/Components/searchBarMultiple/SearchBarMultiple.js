import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import "../../App.scss";
import "./SearchBarMultiple.css";
import DatePicker from "react-datepicker";
import HotelSearch from "../hotelSearch/HotelSearch";
import { Link } from "react-router-dom";
import BusSearchBar from "./busSearchBar/BusSearchBar";
import TrainSearchBar from "./trainSearchBar/TrainSearchBar";
import HolidaySearchBar from "./holidaySearchBar/HolidaySearchBar";
import CabSearchBar from "./cabSearchBar/CabSearchBar";
import HeroGallary from "../heroGallary/HeroGallary";
import FlightsSearchBar from "./flightsSearchBar/FlightsSearchBar";

const SearchBarMultiple = ({ searchMode }) => {
  const [activeTab, setActiveTab] = useState("Flights");
  const [tripType, setTripType] = useState("one-way");
  const [departure, setDeparture] = useState("New Delhi");
  const [destination, setDestination] = useState("Mumbai");
  const [departureDate, setDepartureDate] = useState(() => new Date());
  const [returnDate, setReturnDate] = useState(() => new Date());
  const [specialOption, setSpecialOption] = useState("regular");
  const [nonStop, setNonStop] = useState(true);
  const [travellers, setTravellers] = useState(1);
  const [travellersChild, setTravellersChild] = useState(1);
  const [travellersInfant, setTravellersInfant] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");
  const [showTravellerModal, setShowTravellerModal] = useState(false);

  useEffect(() => {
    setActiveTab(searchMode);
    console.log("useEffect SearchBarMultiple");
    console.log(searchMode);

    // Runs only once after initial render (like componentDidMount)
  }, [searchMode]);

  const tabs = [
    { icon: "plane", label: "Flights" },
    { icon: "hotel", label: "Hotels" },
    { icon: "bus", label: "Bus" },
    { icon: "train", label: "Trains" },
    { icon: "umbrella-beach", label: "Holidays" },
    { icon: "taxi", label: "Cabs" },
    { icon: "map-marker", label: "Amusement Park" },
    { icon: "calendar", label: "Events" },
  ];

  const specialOptions = [
    { id: "regular", title: "Regular", subtitle: "Regular Fares" },
    { id: "student", title: "Student", subtitle: "Extra Baggage" },
    { id: "armed-forces", title: "Armed Forces", subtitle: "Extra Discount" },
    {
      id: "senior-citizen",
      title: "Senior Citizen",
      subtitle: "Extra Discount",
    },
    {
      id: "Doctors-and-Nurses",
      title: "Doctor and Nurse",
      subtitle: "Extra Discount",
    },
  ];

  const travelClasses = [
    "Economy",
    "Premium Economy",
    "Business",
    "First Class",
  ];

  const swapCities = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = { weekday: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  const getDateParts = (dateString) => {
    if (!dateString) return { day: "", month: "", year: "" };
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "short" }) + "'",
      year: date.getFullYear().toString().slice(-2),
    };
  };

  const handleTravellerChange = (type) => {
    if (type === "increase") {
      setTravellers((prev) => Math.min(prev + 1, 9));
    } else {
      setTravellers((prev) => Math.max(prev - 1, 1));
    }
  };
  const handleTravellerChangeChild = (type) => {
    if (type === "increase") {
      setTravellersChild((prev) => Math.min(prev + 1, 9));
    } else {
      setTravellersChild((prev) => Math.max(prev - 1, 0));
    }
  };
  const handleTravellerChangeInfant = (type) => {
    if (type === "increase") {
      setTravellersInfant((prev) => Math.min(prev + 1, 9));
    } else {
      setTravellersInfant((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleActiveTab = (activeTabSelected) => {
    setActiveTab(activeTabSelected);
    console.log("activeTabSelected");
    console.log(activeTabSelected);
    // console.log(setActiveTab);
  };

  const departureParts = getDateParts(departureDate);
  const returnParts = getDateParts(returnDate);

  return (
    <div className="container-multiple">
      {/* <div className="header">
        <div className="logo">Filefits</div>
        <div className="claim-refund">
          <img src="https://via.placeholder.com/30" alt="Covid Refund" />
          <span>Claim your Covid Refund</span>
          <i className="fas fa-chevron-down down-arrow"></i>
        </div>
      </div> */}
      <div className="container-multiple-header">
        <div className="search-container-mutiple">
          {/* Tabs */}
          <div className="tabs">
            {tabs.map((tab) => (
              <div
                key={tab.label}
                className={`tab ${activeTab === tab.label ? "active" : ""}`}
                onClick={() => handleActiveTab(tab.label)}
                // onClick={() => setActiveTab(tab.label)}
              >
                <i className={`fas fa-${tab.icon} tab-icon`}></i>
                <span>{tab.label}</span>
              </div>
            ))}
          </div>
          {/* <FlightsSearchBar /> */}
          {/* Search Options for Flights */}
          {activeTab === "Flights" && (
            <div>
              <h3 className="search-hotels">Search Flights</h3>
              <FlightsSearchBar />
            </div>
          )}

          {activeTab === "Hotels" && (
            <div>
              <h3 className="search-hotels">Search Hotels</h3>
              <HotelSearch />
            </div>
          )}
          {activeTab === "Bus" && (
            <div>
              <h3 className="search-hotels">Search Bus</h3>
              {/* <p className="search-hotels">Coming Soon...</p>  */}
              <BusSearchBar />
              {/* <HeroGallary /> */}
            </div>
            // <div>
            //   {/* <h3>Search Bus</h3>
            //   <p>Coming Soon...</p> */}
            //   <div className="search-options">
            //     {/* Trip Type */}
            //     {/* <div className="trip-type">
            //       {["one-way", "round-trip", "multi-city"].map((type) => (
            //         <div
            //           className={`trip-option ${
            //             tripType === type ? "one-way" : ""
            //           }`}
            //           key={type}
            //         >
            //           <input
            //             type="radio"
            //             id={type}
            //             name="trip-type"
            //             checked={tripType === type}
            //             onChange={() => setTripType(type)}
            //           />
            //           <label htmlFor={type}>
            //             {type
            //               .replace("-", " ")
            //               .replace(/\b\w/g, (char) => char.toUpperCase())}
            //           </label>
            //         </div>
            //       ))}
            //     </div> */}

            //     {/* Search Fields */}
            //     <div className="search-fields-multiple">
            //       {/* Departure */}
            //       <div className="field-group">
            //         <label className="field-label">Departure From</label>
            //         <div className="field-input">
            //           <input
            //             type="text"
            //             value={departure}
            //             onChange={(e) => setDeparture(e.target.value)}
            //             placeholder="City or Airport"
            //             className="input-field"
            //           />
            //           <div className="field-subtext">
            //             {departure === "New Delhi"
            //               ? "DEL, Indira Gandhi International"
            //               : departure === "Mumbai"
            //               ? "BOM, Chhatrapati International"
            //               : ""}
            //           </div>
            //         </div>
            //         <button className="swap-button" onClick={swapCities}>
            //           <i className="fas fa-exchange-alt"></i>
            //         </button>
            //       </div>

            //       {/* Destination */}
            //       <div className="field-group">
            //         <label className="field-label">Going To</label>
            //         <div className="field-input">
            //           <input
            //             type="text"
            //             value={destination}
            //             onChange={(e) => setDestination(e.target.value)}
            //             placeholder="City or Airport"
            //             className="input-field"
            //           />
            //           <div className="field-subtext">
            //             {destination === "Mumbai"
            //               ? "BOM, Chhatrapati International"
            //               : destination === "New Delhi"
            //               ? "DEL, Indira Gandhi International"
            //               : ""}
            //           </div>
            //         </div>
            //         {/* <button className="swap-button" onClick={swapCities}>
            //       <i className="fas fa-exchange-alt"></i>
            //     </button> */}
            //       </div>

            //       {/* Departure Date */}
            //       <div className="field-group">
            //         <label className="field-label">Departure Date</label>
            //         <div className="field-input date-input">
            //           <DatePicker
            //             selected={departureDate}
            //             onChange={(e) => setDepartureDate(e.target.value)}
            //             dateFormat="dd MMMM yyyy"
            //             // dateFormat="dd MMMM yyyy, EEE"
            //             // dateFormat="yyyy/MM/dd"
            //             // placeholderText="Check In Date"
            //           />
            //           {/* <input
            //         type="date"
            //         value={departureDate}
            //         onChange={(e) => setDepartureDate(e.target.value)}
            //         className="date-picker"
            //         min={new Date().toISOString().split("T")[0]}
            //       /> */}
            //           <div className="date-display">
            //             <div className="date-value">
            //               {/* <span className="date-day">{departureParts.day}</span> */}
            //               {/* <span className="date-month">{departureParts.month}</span> */}
            //               {/* <span className="date-year">{departureParts.year}</span> */}
            //             </div>
            //             <div className="date-weekday">
            //               {formatDate(departureDate)}
            //             </div>
            //           </div>
            //         </div>
            //       </div>

            //       {/* Travellers & Class */}
            //       {/* <div className="field-group"> */}

            //       {/* Search Button */}
            //       <div className="field-group search-button-container">
            //         <button className="search-button-multiple">Search</button>
            //       </div>
            //     </div>

            //     {/* Special Options */}
            //   </div>
            // </div>
          )}
          {activeTab === "Trains" && (
            <div>
              <h3 className="search-hotels">Search Trains</h3>
              {/* <p className="search-hotels">Coming Soon...</p> */}
              <TrainSearchBar />
            </div>
          )}
          {activeTab === "Holidays" && (
            <div>
              <h3 className="search-hotels">Search Holidays</h3>
              {/* <p className="search-hotels">Coming Soon...</p> */}
              <HolidaySearchBar />
            </div>
          )}
          {activeTab === "Cabs" && (
            <div>
              <h3 className="search-hotels">Search Cabs</h3>
              {/* <p className="search-hotels">Coming Soon...</p> */}
              <CabSearchBar />
            </div>
          )}
          {activeTab === "Amusement Park" && (
            <div>
              <h3 className="search-hotels">Search Amusement Park</h3>
              <p className="search-hotels">Coming Soon...</p>
            </div>
          )}
          {activeTab === "Events" && (
            <div>
              <h3 className="search-hotels">Search Events</h3>
              <p className="search-hotels">Coming Soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBarMultiple;
