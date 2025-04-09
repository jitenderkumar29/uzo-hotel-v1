import { useContext, useEffect, useRef, useState } from "react";
import { useStore } from "../Context/AppContext";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import logoPng from "../Assets/icons/logo26.png";
import bannerImg from "../Assets/images/couple2.jpg";
import { ThemeContext } from "../Context/ThemeContext";
import { FaChevronDown, FaGlobe } from "react-icons/fa";
import { Center } from "@chakra-ui/react";
import { wrap } from "framer-motion";
import LanguageSelector from "./languageSelector/LanguageSelector";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { data, matrimonyType, login, setLogin } = useStore();
  const [filterKey, setFilterKey] = useState("Language");
  const HeaderRef = useRef();

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
    <header className="Header" ref={HeaderRef}>
      {!login && (
        <section className="find">
          <div className="container">
            <ul>
              {Object.keys(matrimonyType).map((i, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={`/`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // height: "45px",
                        // flexWrap: "wrap",
                      }}
                    >
                      {matrimonyType[i].name}
                      <FaChevronDown className="text-[#0D0156] text-xs" />
                      {/* <MdKeyboardArrowDown /> */}
                    </Link>
                    {/* <Link to={`/find/${i}`}>{matrimonyType[i].name}</Link> */}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <div className="main">
        <section className="container links">
          <Link to="/" className="logo">
            <img
              src={logoPng}
              alt=""
              style={{ height: "80px", marginLeft: "10px" }}
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
                            <Link to={"/profile-filter"}>Near By Matches</Link>
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

          <ul>
            {!login && (
              <>
                <li>
                  <Link to="/">Book</Link>
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
    </header>
  );
};

export default Header;
