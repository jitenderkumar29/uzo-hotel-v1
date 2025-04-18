import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import "../../App.scss";
import "./CabSearchBar.css";
import DatePicker from "react-datepicker";
import HotelSearch from "../../hotelSearch/HotelSearch";
import { Link } from "react-router-dom";

const CabSearchBar = () => {
  const [activeTab, setActiveTab] = useState("Flights");
  const [tripType, setTripType] = useState("one-way");
  const [cabType, setCabType] = useState("Outstation One-Way");

  const [departure, setDeparture] = useState("Meerut");
  const [destination, setDestination] = useState("Delhi");
  const [departureDate, setDepartureDate] = useState(() => new Date());
  const [departureTime, setDepartureTime] = useState(() => new Date());

  const [returnDate, setReturnDate] = useState(() => new Date());
  const [specialOption, setSpecialOption] = useState("regular");
  const [nonStop, setNonStop] = useState(true);
  const [travellers, setTravellers] = useState(1);
  const [travellersChild, setTravellersChild] = useState(1);
  const [travellersInfant, setTravellersInfant] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");
  const [showTravellerModal, setShowTravellerModal] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toTimeString().slice(0, 5); // "HH:MM"
    setTime(formattedTime);
  }, []);

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const tabs = [
    { icon: "plane", label: "Flights" },
    { icon: "hotel", label: "Hotels" },
    { icon: "bus", label: "Bus" },
    { icon: "train", label: "Trains" },
    { icon: "umbrella-beach", label: "Holidays" },
    { icon: "taxi", label: "Cabs" },
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
    <div className="search-options-cab">
      {/* Trip Type */}
      {/* <div className="trip-type">
                 {["one-way", "round-trip", "multi-city"].map((type) => (
                   <div
                     className={`trip-option ${
                       tripType === type ? "one-way" : ""
                     }`}
                     key={type}
                   >
                     <input
                       type="radio"
                       id={type}
                       name="trip-type"
                       checked={tripType === type}
                       onChange={() => setTripType(type)}
                     />
                     <label htmlFor={type}>
                       {type
                         .replace("-", " ")
                         .replace(/\b\w/g, (char) => char.toUpperCase())}
                     </label>
                   </div>
                 ))}
               </div> */}

      {/* Search Fields */}
      <div className="trip-type">
        {["Outstation One-Way", "Airport Transfers", "Hourly Rentals"].map(
          (type) => (
            <div
              className={`trip-option ${
                cabType === type ? "Outstation One-Way" : ""
              }`}
              key={type}
            >
              <input
                type="radio"
                id={type}
                name="trip-type"
                checked={cabType === type}
                onChange={() => setCabType(type)}
              />
              <label htmlFor={type}>
                {type
                  .replace("-", " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </label>
            </div>
          )
        )}
      </div>
      <div className="search-fields-multiple-cab">
        {/* Departure */}
        <div className="field-group">
          <label className="field-label">Departure From</label>
          <div className="field-input">
            <input
              type="text"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              placeholder="City or Airport"
              className="input-field"
            />
            <div className="field-subtext">
              {departure === "Meerut"
                ? "Meerut Current Place"
                : departure === "Delhi"
                ? "Rajiv Chowk Delhi"
                : ""}
            </div>
          </div>
          <button className="swap-button" onClick={swapCities}>
            <i className="fas fa-exchange-alt"></i>
          </button>
        </div>

        {/* Destination */}
        <div className="field-group">
          <label className="field-label">Going To</label>
          <div className="field-input">
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="City or Airport"
              className="input-field"
            />
            <div className="field-subtext">
              {destination === "Delhi"
                ? "Rajiv Chowk Delhi"
                : destination === "Meerut"
                ? "Meerut Current Place"
                : ""}
            </div>
          </div>
          {/* <button className="swap-button" onClick={swapCities}>
                 <i className="fas fa-exchange-alt"></i>
               </button> */}
        </div>

        {/* Departure Date */}
        <div className="field-group">
          <label className="field-label">Pickup Date</label>
          <div className="field-input date-input">
            <DatePicker
              selected={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              dateFormat="dd MMMM yyyy"
              // dateFormat="dd MMMM yyyy, EEE"
              // dateFormat="yyyy/MM/dd"
              // placeholderText="Check In Date"
            />
            {/* <input
                   type="date"
                   value={departureDate}
                   onChange={(e) => setDepartureDate(e.target.value)}
                   className="date-picker"
                   min={new Date().toISOString().split("T")[0]}
                 /> */}
            <div className="date-display">
              <div className="date-value">
                {/* <span className="date-day">{departureParts.day}</span> */}
                {/* <span className="date-month">{departureParts.month}</span> */}
                {/* <span className="date-year">{departureParts.year}</span> */}
              </div>
              <div className="date-weekday">{formatDate(departureDate)}</div>
            </div>
          </div>
        </div>
        {/* Return Date */}
        <div className="field-group">
          <label className="field-label">Return Date</label>
          <div className="field-input date-input">
            <DatePicker
              selected={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              dateFormat="dd MMMM yyyy"
              // dateFormat="dd MMMM yyyy, EEE"
              // dateFormat="yyyy/MM/dd"
              // placeholderText="Check In Date"
            />
            {/* <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="date-picker"
                  disabled={tripType === "one-way"}
                  min={departureDate || new Date().toISOString().split("T")[0]}
                /> */}
            {returnDate ? (
              <div className="date-display">
                <div className="date-value">
                  {/* <span className="date-day">{returnParts.day}</span>
                      <span className="date-month">{returnParts.month}</span>
                      <span className="date-year">{returnParts.year}</span> */}
                </div>
                <div className="date-weekday">{formatDate(returnDate)}</div>
              </div>
            ) : (
              <div className="return-note">
                Book Round Trip
                <br />
                to save extra
              </div>
            )}
          </div>
        </div>

        {/* Departure time */}
        <div className="field-group">
          <label className="field-label" for="appt">
            Pickup Time
          </label>
          <div className="field-input date-input">
            <input
              type="time"
              id="appt"
              name="appt"
              className="input-field"
              value={time}
              onChange={handleTimeChange}
            />
            {/* <DatePicker
              selected={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="h:mm aa"
            /> */}
            <div className="date-display">
              <div className="date-value"></div>
              <div className="date-weekday">Time Selected</div>
              {/* <div className="date-weekday">{time}</div> */}
            </div>
          </div>
        </div>

        {/* Travellers & Class */}
        {/* <div className="field-group"> */}

        {/* Search Button */}
        <div className="field-group search-button-container">
          <button className="search-button-multiple">Search</button>
        </div>
      </div>

      {/* Special Options */}
    </div>
  );
};

export default CabSearchBar;
