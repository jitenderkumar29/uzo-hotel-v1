import { useContext, useEffect, useRef, useState } from "react";
import { useStore } from "../Context/AppContext";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import logoPng from "../Assets/icons/logo26.png";
import bannerImg from "../Assets/images/couple2.jpg";
import { ThemeContext } from "../Context/ThemeContext";
import { FaChevronDown, FaGlobe } from "react-icons/fa";
import { background, Center } from "@chakra-ui/react";
import { wrap } from "framer-motion";
import LanguageSelector from "./languageSelector/LanguageSelector";
import "./_Header.css";
import bookListImage1 from "../Assets/images/hero111.jpg";
import bookListImage2 from "../Assets/images/hero222.jpg";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { data, matrimonyType, cityList, hotelsList, login, setLogin } =
    useStore();
  const [filterKey, setFilterKey] = useState("Language");
  const [showBooking, setShowBooking] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [activeCity, setActiveCity] = useState();
  const [selectedCity, setSelectedCity] = useState(null);
  // const [selectedCity, setSelectedCity] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showHotels, setShowHotels] = useState(false);
  const [hotels, setHotels] = useState();
  const buttonRef = useRef(null);

  const HeaderRef = useRef();

  // const handleHotelChange = (e) => {
  //   const hotelIndex = e.target.value;
  //   setSelectedHotel(hotelsList[selectedCity][hotelIndex]);
  // };
  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleClick = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    console.log("Button Position (relative to viewport):");
    console.log("Top:", rect.top);
    console.log("Left:", rect.left);
  };

  const toggleDropdown = (cityKey) => {
    console.log("cityKey");
    console.log(cityKey);
    // setSelectedCity(cityKey);
    console.log(hotelsList[cityKey]); // Directly access the array of hotels
    setHotels(hotelsList[cityKey]);
    setSelectedHotel(null); // Reset hotel selection when city changes
    setSelectedCity(selectedCity === cityKey ? null : cityKey);

    //button position
    const rect = buttonRef.current.getBoundingClientRect();
    console.log("Button Position (relative to viewport):");
    console.log("Top:", rect.top);
    console.log("Left:", rect.left);
    console.log("Left:", rect);
    const left = rect.left;
    const top = rect.top;
  };

  useEffect(() => {
    if (!login)
      window.onscroll = function () {
        if (HeaderRef.current) {
          this.oldScroll >= this.scrollY
            ? HeaderRef.current.classList.remove("hide")
            : HeaderRef.current.classList.add("hide");
          this.oldScroll = this.scrollY;
        }
      };

    return () => {
      window.onscroll = null;
    };
  }, [login]);

  const category = {
    Language: data.language,
    Caste: data.caste,
    Religion: data.religion,
    City: data.city,
    Occupation: data.occupation,
    State: data.state,
    NRI: data.nri,
  };

  return (
    <>
      <header className="Header" ref={HeaderRef}>
        {!login && (
          <section className="find">
            <div className="container" style={{ padding: "15px" }}>
              <ul>
                {Object.keys(cityList).map((i, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={`/`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={() => toggleDropdown(cityList[i].name)}
                        ref={buttonRef}
                      >
                        {cityList[i].name}
                        <FaChevronDown className="text-[#0D0156] text-xs" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {/* {selectedCity && (
          <div className="mddCityPopUp d-popup absolute z-50">
            <div className="is-fontBold mddCityPopUp__heading">
              Popular Localities
            </div>
            {hotels.map((hotels, index) => (
              // <a
              //   key={index}
              //   className="c-nn640c u-textEllipsis mddCityPopUp__localityItem"
              //   href={locality.url}
              // >
              <li key={index}>{hotels.name}</li>
              // </a>
            ))}
            <div className="u-textEllipsis mddCityPopUp__localityItem mddCityPopUp__localityItem--all">
              All of Bangalore
              <svg>
                <use xlinkHref="#chevron" />
              </svg>
            </div>
          </div>
        )} */}

        {/*  working drop down list display left*/}
        {/* {selectedCity && (
          <div className="traveller-modal-drop-down">
            <div className="modal-content-drop-down">
              <div className="modal-header-drop-down">
                <h3 className="hotel-list-drop-down-head">Hotels List</h3>
                <button
                  className="close-modal"
                  onClick={() => setSelectedCity(null)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-header-drop-down-list">
                {hotels.map((hotel, index) => (
                  <ul>
                    <li
                      key={index}
                      className="hotel-list-drop-down"
                      onClick={() => setSelectedCity(null)}
                    >
                      <span className="hotel-list-drop-down-span">
                        {hotel.name}
                      </span>
                      <span className="hotel-list-drop-down-span">
                        {hotel.address}
                      </span>
                      <span className="hotel-list-drop-down-span">
                        ⭐ {hotel.rating}
                      </span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        )} */}

        {/* {selectedCity === "Agra" && (
          <div className="traveller-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Hotels List</h3>
              </div>

              <div className="traveller-control">
                <label>
                  Taj hotel
                </label>
                <label>
                  Agra palace
                </label>
              </div>
            </div>
          </div>
        )} */}

        <div className="main">
          <section className="container links">
            <Link to="/" className="logo">
              <img
                src={logoPng}
                alt=""
                style={{ height: "80px", marginLeft: "15px" }}
              />
            </Link>

            <div className="logo_mobile">
              <i className="fas fa-bars"></i>
              <img src={logoPng} alt="" />
            </div>

            {login && (
              <ul className="gap-4">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li className="position-relative">
                  <Link to="/profile-filter">MATCHES</Link>

                  <section className="submenu">
                    <div className="submenu_single">
                      <div className="content">
                        <div className="border-bottom">
                          <ul>
                            <li>
                              <Link to={"/profile-filter"}>
                                Desired Partner Matched
                              </Link>
                            </li>
                            <li>
                              <Link to={"/profile-filter"}>
                                Daily Recommandations
                              </Link>
                            </li>
                            <li>
                              <Link to={"/profile-filter"}>My Matches</Link>
                            </li>
                            <li>
                              <Link to={"/profile-filter"}>
                                Near By Matches
                              </Link>
                            </li>
                            <li>
                              <Link to={"/profile-filter"}>Mutual Matches</Link>
                            </li>
                            <li>
                              <Link to={"/profile-filter"}>Kundli Matches</Link>
                            </li>
                            <li>
                              <Link to={"/profile-filter"}>
                                Members Looking For Me
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </li>
                <li className="position-relative">
                  <Link to="/profile-inbox">INBOX</Link>

                  <section className="submenu">
                    <div className="submenu_single">
                      <div className="content">
                        <ul>
                          <li>
                            <Link to={"/profile-inbox"}>Interest</Link>
                          </li>
                          <li>
                            <Link to={"/profile-inbox"}>Acceptance</Link>
                          </li>
                          <li>
                            <Link to={"/profile-inbox"}>Messages</Link>
                          </li>
                          <li>
                            <Link to={"/profile-inbox"}>Photo Request</Link>
                          </li>
                          <li>
                            <Link to={"/profile-inbox"}>
                              Declined / Blocked Members
                            </Link>
                          </li>
                          <li>
                            <Link to={"/profile-inbox"}>Viewed Contacts</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </li>
                <li>
                  <Link to="/profile-search">SEARCH</Link>
                </li>
                <li>
                  <Link to="/membership-plans">UPGRADE</Link>
                </li>
              </ul>
            )}

            <ul style={{ marginRight: "10px" }}>
              {!login && (
                <>
                  <li>
                    <Link
                      to="/"
                      onClick={(e) => {
                        e.preventDefault(); // prevent default navigation
                        setShowBooking((prev) => !prev);
                      }}
                    >
                      Book
                    </Link>
                  </li>

                  <li className="active">
                    <Link to="/">Become a Member</Link>
                    {/* <section className="submenu">
                    <div className="submenu_multi">
                      <div className="container">
                        <div className="row">
                          <div className="col-3">
                            <ul>
                              {Object.keys(category).map((i, index) => {
                                return (
                                  <li
                                    key={index}
                                    className={`d-flex align-items-center justify-content-between${
                                      i === filterKey ? " active" : ""
                                    }`}
                                    onMouseEnter={() => setFilterKey(i)}
                                  >
                                    <span>{i}</span>
                                    <i className="fas fa-arrow-right"></i>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                          <div className="col-lg">
                            <ul className="cc-3">
                              {category[filterKey].map((i, index) => {
                                return <li key={index}>{i}</li>;
                              })}
                            </ul>
                          </div>

                          <div className="col-3">
                            <img src={bannerImg} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section> */}

                    {/* <Link to="/">BROWSE PROFILES</Link> */}
                    {/* <section className="submenu">
                    <div className="submenu_multi">
                      <div className="container">
                        <div className="row">
                          <div className="col-3">
                            <ul>
                              {Object.keys(category).map((i, index) => {
                                return (
                                  <li
                                    key={index}
                                    className={`d-flex align-items-center justify-content-between${
                                      i === filterKey ? " active" : ""
                                    }`}
                                    onMouseEnter={() => setFilterKey(i)}
                                  >
                                    <span>{i}</span>
                                    <i className="fas fa-arrow-right"></i>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                          <div className="col-lg">
                            <ul className="cc-3">
                              {category[filterKey].map((i, index) => {
                                return <li key={index}>{i}</li>;
                              })}
                            </ul>
                          </div>

                          <div className="col-3">
                            <img src={bannerImg} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section> */}
                  </li>
                  <li>
                    <Link to="/">Corporate Member</Link>
                    {/* <Link to="/sapphire-premier">SAPPHIRE PREMIER</Link> */}
                  </li>
                  <li>
                    <Link to="/">List Your Property</Link>
                  </li>
                  <li>
                    <Link to="/">
                      {/* English
                    <FaChevronDown className="text-[#0D0156] text-xs" /> */}
                      <LanguageSelector />
                      {/* <FaGlobe size={15} /> */}
                    </Link>
                    {/* <Link to="/">Hindi/English</Link> */}
                  </li>
                </>
              )}

              {!login && (
                <>
                  <Link to="/">
                    {/* <Link to="/login"> */}
                    <button className="mx-2 py-2 px-3 login-sigun-button">
                      Log In/SignUp
                    </button>
                  </Link>
                  <Link to="/">
                    {/* <Link to="/login"> */}

                    {/* <button className="mx-2 py-2 px-3" onClick={toggleTheme}>
                    Theme
                  </button> */}
                  </Link>
                  {/* <Link to={"/corporate-login"}>
                  <button className="ms-2 py-2 px-3">Corporate</button>
                </Link> */}
                </>
              )}

              {login && (
                <div className="user-menu">
                  <div className="avatar">
                    <img src={bannerImg} alt="" />
                  </div>

                  <section className="submenu">
                    <div className="submenu_single">
                      <div className="content">
                        <div className="border-bottom">
                          <ul>
                            <li>
                              <Link to={"/user-profile"}>
                                My Profile ( NS45647f )
                              </Link>
                            </li>
                            <li>
                              <Link to={"/edit-desired-partner"}>
                                Desired Partner Profile
                              </Link>
                            </li>
                            <li>
                              <Link to={"/membership-plans"}>
                                You are free Member{" "}
                                <span className="badge btn-dark">UPGRADE</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/profile-settings"}>Settings</Link>
                            </li>
                          </ul>
                        </div>

                        <ul>
                          <li onClick={() => setLogin(false)}>
                            <Link
                              to={"/"}
                              className="d-flex align-items-center justify-content-between"
                            >
                              <span>Sign Out</span>
                              <i className="fas fa-arrow-right-from-bracket"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </ul>
          </section>
        </div>
        {showBooking && (
          <div className="container-booklist">
            <aside className="sidebar-booklist">
              <div className="side-bar-heading">
                <h3>Book</h3>
                <button
                  className="close-modal"
                  onClick={() => setShowBooking(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <ul className="nav-list-booklist">
                <li className="nav-link-booklist">
                  <i className="fas fa-plane-departure"></i>
                  <Link
                    to={"/book"}
                    // onClick={(e) => {
                    //   e.preventDefault(); // prevent default navigation
                    //   setShowBooking((prev) => !prev);
                    // }}
                  >
                    Flight
                  </Link>
                </li>

                <li>
                  <i className="fas fa-hotel"></i>
                  Hotels
                </li>
                <li>
                  <i className="fas fa-bus"></i> Bus
                </li>
                <li>
                  <i className="fas fa-train"></i> Trains
                </li>
                <li>
                  <i className="fas fa-umbrella-beach"></i> Holidays
                </li>
                <li>
                  <i className="fas fa-taxi"></i> Cabs
                </li>
                <li>
                  <i className="fas fa-map-marker"></i> Amusement Park
                </li>
                <li>
                  <i className="fas fa-calendar"></i> Events
                </li>
              </ul>
            </aside>

            <main className="offers-booklist">
              <div className="offer-card-booklist">
                <img
                  src="https://www.goindigo.in/content/dam/s6web/in/en/assets/homepage-header/Summer_sale_Tile_under_book.jpg"
                  alt="Summer Sale"
                />
                {/* <img src={bookListImage1} alt="Summer Sale" /> */}
                <div className="offer-text-booklist">
                  <p>
                    Book domestic flights with fares starting price at ₹1,499
                  </p>
                </div>
              </div>
              <div className="offer-card-booklist">
                <img
                  src="https://www.goindigo.in/content/dam/s6web/in/en/assets/homepage/hotels/new/Newbook-hotels-Book-under-tile-banner-276X280.png"
                  alt="Hotel Offer"
                />
                {/* <img src={bookListImage2} alt="Hotel Offer" /> */}
                <div className="offer-text-booklist">
                  <p>Book your stay on uzohotels.com and get up to 25%* off.</p>
                </div>
              </div>
            </main>
          </div>
          // <div
          // // style={{
          // //   zIndex: "1000",
          // //   top: "80px",
          // // }}
          // >
          //   {/* <div className="dropdown-menu"> */}
          // </div>
        )}
      </header>
    </>
  );
};

export default Header;
