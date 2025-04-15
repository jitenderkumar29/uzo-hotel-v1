import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import "../../App.scss";
import "./SearchBarMultiple.css";
import DatePicker from "react-datepicker";

const SearchBarMultiple = () => {
  const [activeTab, setActiveTab] = useState("Flights");
  const [tripType, setTripType] = useState("one-way");
  const [departure, setDeparture] = useState("New Delhi");
  const [destination, setDestination] = useState("Mumbai");
  const [departureDate, setDepartureDate] = useState(() => new Date());
  const [returnDate, setReturnDate] = useState(() => new Date());
  const [specialOption, setSpecialOption] = useState("regular");
  const [nonStop, setNonStop] = useState(true);
  const [travellers, setTravellers] = useState(1);
  const [travelClass, setTravelClass] = useState("");
  const [showTravellerModal, setShowTravellerModal] = useState(false);

  const tabs = [
    { icon: "plane", label: "Flights" },
    // { icon: "hotel", label: "Hotels" },
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

      <div className="search-container-mutiple">
        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={`tab ${activeTab === tab.label ? "active" : ""}`}
              onClick={() => setActiveTab(tab.label)}
            >
              <i className={`fas fa-${tab.icon} tab-icon`}></i>
              <span>{tab.label}</span>
            </div>
          ))}
        </div>

        {/* Search Options */}
        <div className="search-options">
          {/* Trip Type */}
          <div className="trip-type">
            {["one-way", "round-trip", "multi-city"].map((type) => (
              <div
                className={`trip-option ${tripType === type ? "one-way" : ""}`}
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
          </div>

          {/* Search Fields */}
          <div className="search-fields-multiple">
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
                {/* <div className="field-subtext">
                  {departure === "New Delhi"
                    ? "DEL, Indira Gandhi International"
                    : departure === "Mumbai"
                    ? "BOM, Chhatrapati Shivaji International"
                    : ""}
                </div> */}
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
                {/* <div className="field-subtext">
                  {destination === "Mumbai"
                    ? "BOM, Chhatrapati Shivaji International"
                    : destination === "New Delhi"
                    ? "DEL, Indira Gandhi International"
                    : ""}
                </div> */}
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
                  dateFormat="dd MMMM yyyy, EEE"
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
                {/* <div className="date-display">
                  <div className="date-value">
                    <span className="date-day">{departureParts.day}</span>
                    <span className="date-month">{departureParts.month}</span>
                    <span className="date-year">{departureParts.year}</span>
                  </div>
                  <div className="date-weekday">
                    {formatDate(departureDate)}
                  </div>
                </div> */}
              </div>
            </div>

            {/* Return Date */}
            <div className="field-group">
              <label className="field-label">Return Date</label>
              <div className="field-input date-input">
                <DatePicker
                  selected={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  dateFormat="dd MMMM yyyy, EEE"
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
                {/* {returnDate ? (
                  <div className="date-display">
                    <div className="date-value">
                      <span className="date-day">{returnParts.day}</span>
                      <span className="date-month">{returnParts.month}</span>
                      <span className="date-year">{returnParts.year}</span>
                    </div>
                    <div className="date-weekday">{formatDate(returnDate)}</div>
                  </div>
                ) : (
                  <div className="return-note">
                    Book Round Trip
                    <br />
                    to save extra
                  </div>
                )} */}
              </div>
            </div>

            {/* Travellers & Class */}
            <div className="field-group">
              {/* <div className="field-group traveller-group"> */}
              <label className="field-label">Travellers & Class</label>
              <div
                className="field-input traveller-input"
                onClick={() => setShowTravellerModal(true)}
              >
                &nbsp; Premium
                {/* <div className="traveller-value">Premium</div> */}
                {/* <div className="traveller-value">
                  {travellers} Traveller{travellers > 1 ? "s" : ""}
                </div> */}
                {/* <div className="field-subtext">{travelClass}</div> */}
                <i className="fas fa-chevron-down traveller-arrow"></i>
              </div>

              {/* {showTravellerModal && (
                <div className="traveller-modal">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3>Travellers & Class</h3>
                      <button
                        className="close-modal"
                        onClick={() => setShowTravellerModal(false)}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    <div className="traveller-control">
                      <label>Adults</label>
                      <div className="counter">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTravellerChange("decrease");
                          }}
                          disabled={travellers <= 1}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <span>{travellers}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTravellerChange("increase");
                          }}
                          disabled={travellers >= 9}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="class-options">
                      {travelClasses.map((cls) => (
                        <div
                          key={cls}
                          className={`class-option ${
                            travelClass === cls ? "selected" : ""
                          }`}
                          onClick={() => setTravelClass(cls)}
                        >
                          {cls}
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
              )} */}
            </div>

            {/* Search Button */}
            <div className="field-group search-button-container">
              <button className="search-button-multiple">Search</button>
            </div>
          </div>

          {/* Special Options */}
          <div className="special-options">
            {specialOptions.map((option) => (
              <div
                className={`option-chip ${
                  specialOption === option.id ? "active" : ""
                }`}
                key={option.id}
                onClick={() => setSpecialOption(option.id)}
              >
                <input
                  type="radio"
                  id={option.id}
                  name="special-option"
                  checked={specialOption === option.id}
                  readOnly
                />
                <div>
                  <div className="option-title">{option.title}</div>
                  <div className="option-subtitle">{option.subtitle}</div>
                </div>
              </div>
            ))}
            <div className="checkbox-option">
              <input
                type="checkbox"
                id="non-stop"
                checked={nonStop}
                onChange={() => setNonStop(!nonStop)}
              />
              <label htmlFor="non-stop">Non-Stop Flights</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarMultiple;
