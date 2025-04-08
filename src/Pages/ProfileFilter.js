import { useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import Chat from "../Components/_Chat";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";
import MultiRange from "../Components/_MultiRange";

import royalBg1Img from "../Assets/images/royal_bg_1.jpg";
import couple2Jpg from "../Assets/images/couple2.jpg";

const ProfileFilter = () => {
  useEffect(() => {
    const activeAccordion = document.querySelectorAll(".box.show");
    activeAccordion.forEach((el) => (el.style.height = `${el.offsetHeight}px`));
  }, []);

  const handleChangeAccordion = (e) => {
    try {
      e.target.parentNode.classList.toggle("active");

      e.target.nextSibling.style.height
        ? e.target.nextSibling.removeAttribute("style")
        : (e.target.nextSibling.style.height = `${e.target.nextSibling.children[0].offsetHeight}px`);

      if (e.target.nextSibling.classList.contains("show")) {
        e.target.nextSibling.classList.remove("show");
        e.target.nextSibling.removeAttribute("style");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <section className="ProfileFilter-hero Common-hero">
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>
      </section>

      <section className="ProfileFilter-grid">
        <div className="container">
          <div className="nav-btns row">
            <div className="col-3 nav-btn">
              <Link to={"/profile-filter"}>
                <span>
                  Interests Received <strong>39</strong>
                </span>
              </Link>
            </div>

            <div className="col-3 nav-btn">
              <Link to={"/profile-filter"}>
                <span>
                  Filtered Interests <strong>0</strong>
                </span>
              </Link>
            </div>

            <div className="col-3 nav-btn">
              <Link to={"/profile-filter"}>
                <span>
                  Accepted Me <strong>0</strong>
                </span>
              </Link>
            </div>

            <div className="col-3 nav-btn">
              <Link to={"/profile-filter"}>
                <span>
                  Messages <strong>1</strong>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row gap-4 flex-row-reverse pb-5">
            <div className="col-lg">
              {[...Array(10)].map((_, index) => {
                return (
                  <article key={index} className="profile-card">
                    <div className="row h-100">
                      <div className="col-4 px-0 h-100">
                        <Link to={"/partner-profile"}>
                          <div className="poster">
                            <img src={couple2Jpg} alt="" />
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg h-100">
                        <div className="info">
                          <div className="d-flex align-items-end justify-content-between py-3 border-bottom">
                            <h4>
                              <Link to={"/partner-profile"}>
                                S Kumar (#NS56468)
                              </Link>

                              <i className="ms-2 c-accent fas fa-lock"></i>
                              <i
                                className="ms-2 c-accent fas fa-user-check"
                                title="Profile Verified By Govt. ID"
                              ></i>
                            </h4>
                            <p>Last seen at 7:31 pm</p>
                          </div>

                          <div className="row gap-2 py-3">
                            <div className="col-lg">
                              <p>38, 5'11</p>
                              <p>Bhubaneshwar &amp; Cuttack</p>
                              <p>Brahmin</p>
                              <p>Oriya</p>
                            </div>
                            <div className="col-lg">
                              <p>MBA / PGDM</p>
                              <p>Business - Advertising Professional</p>
                              <p>Rs. 15 - 20 Lakh</p>
                              <p>Never Married</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="options h-100">
                        <div className="option">
                          <i className="far fa-envelope"></i>
                        </div>
                        <div className="option">
                          <i className="far fa-address-book"></i>
                        </div>
                        <div className="option">
                          <i className="far fa-message"></i>
                        </div>
                        <div className="option">
                          <i className="far fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="col-3 px-0">
              <div className="Custom-accordion">
                <div className="Custom-accordion-item">
                  <div className="label" onClick={handleChangeAccordion}>
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">VERIFIED PROFILES</span>
                    </div>
                    <i className="c-accent justify-self-end fas fa-lock"></i>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="text-center pb-3 mb-3 border-bottom">
                        <div className="fs-7 c-light px-4 mb-2">
                          Verify your profile to get access to this locked
                          filter
                        </div>
                        <div className="c-accent fw-bold">
                          BECOME A VERIFIED MEMBER
                        </div>
                      </div>
                      <div className="filter-checkbox">
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">All</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Verified Profiles</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item">
                  <div className="label" onClick={handleChangeAccordion}>
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">VERIFIED PROFILES</span>
                    </div>
                    <i className="c-accent justify-self-end fas fa-lock"></i>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="text-center pb-3 mb-3 border-bottom">
                        <div className="fs-7 c-light px-4 mb-2">
                          Verify your profile to get access to this locked
                          filter
                        </div>
                        <div className="c-accent fw-bold">
                          BECOME A VERIFIED MEMBER
                        </div>
                      </div>
                      <div className="filter-checkbox">
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">All</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Verified Profiles</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item active">
                  <div className="label" onClick={handleChangeAccordion}>
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">VERIFIED PROFILES</span>
                    </div>
                    <i className="c-accent justify-self-end fas fa-lock"></i>
                  </div>

                  <div className="box show">
                    <div className="content">
                      <div className="text-center pb-3 mb-3 border-bottom">
                        <div className="fs-7 c-light px-4 mb-2">
                          Verify your profile to get access to this locked
                          filter
                        </div>
                        <div className="c-accent fw-bold">
                          BECOME A VERIFIED MEMBER
                        </div>
                      </div>
                      <div className="filter-checkbox">
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">All</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Verified Profiles</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item">
                  <div className="label" onClick={handleChangeAccordion}>
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">VERIFIED PROFILES</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="filter-checkbox">
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">All</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option One</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option Two</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option Three</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option Four</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item">
                  <div className="label" onClick={handleChangeAccordion}>
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">VERIFIED PROFILES</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="filter-checkbox">
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">All</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option One</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option Two</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option Three</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option Four</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item active">
                  <div className="label" onClick={handleChangeAccordion}>
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">VERIFIED PROFILES</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box show">
                    <div className="content">
                      <div className="filter-checkbox">
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">All</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option One</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option Two</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option Three</span>
                          </label>
                        </div>
                        <div className="filter-checkbox-item">
                          <label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <span className="ms-3">Option Four</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item">
                  <div className="label" onClick={handleChangeAccordion}>
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">VERIFIED PROFILES</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box">
                    <div className="content">
                      <MultiRange
                        title={"Age"}
                        min={"18"}
                        max={"76"}
                        left={"28"}
                        right={"42"}
                        callback={(result) => console.log(result)}
                      />
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item">
                  <div className="label" onClick={handleChangeAccordion}>
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">VERIFIED PROFILES</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box">
                    <div className="content">
                      <MultiRange
                        title={"Test"}
                        min={"0"}
                        max={"3200"}
                        left={"600"}
                        right={"2600"}
                        callback={(result) => console.log(result)}
                      />
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item active">
                  <div className="label" onClick={handleChangeAccordion}>
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">VERIFIED PROFILES</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box show">
                    <div className="content">
                      <MultiRange
                        title={"Test"}
                        min={"0"}
                        max={"3200"}
                        left={"600"}
                        right={"2600"}
                        callback={(result) => console.log(result)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Chat />
      <FooterTop />
      <Contact />
      <Footer />
    </>
  );
};

export default ProfileFilter;
