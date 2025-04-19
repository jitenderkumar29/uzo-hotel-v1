import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import "../../App.scss";
import "./HolidaySearchBar.css";
import DatePicker from "react-datepicker";
import HotelSearch from "../../hotelSearch/HotelSearch";
import { Link } from "react-router-dom";

const HolidaySearchBar = () => {
  const [activeTab, setActiveTab] = useState("Flights");
  const [tripType, setTripType] = useState("one-way");
  const [departure, setDeparture] = useState("Noida");
  const [destination, setDestination] = useState("Kashmir");
  const [departureDate, setDepartureDate] = useState(() => new Date());
  const [returnDate, setReturnDate] = useState(() => new Date());
  const [specialOption, setSpecialOption] = useState("regular");
  const [nonStop, setNonStop] = useState(true);
  const [travellers, setTravellers] = useState(1);
  const [travellersChild, setTravellersChild] = useState(1);
  const [travellersInfant, setTravellersInfant] = useState(1);
  const [hotelTypeClass, setHotelTypeClass] = useState({
    name: "5",
    id: "(13)",
  });
  const [showRoomGuestModal, setShowRoomGuestModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const min = 2;
  const max = 9;
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minBudget = 2000;
  const maxBudget = 92000;
  const [minBudgetVal, setMinBudgetVal] = useState(minBudget);
  const [maxBudgetVal, setMaxBudgetVal] = useState(maxBudget);

  // Prevent overlap
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    setMinVal(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(value);
  };
  const handleMinBudgetChange = (e) => {
    const value = Math.min(Number(e.target.value), maxBudgetVal - 1000);
    setMinBudgetVal(value);
  };

  const handleMaxBudgetChange = (e) => {
    const value = Math.max(Number(e.target.value), minBudgetVal + 1000);
    setMaxBudgetVal(value);
  };

  const hotelTypeClasses = [
    { name: "<3", id: "(0)" },
    { name: "3", id: "(15)" },
    { name: "4", id: "(35)" },
    { name: "5", id: "(13)" },
  ];

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
    <div className="search-options-holiday">
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
      <div className="search-fields-multiple-holiday">
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
              {departure === "Noida"
                ? "Noida Sector 15"
                : departure === "Kashmir"
                ? "Kashmir Hill Station"
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
              {destination === "Kashmir"
                ? "Kashmir Hill Station"
                : destination === "Noida"
                ? "Noida Sector 15"
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

        {/* Rooms & Guests */}
        {/* <div className="field-group"> */}
        <div className="field-group traveller-group">
          <label className="field-label">Rooms & Guests</label>
          <div
            className="field-input traveller-input"
            onClick={() => setShowRoomGuestModal(true)}
          >
            {/* &nbsp; Premium */}
            {/* <div className="traveller-value">Premium</div> */}
            <div className="traveller-value">
              {travellers} Traveller{travellers > 1 ? "s" : ""}
            </div>
            <div className="traveller-value">
              {travellersChild} Child{travellersChild > 0 ? "" : ""}
              {/* {travellersChild} Child{travellersChild > 0 ? "s" : ""} */}
            </div>
            <div className="field-subtext">
              {travellersInfant} Infant{travellersInfant > 0 ? "" : ""}
            </div>
            <i className="fas fa-chevron-down traveller-arrow"></i>
          </div>

          {showRoomGuestModal && (
            <div className="traveller-modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>Rooms & Guests</h3>
                  <button
                    className="close-modal"
                    onClick={() => setShowRoomGuestModal(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="traveller-control">
                  <label>
                    Adults
                    <br /> <p>Above 12 Years</p>
                  </label>
                  {/* <label>Above 12 Years</label> */}
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
                <div className="traveller-control">
                  <label>
                    Child
                    <br /> <p>2-12 Years</p>
                  </label>
                  {/* <label>2-12 Years</label> */}
                  <div className="counter">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravellerChangeChild("decrease");
                      }}
                      disabled={travellersChild <= 0}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span>{travellersChild}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravellerChangeChild("increase");
                      }}
                      disabled={travellersChild >= 9}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="traveller-control">
                  <label>
                    Infant
                    <br /> <p>0-2 Years</p>
                  </label>
                  {/* <label>0-2 Years</label> */}
                  <div className="counter">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravellerChangeInfant("decrease");
                      }}
                      disabled={travellersInfant <= 0}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span>{travellersInfant}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravellerChangeInfant("increase");
                      }}
                      disabled={travellersInfant >= 9}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                {/* <div className="class-options">
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
                </div> */}
                {/* <div className="group-booking">
                  For group bookings (more than 9 passengers) visit
                  <div className="checkbox-option">
                    <input
                      type="checkbox"
                      id="non-stop"
                      checked={nonStop}
                      onChange={() => setNonStop(!nonStop)}
                    />
                    <label htmlFor="non-stop">UzoHotels Group Bookings</label>
                  </div>
                </div> */}
                <button
                  className="apply-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRoomGuestModal(false);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Filter */}

        <div className="field-group traveller-group">
          <label className="field-label">Filters</label>
          <div
            className="field-input traveller-input"
            onClick={() => setShowFilterModal(true)}
          >
            {/* &nbsp; Premium */}
            {/* <div className="traveller-value">Premium</div> */}
            <div className="traveller-value">
              <small>
                ({minVal}N - {maxVal}N) Nights
              </small>
            </div>
            <div className="traveller-value">
              <small>
                ({minBudgetVal}N - {maxBudgetVal}N)
              </small>
              {/* {travellersChild} Child{travellersChild > 0 ? "s" : ""} */}
            </div>
            <div className="field-subtext">
              {hotelTypeClass.name} ★ {hotelTypeClass.id}
            </div>
            <i className="fas fa-chevron-down traveller-arrow"></i>
          </div>

          {showFilterModal && (
            <div className="traveller-modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>Filters</h3>
                  <button
                    className="close-modal"
                    onClick={() => setShowFilterModal(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="slider-container-filter">
                  <div className="label-filter">
                    <strong>Duration (in Nights)</strong>
                    <small>
                      {" "}
                      ({minVal}N - {maxVal}N)
                    </small>
                  </div>

                  <div className="range-slider-filter">
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={minVal}
                      onChange={handleMinChange}
                      className="thumb thumb-left-filter"
                    />
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={maxVal}
                      onChange={handleMaxChange}
                      className="thumb thumb-right-filter"
                    />

                    <div className="slider-track-filter"></div>
                    <div
                      className="slider-range-filter"
                      style={{
                        left: `${((minVal - min) / (max - min)) * 100}%`,
                        width: `${((maxVal - minVal) / (max - min)) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="value-labels-filter">
                    <span>{minVal}N</span>
                    <span>{maxVal}N</span>
                  </div>
                </div>
                {/* Budget per person */}
                <div className="slider-container-filter">
                  <div className="label-filter">
                    <strong>Budget (per person)</strong>
                    <small>
                      {" "}
                      ({minBudgetVal}N - {maxBudgetVal}N)
                    </small>
                  </div>

                  <div className="range-slider-filter">
                    <input
                      type="range"
                      min={minBudget}
                      max={maxBudget}
                      value={minBudgetVal}
                      onChange={handleMinBudgetChange}
                      className="thumb thumb-left-filter"
                    />
                    <input
                      type="range"
                      min={minBudget}
                      max={maxBudget}
                      value={maxBudgetVal}
                      onChange={handleMaxBudgetChange}
                      className="thumb thumb-right-filter"
                    />

                    <div className="slider-track-filter"></div>
                    <div
                      className="slider-range-filter"
                      style={{
                        left: `${
                          ((minBudgetVal - minBudget) /
                            (maxBudget - minBudget)) *
                          100
                        }%`,
                        width: `${
                          ((maxBudgetVal - minBudgetVal) /
                            (maxBudget - minBudget)) *
                          100
                        }%`,
                      }}
                    />
                  </div>

                  <div className="value-labels-filter">
                    <span>{minBudgetVal}N</span>
                    <span>{maxBudgetVal}N</span>
                  </div>
                </div>
                {/* Hotel category */}
                <div className="slider-container-filter">
                  <div className="label-filter-hotel">
                    <strong>Hotel Category</strong>
                  </div>

                  <div className="range-slider-filter-hotel">
                    <div className="class-options-filter">
                      {hotelTypeClasses.map((cls) => (
                        <div
                          key={cls.id}
                          className={`class-option-filter ${
                            hotelTypeClass.name === cls.name ? "selected" : ""
                          }`}
                          onClick={() => setHotelTypeClass(cls)}
                        >
                          {cls.name}★{cls.id}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Apply Button */}
                <button
                  className="apply-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRoomGuestModal(false);
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

export default HolidaySearchBar;
