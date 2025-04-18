import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import "../../App.scss";
import "./TrainSearchBar.css";
import DatePicker from "react-datepicker";
import HotelSearch from "../../hotelSearch/HotelSearch";
import { Link } from "react-router-dom";

const TrainSearchBar = () => {
  const [activeTab, setActiveTab] = useState("Flights");
  const [ticketType, setTicketType] = useState("Book Train Tickets");
  const [departure, setDeparture] = useState("Faridabad");
  const [destination, setDestination] = useState("Karnataka");
  const [departureDate, setDepartureDate] = useState(() => new Date());
  const [returnDate, setReturnDate] = useState(() => new Date());
  const [specialOption, setSpecialOption] = useState("regular");
  const [nonStop, setNonStop] = useState(true);
  const [travellers, setTravellers] = useState(1);
  const [travellersChild, setTravellersChild] = useState(1);
  const [travellersInfant, setTravellersInfant] = useState(1);
  const [travelClass, setTravelClass] = useState({
    name: "All Class",
    id: "ALL",
  });
  const [showTravellerModal, setShowTravellerModal] = useState(false);

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

  const travelTrainClasses = [
    { name: "All Class", id: "ALL" },
    { name: "Sleeper Class", id: "SL" },
    { name: "Third AC", id: "3A" },
    { name: "Second AC", id: "2A" },
    { name: "First AC", id: "1A" },
    { name: "Second Seating", id: "2S" },
    { name: "Vistadome AC", id: "EV" },
    { name: "AC Chair Car", id: "CC" },
    { name: "First Class", id: "FC" },
    { name: "Third AC Economy", id: "3E" },
    // { name: "Vistadome ", id: "EV" },
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
    <div className="search-options-train">
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
      <div className="trip-type">
        {["Book Train Tickets", "Check PNR Status", "Live Train Status"].map(
          (type) => (
            <div
              className={`trip-option ${
                ticketType === type ? "Book Train Tickets" : ""
              }`}
              key={type}
            >
              <input
                type="radio"
                id={type}
                name="trip-type"
                checked={ticketType === type}
                onChange={() => setTicketType(type)}
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
      {/* Search Fields */}
      <div className="search-fields-multiple-train">
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
              {departure === "Faridabad"
                ? "Faridabad Railway Station"
                : departure === "Karnataka"
                ? "Karnataka Railway Station"
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
              {destination === "Karnataka"
                ? "Karnataka Railway Station"
                : destination === "Faridabad"
                ? "Faridabad Railway Station"
                : ""}
            </div>
          </div>
          {/* <button className="swap-button" onClick={swapCities}>
                 <i className="fas fa-exchange-alt"></i>
               </button> */}
        </div>

        {/* Departure Date */}
        <div className="field-group">
          <label className="field-label">Departure Date</label>
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

        {/* Travellers & Class */}
        {/* <div className="field-group"> */}
        {/* Travellers & Class */}
        {/* <div className="field-group"> */}
        <div className="field-group traveller-group">
          <label className="field-label">Class</label>
          <div
            className="field-input traveller-input"
            onClick={() => setShowTravellerModal(true)}
          >
            {/* &nbsp; Premium */}
            {/* <div className="traveller-value">Premium</div> */}
            <div className="traveller-value">{travelClass.id}</div>
            <div className="traveller-value">{travelClass.name}</div>
            {/* <div className="field-subtext">{travelClass}</div> */}
            <i className="fas fa-chevron-down traveller-arrow"></i>
          </div>

          {showTravellerModal && (
            <div className="traveller-modal">
              <div className="modal-content">
                <div className="class-options">
                  {travelTrainClasses.map((cls) => (
                    <div
                      key={cls.id}
                      className={`class-option ${
                        travelClass.name === cls.name ? "selected" : ""
                      }`}
                      onClick={() => setTravelClass(cls)}
                    >
                      {cls.name}
                    </div>
                  ))}
                </div>

                <button
                  className="apply-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTravellerModal(false);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Search Button */}
        <div className="field-group search-button-container">
          <button className="search-button-multiple">Search</button>
        </div>
      </div>

      {/* Special Options */}
    </div>
  );
};

export default TrainSearchBar;
