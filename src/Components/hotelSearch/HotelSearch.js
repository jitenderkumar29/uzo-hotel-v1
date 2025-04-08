import React, { useState } from "react";
import "./HotelSearch.css"; // We'll extract the CSS into a separate file
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HotelSearch = () => {
  const [filters, setFilters] = useState([
    { id: "free-cancellation", label: "Free cancellation", checked: false },
    { id: "five-stars", label: "5 stars", checked: false },
    { id: "four-stars", label: "4 stars", checked: false },
    { id: "three-stars", label: "3 stars", checked: false },
  ]);

  const [date, setDate] = useState(new Date());

  const [showRoomGuestSelector, setShowRoomGuestSelector] = useState(false);
  const [roomCount, setRoomCount] = useState(1);
  const [guestCount, setGuestCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const toggleFilter = (id) => {
    setFilters(
      filters.map((filter) =>
        filter.id === id ? { ...filter, checked: !filter.checked } : filter
      )
    );
  };

  return (
    <div className="container">
      {/* <h1>Where do you want to stay?</h1> */}

      <div className="search-card">
        <div className="search-fields">
          <div className="search-field destination ">
            <label htmlFor="destination" className="label-text">
              Where do you want to stay?
            </label>
            <input
              type="text"
              id="destination"
              className="search-input"
              placeholder="Search by city, hotel"
            />
          </div>

          <div className="divider"></div>

          <div className="search-field date-fields">
            <div className="date-field">
              <label htmlFor="checkin">Check-in</label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                dateFormat="yyyy/MM/dd"
                // placeholderText="Check In Date"
              />
              {/* <SingleDatepicker
                name="date-input"
                id="checkin"
                className="search-input first-date-input"
                date={date}
                onDateChange={setDate}
                
              /> */}
              {/* <input
                type="text"
                id="checkin"
                className="search-input first-date-input"
                placeholder="14/04/2025"
              /> */}
            </div>
            <div className="date-field">
              <label htmlFor="checkout">Check-out</label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                dateFormat="yyyy/MM/dd"
                // placeholderText="Check In Date"
              />
              {/* <SingleDatepicker
                name="date-input"
                id="checkout"
                className="search-input last-date-input"
                style={{ height: "50px" }}
                date={date}
                onDateChange={setDate}
              /> */}
              {/* <input
                type="text"
                id="checkout"
                className="search-input last-date-input"
                placeholder="15/04/2025"
              /> */}
            </div>
          </div>

          <div className="divider"></div>

          <div className="search-field guests">
            <label htmlFor="guests">Guests and rooms</label>
            <div className="search-section guest-rooms">
              <div
                className="room-guest-selector"
                onClick={() => setShowRoomGuestSelector(!showRoomGuestSelector)}
              >
                <div className="room-guest-item">
                  {/* <FaBed className="selector-icon" /> */}
                  <span>{roomCount} Room</span>
                </div>
                <div className="room-guest-item">
                  {/* <FaUser className="selector-icon" /> */}
                  <span>{guestCount} Guest</span>
                </div>
                <div className="room-guest-item">
                  <span>{childCount} Child</span>
                </div>
              </div>
            </div>
            {/* <input
              type="text"
              id="guests"
              className="search-input"
              placeholder="2 adults, 1 room"
            /> */}
          </div>

          <div className="divider"></div>

          <button className="search-button" style={{ marginBottom: "15px" }}>
            Search hotels
          </button>

          {showRoomGuestSelector && (
            <div className="room-guest-popup">
              <div className="counter">
                <span>Rooms</span>
                <div className="counter-controls">
                  <button
                    onClick={() => setRoomCount(Math.max(1, roomCount - 1))}
                  >
                    -
                  </button>
                  <span>{roomCount}</span>
                  <button onClick={() => setRoomCount(roomCount + 1)}>+</button>
                </div>
              </div>
              <div className="counter">
                <span>Guests</span>
                <div className="counter-controls">
                  <button
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  >
                    -
                  </button>
                  <span>{guestCount}</span>
                  <button onClick={() => setGuestCount(guestCount + 1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="counter">
                <span>Child</span>
                <div className="counter-controls">
                  <button
                    onClick={() => setChildCount(Math.max(1, childCount - 1))}
                  >
                    -
                  </button>
                  <span>{childCount}</span>
                  <button onClick={() => setChildCount(childCount + 1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="counter">
                <div className="">
                  <button
                    onClick={() =>
                      setShowRoomGuestSelector(!showRoomGuestSelector)
                    }
                  >
                    Done
                  </button>
                </div>
              </div>
              {/* <div className="counter">
            <span>Children</span>
            <div className="counter-controls">
              <button
                onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
              >
                -
              </button>
              <span>{childrenCount}</span>
              <button onClick={() => setChildrenCount(childrenCount + 1)}>
                +
              </button>
            </div>
          </div> */}
            </div>
          )}
        </div>

        <div className="filters">
          <span className="popular-filter">Popular Filters:</span>
          {filters.map((filter) => (
            <React.Fragment key={filter.id}>
              <input
                type="checkbox"
                id={filter.id}
                className="filter-checkbox"
                checked={filter.checked}
                onChange={() => toggleFilter(filter.id)}
              />
              <label htmlFor={filter.id} className="filter-label">
                <span
                  className={`custom-checkbox ${
                    filter.checked ? "checked" : ""
                  }`}
                ></span>
                {filter.label}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
