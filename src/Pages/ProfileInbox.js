// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../Components/_Header";
import Chat from "../Components/_Chat";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import royalBg1Img from "../Assets/images/royal_bg_1.jpg";
import couple2Jpg from "../Assets/images/couple2.jpg";

const ProfileInbox = () => {
  const [view, setView] = useState({
    tab: 0,
    page: 0,
  });

  useEffect(() => {
    const activeAccordion = document.querySelectorAll(".box.show");
    activeAccordion.forEach((el) => (el.style.height = `${el.offsetHeight}px`));
  }, []);

  const handleChangeAccordion = (e, tab) => {
    setView({ tab, page: 0 });

    try {
      const allAccordion = document.querySelectorAll(".Custom-accordion-item");
      allAccordion.forEach((el) => {
        el.classList.remove("active");

        el.children[1].classList.contains("show") &&
          el.children[1].classList.remove("show");

        el.children[1].style && el.children[1].removeAttribute("style");
      });

      e.target.parentNode.classList.add("active");

      e.target.nextSibling.style.height = `${e.target.nextSibling.children[0].offsetHeight}px`;

      // document
      //   .querySelectorAll(".filter-btn-item")
      //   .forEach((el) => el.classList.remove("active"));

      // e.target.parentNode
      //   .querySelectorAll(".filter-btn-item")[0]
      //   .classList.add("active");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFilterBtnItem = (page) => {
    setView({ ...view, page });

    return;
  };

  return (
    <>
      <Header />

      <section className="ProfileInbox-hero Common-hero">
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>
      </section>

      <section className="ProfileInbox-grid Profile-grid">
        <div className="container mt-5">
          <div className="row gap-4 flex-row-reverse pb-5">
            <div className="col-lg">
              <main className="profile-content">
                <div className="section">
                  {view.tab === 0 &&
                    [...Array(10)].map((_, index) => {
                      return (
                        <article key={index} className="profile-card">
                          <div className="d-flex h-100">
                            <div className="col-3 px-0 h-100">
                              <div className="poster">
                                <img src={couple2Jpg} alt="" />
                              </div>
                            </div>

                            <div className="col-lg h-100">
                              <div className="info">
                                <div className="d-flex gap-3 align-items-end justify-content-between py-3 border-bottom">
                                  <h5 className="text-nowrap">
                                    S Kumar (#NS56468)
                                    <i className="ms-2 c-accent fas fa-lock"></i>
                                  </h5>
                                  <p className="text-ellipsis">
                                    Last seen at 7:31 pm
                                  </p>
                                </div>

                                <div className="row gap-2 py-3">
                                  <div className="col-12">
                                    <div className="text-ellipsis clamp-2">
                                      <span>
                                        31, 5' 8", Mumbai, Hindu, Soni,
                                        Gujarati,
                                      </span>
                                      <span>
                                        Other, ₹ 2 - 3 Lakh, Marketing
                                        Professional, Never Married
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-12 text-end">
                                    <span className="text-danger">ePrime</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="options h-100">
                              {view.page === 2 ? (
                                <>
                                  <div className="option px-3">
                                    Send Reminder
                                  </div>
                                  <div className="option px-3">
                                    View Contact
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="option px-3">Accept</div>
                                  <div className="option px-3">Decline</div>
                                </>
                              )}
                            </div>
                          </div>
                        </article>
                      );
                    })}

                  {view.tab === 1 &&
                    [...Array(10)].map((_, index) => {
                      return (
                        <article key={index} className="profile-card">
                          <div className="d-flex h-100">
                            <div className="col-3 px-0 h-100">
                              <div className="poster">
                                <img src={couple2Jpg} alt="" />
                              </div>
                            </div>

                            <div className="col-lg h-100">
                              <div className="info">
                                <div className="d-flex gap-3 align-items-end justify-content-between py-3 border-bottom">
                                  <h5 className="text-nowrap">
                                    S Kumar (#NS56468)
                                    <i className="ms-2 c-accent fas fa-lock"></i>
                                  </h5>
                                  <p className="text-ellipsis">
                                    Last seen at 7:31 pm
                                  </p>
                                </div>

                                <div className="row gap-2 py-3">
                                  <div className="col-12">
                                    <div className="text-ellipsis clamp-2">
                                      <span>
                                        31, 5' 8", Mumbai, Hindu, Soni,
                                        Gujarati,
                                      </span>
                                      <span>
                                        Other, ₹ 2 - 3 Lakh, Marketing
                                        Professional, Never Married
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-12 text-end">
                                    <span className="text-danger">ePrime</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="options h-100">
                              <div className="option px-3">Send Message</div>
                              <div className="option px-3">View Contact</div>
                            </div>
                          </div>
                        </article>
                      );
                    })}

                  {view.tab === 2 &&
                    [...Array(10)].map((_, index) => {
                      return (
                        <article key={index} className="profile-card">
                          <div className="d-flex h-100">
                            <div className="col-3 px-0 h-100">
                              <div className="poster">
                                <img src={couple2Jpg} alt="" />
                              </div>
                            </div>

                            <div className="col-lg h-100">
                              <div className="info">
                                <div className="d-flex gap-3 align-items-end justify-content-between py-3 border-bottom">
                                  <h5 className="text-nowrap">
                                    S Kumar (#NS56468)
                                    <i className="ms-2 c-accent fas fa-lock"></i>
                                  </h5>
                                  <p className="text-ellipsis">
                                    Last seen at 7:31 pm
                                  </p>
                                </div>

                                <div className="row gap-2 py-3">
                                  <div className="col-12">
                                    <div className="text-ellipsis clamp-2">
                                      <span>
                                        31, 5' 8", Mumbai, Hindu, Soni,
                                        Gujarati,
                                      </span>
                                      <span>
                                        Other, ₹ 2 - 3 Lakh, Marketing
                                        Professional, Never Married
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-12 text-end">
                                    <span className="text-danger">ePrime</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="options h-100">
                              <div className="option px-3">Send Message</div>
                              <div className="option px-3">View Contact</div>
                            </div>
                          </div>
                        </article>
                      );
                    })}

                  {view.tab === 3 &&
                    [...Array(10)].map((_, index) => {
                      return (
                        <article key={index} className="profile-card">
                          <div className="d-flex h-100">
                            <div className="col-3 px-0 h-100">
                              <div className="poster">
                                <img src={couple2Jpg} alt="" />
                              </div>
                            </div>

                            <div className="col-lg h-100">
                              <div className="info">
                                <div className="d-flex gap-3 align-items-end justify-content-between py-3 border-bottom">
                                  <h5 className="text-nowrap">
                                    S Kumar (#NS56468)
                                    <i className="ms-2 c-accent fas fa-lock"></i>
                                  </h5>
                                  <p className="text-ellipsis">
                                    Last seen at 7:31 pm
                                  </p>
                                </div>

                                <div className="row gap-2 py-3">
                                  <div className="col-12">
                                    <div className="text-ellipsis clamp-2">
                                      <span>
                                        31, 5' 8", Mumbai, Hindu, Soni,
                                        Gujarati,
                                      </span>
                                      <span>
                                        Other, ₹ 2 - 3 Lakh, Marketing
                                        Professional, Never Married
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-12 text-end">
                                    <span className="text-danger">ePrime</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}

                  {view.tab === 4 &&
                    (view.page === 0
                      ? // <div className="text-center my-5">
                        //   <h5 className="mb-4">Blocked/Ignored 0</h5>
                        //   <p>Members blocked by you will appear here</p>
                        // </div>
                        [...Array(10)].map((_, index) => {
                          return (
                            <article key={index} className="profile-card">
                              <div className="d-flex h-100">
                                <div className="col-3 px-0 h-100">
                                  <div className="poster">
                                    <img src={couple2Jpg} alt="" />
                                  </div>
                                </div>

                                <div className="col-lg h-100">
                                  <div className="info">
                                    <div className="d-flex gap-3 align-items-end justify-content-between py-3 border-bottom">
                                      <h5 className="text-nowrap">
                                        S Kumar (#NS56468)
                                        <i className="ms-2 c-accent fas fa-lock"></i>
                                      </h5>
                                      <p className="text-ellipsis">
                                        Last seen at 7:31 pm
                                      </p>
                                    </div>

                                    <div className="row gap-2 py-3">
                                      <div className="col-12">
                                        <div className="text-ellipsis clamp-2">
                                          <span>
                                            31, 5' 8", Mumbai, Hindu, Soni,
                                            Gujarati,
                                          </span>
                                          <span>
                                            Other, ₹ 2 - 3 Lakh, Marketing
                                            Professional, Never Married
                                          </span>
                                        </div>
                                      </div>
                                      <div className="col-12 text-end">
                                        <span className="text-danger">
                                          ePrime
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="options h-100">
                                  <div className="option px-3">Unblock</div>
                                  <div className="option transparent px-3"></div>
                                </div>
                              </div>
                            </article>
                          );
                        })
                      : [...Array(10)].map((_, index) => {
                          return (
                            <article key={index} className="profile-card">
                              <div className="d-flex h-100">
                                <div className="col-3 px-0 h-100">
                                  <div className="poster">
                                    <img src={couple2Jpg} alt="" />
                                  </div>
                                </div>

                                <div className="col-lg h-100">
                                  <div className="info">
                                    <div className="d-flex gap-3 align-items-end justify-content-between py-3 border-bottom">
                                      <h5 className="text-nowrap">
                                        S Kumar (#NS56468)
                                        <i className="ms-2 c-accent fas fa-lock"></i>
                                      </h5>
                                      <p className="text-ellipsis">
                                        Last seen at 7:31 pm
                                      </p>
                                    </div>

                                    <div className="row gap-2 py-3">
                                      <div className="col-12">
                                        <div className="text-ellipsis clamp-2">
                                          <span>
                                            31, 5' 8", Mumbai, Hindu, Soni,
                                            Gujarati,
                                          </span>
                                          <span>
                                            Other, ₹ 2 - 3 Lakh, Marketing
                                            Professional, Never Married
                                          </span>
                                        </div>
                                      </div>
                                      <div className="col-12 text-end">
                                        <span className="text-danger">
                                          ePrime
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="options h-100">
                                  {view.page === 1 && (
                                    <>
                                      <div className="option px-3">
                                        Accept Again
                                      </div>
                                      <div className="option transparent px-3"></div>
                                    </>
                                  )}
                                  {view.page === 2 && (
                                    <>
                                      <div className="option transparent px-3 fs-6">
                                        They Declined Interest
                                      </div>
                                      <div className="option transparent px-3"></div>
                                    </>
                                  )}
                                </div>
                              </div>
                            </article>
                          );
                        }))}

                  {
                    view.tab === 5 &&
                      // (view.page === 0 ? (
                      [...Array(10)].map((_, index) => {
                        return (
                          <article key={index} className="profile-card">
                            <div className="d-flex h-100">
                              <div className="col-3 px-0 h-100">
                                <div className="poster">
                                  <img src={couple2Jpg} alt="" />
                                </div>
                              </div>

                              <div className="col-lg h-100">
                                <div className="info">
                                  <div className="d-flex gap-3 align-items-end justify-content-between py-3 border-bottom">
                                    <h5 className="text-nowrap">
                                      S Kumar (#NS56468)
                                      <i className="ms-2 c-accent fas fa-lock"></i>
                                    </h5>
                                    <p className="text-ellipsis">
                                      Last seen at 7:31 pm
                                    </p>
                                  </div>

                                  <div className="row gap-2 py-3">
                                    <div className="col-12">
                                      <div className="text-ellipsis clamp-2">
                                        <span>
                                          31, 5' 8", Mumbai, Hindu, Soni,
                                          Gujarati,
                                        </span>
                                        <span>
                                          Other, ₹ 2 - 3 Lakh, Marketing
                                          Professional, Never Married
                                        </span>
                                      </div>
                                    </div>
                                    <div className="col-12 text-end">
                                      <span className="text-danger">
                                        ePrime
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="options h-100">
                                <div className="option px-3">Accept</div>
                                <div className="option px-3">Decline</div>
                              </div>
                            </div>
                          </article>
                        );
                      })
                    // ) : (
                    //   <div className="text-center my-5">
                    //     <h5 className="mb-4">
                    //       Only paid members can view contacts
                    //     </h5>
                    //     <p>
                    //       Upgrade membership to view contact details and connect
                    //       to your match instantly.
                    //     </p>
                    //   </div>
                    // )
                  }
                </div>

                <div className="section d-none"></div>
              </main>
            </div>

            <div className="col-3 px-0">
              <div className="Custom-accordion">
                <div className="Custom-accordion-item active">
                  <div
                    className="label"
                    onClick={(e) => handleChangeAccordion(e, 0)}
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">INTEREST</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box show">
                    <div className="content">
                      <div className="filter-btn">
                        {[
                          "Interests Received",
                          "Filtered Interests",
                          "Interests Sent",
                        ].map((i, index) => {
                          return (
                            <div
                              key={index}
                              className={`filter-btn-item${
                                view.tab === 0 && view.page === index
                                  ? " active"
                                  : ""
                              }`}
                              onClick={(e) => handleChangeFilterBtnItem(index)}
                            >
                              {i}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item">
                  <div
                    className="label"
                    onClick={(e) => handleChangeAccordion(e, 1)}
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">ACCEPTANCE</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="filter-btn">
                        {["I Accepted", "Accepted Me"].map((i, index) => {
                          return (
                            <div
                              key={index}
                              className={`filter-btn-item${
                                view.tab === 1 && view.page === index
                                  ? " active"
                                  : ""
                              }`}
                              onClick={(e) => handleChangeFilterBtnItem(index)}
                            >
                              {i}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item">
                  <div
                    className="label"
                    onClick={(e) => handleChangeAccordion(e, 2)}
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">MESSAGES</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box">
                    <div className="content py-0"></div>
                  </div>
                </div>

                <div className="Custom-accordion-item">
                  <div
                    className="label"
                    onClick={(e) => handleChangeAccordion(e, 3)}
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">PHOTO REQUESTS</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="filter-btn">
                        {["Recieved", "Sent"].map((i, index) => {
                          return (
                            <div
                              key={index}
                              className={`filter-btn-item${
                                view.tab === 3 && view.page === index
                                  ? " active"
                                  : ""
                              }`}
                              onClick={(e) => handleChangeFilterBtnItem(index)}
                            >
                              {i}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item">
                  <div
                    className="label"
                    onClick={(e) => handleChangeAccordion(e, 4)}
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">
                        DECLINED / BLOCKED MEMBERS
                      </span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="filter-btn">
                        {["Blocked / Ignored", "I Declined", "Declined Me"].map(
                          (i, index) => {
                            return (
                              <div
                                key={index}
                                className={`filter-btn-item${
                                  view.tab === 4 && view.page === index
                                    ? " active"
                                    : ""
                                }`}
                                onClick={(e) =>
                                  handleChangeFilterBtnItem(index)
                                }
                              >
                                {i}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Custom-accordion-item">
                  <div
                    className="label"
                    onClick={(e) => handleChangeAccordion(e, 5)}
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">VIEWED CONTACTS</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="filter-btn">
                        {["I Viewed", "Viewed Me"].map((i, index) => {
                          return (
                            <div
                              key={index}
                              className={`filter-btn-item${
                                view.tab === 5 && view.page === index
                                  ? " active"
                                  : ""
                              }`}
                              onClick={(e) => handleChangeFilterBtnItem(index)}
                            >
                              {i}
                            </div>
                          );
                        })}
                      </div>
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

export default ProfileInbox;
