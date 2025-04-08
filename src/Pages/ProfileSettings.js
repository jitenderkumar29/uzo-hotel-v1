import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import Chat from "../Components/_Chat";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";
// import MultiSelect from "../Components/_MultiSelect";

import royalBg1Img from "../Assets/images/royal_bg_1.jpg";
// import couple2Jpg from "../Assets/images/couple2.jpg";

const ProfileSettings = () => {
  const [view, setView] = useState({
    tab: 0,
    page: 0,
  });

  const handleChangeFilterBtnItem = (page) => {
    setView({ ...view, page });

    return;
  };

  return (
    <>
      <Header />

      <section className="ProfileSettings-hero Common-hero">
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>
      </section>

      <section className="ProfileSettings-grid Profile-grid">
        <div className="container mt-5">
          <div className="row gap-4 flex-row-reverse pb-5">
            <div className="col-lg">
              {view.page === 0 && <SettingPage0 />}

              {view.page === 1 && <SettingPage1 />}

              {view.page === 2 && <SettingPage2 />}

              {view.page === 3 && <SettingPage3 setView={setView} />}

              {view.page === 4 && <SettingPage4 />}

              {view.page === 5 && <SettingPage5 />}
            </div>

            <div className="col-3 px-0">
              <div className="Custom-accordion">
                <div className="Custom-accordion-item active">
                  <div className="label">
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">SETTINGS OPTIONS</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box show">
                    <div className="content">
                      <div className="filter-btn">
                        {[
                          "Profile Visibility",
                          "Alert Manager",
                          "Hide Profile",
                          "Delete Profile",
                          "Change Password",
                          "Membership Details",
                        ].map((i, index) => {
                          return (
                            <div
                              key={index}
                              className={`filter-btn-item${
                                view.tab === 0 && view.page === index
                                  ? " active"
                                  : ""
                              }`}
                              onClick={() => handleChangeFilterBtnItem(index)}
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

const SettingPage0 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      profileVisibility: {
        initial: 1,
        options: [
          "Allow my detailed profile to be viewed by all visitors.",
          "Allow my detailed profile to be viewed only by registered users who pass my filters.",
          `Don't show my detailed profile or summary profile to any user, I will search and contact profiles. Summary profile will also not viewable by any visitor`,
        ],
      },
    });
  }, []);

  return (
    <main className="profile-content">
      <div className="section">
        <div className="d-flex justify-content-between mb-5">
          <div className="d-flex align-items-center">
            <h5>
              <i className="fs-4 me-2 fas fa-user-shield"></i>
              Profile Visibility
            </h5>
            <span></span>
          </div>

          <span></span>
        </div>

        <div className="d-flex gap-3">
          {data?.profileVisibility?.options.map((i, index) => {
            return (
              <div key={index} className="col-lg">
                <div className="settings-widget-1">
                  <div className="p-3 main">
                    <p>{i}</p>
                  </div>
                  <div className="w-100 foot">
                    <div
                      className={`btn btn-${
                        index === data?.profileVisibility?.initial
                          ? "danger"
                          : "primary"
                      } border w-100`}
                      onClick={() =>
                        setData((prevState) => ({
                          ...prevState,
                          profileVisibility: {
                            ...prevState.profileVisibility,
                            initial: index,
                          },
                        }))
                      }
                    >
                      {index === data?.profileVisibility?.initial
                        ? "Applied"
                        : "Set"}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section d-none"></div>
    </main>
  );
};

const SettingPage1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      alertManager: {
        mail: {
          match: {
            initial: 0,
            options: ["Daily", "3 Times / Week", "Unsubscribe"],
          },
          visitor: {
            initial: 0,
            options: ["Daily", "Days I Don't Login", "Unsubscribe"],
          },
          membership: {
            initial: false,
            description:
              "Receive mails from NoobleShaadi about membership options and offers",
          },
          newMatches: {
            initial: false,
            description:
              "Receive mails where NoobleShaadi recommends new profiles to you.",
          },
          contact: {
            initial: false,
            description:
              "Receive mails when someone on NoobleShaadi 'Expresses Interest' in your profile.",
          },
          photoRequest: {
            initial: false,
            description:
              "Receive mails when someone in NoobleShaadi 'Requests you to upload photo' in your profile.",
          },
          kundli: {
            initial: false,
            description:
              "Receive mails where NoobleShaadi recommends a profile to you based on astrological compatibility.",
          },
          service: {
            initial: false,
            description:
              "Receive mails (other than Visitor Alert/ Match Alert / Photo request) from NoobleShaadi.",
          },
          promotional: {
            initial: false,
            description:
              "Receive mails from 3rd Party other than NoobleShaadi.",
          },
        },
        sms: {
          membership: {
            initial: false,
            description:
              "Receive membership information and special offers from NoobleShaadi for your profile.",
          },
          transactional: {
            initial: false,
            description:
              "Receive important notifications from NoobleShaadi on your profile.",
          },
        },
        call: {
          membership: {
            initial: false,
            description: "Receive calls for Paid Membership options",
          },
          offer: {
            initial: false,
            description:
              "Receive calls for Special offers / discounts on Membership",
          },
          websiteHelp: {
            initial: false,
            description: "Receive calls for Explanation of site features",
          },
          profileCompletion: {
            initial: false,
            description: "Receive calls which aid in 'Completion of Profile'",
          },
        },
      },
    });
  }, []);

  const { match, visitor, ...alertManagerMailBooleans } =
    data?.alertManager?.mail || {};

  const { ...alertManagerSmsBooleans } = data?.alertManager?.sms || {};

  const { ...alertManagerCallBooleans } = data?.alertManager?.call || {};

  return (
    <main className="profile-content">
      <div className="section">
        <div className="d-flex justify-content-between mb-5">
          <div className="d-flex align-items-center">
            <h5>
              <i className="fs-4 me-2 fas fa-envelope"></i>
              Mail Alerts
            </h5>
            <span></span>
          </div>

          <span></span>
        </div>

        <div className="mb-5">
          <div className="row">
            <div className="col-3">
              <h6>Match Alert Mails</h6>
            </div>

            <div className="col-lg">
              <p>
                Receive mails where NobleShaadi recommends a profile to you.
              </p>
              <div className="d-flex gap-2">
                {data?.alertManager?.mail?.match?.options.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className={`btn btn-${
                        index === data?.alertManager?.mail?.match?.initial
                          ? "primary"
                          : "danger"
                      } border filter-btn text-ellipsis`}
                      onClick={() =>
                        setData((prevState) => ({
                          ...prevState,
                          alertManager: {
                            ...prevState.alertManager,
                            mail: {
                              ...prevState.alertManager.mail,
                              match: {
                                ...prevState.alertManager.mail.match,
                                initial: index,
                              },
                            },
                          },
                        }))
                      }
                    >
                      {i}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-2"></div>
          </div>
        </div>

        <div className="mb-5">
          <div className="row">
            <div className="col-3">
              <h6>Visitor Alert Mails</h6>
            </div>

            <div className="col-lg">
              <p>
                Receive mails from NoobleShaadi when someone visits your profile
              </p>
              <div className="d-flex gap-2">
                {data?.alertManager?.mail?.visitor?.options.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className={`btn btn-${
                        index === data?.alertManager?.mail?.visitor?.initial
                          ? "primary"
                          : "danger"
                      } border filter-btn text-ellipsis`}
                      onClick={() =>
                        setData((prevState) => ({
                          ...prevState,
                          alertManager: {
                            ...prevState.alertManager,
                            mail: {
                              ...prevState.alertManager.mail,
                              visitor: {
                                ...prevState.alertManager.mail.visitor,
                                initial: index,
                              },
                            },
                          },
                        }))
                      }
                    >
                      {i}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-2"></div>
          </div>
        </div>

        {Object.keys(alertManagerMailBooleans).map((i, index) => {
          return (
            <div key={index} className="mb-5">
              <div className="row">
                <div className="col-3">
                  <h6>
                    {`${i
                      .replace(/([a-z])([A-Z])/g, "$1 $2")
                      .replace(/\b\w/g, (c) => c.toUpperCase())} Alert Mails`}
                  </h6>
                </div>

                <div className="col-lg">
                  <p>{alertManagerMailBooleans[i].description}</p>
                </div>

                <div className="col-2 text-end">
                  <div className="form-check form-switch p-0 ms-auto w-fc">
                    <input
                      className="form-check-input m-0"
                      type="checkbox"
                      role="switch"
                      checked={data?.alertManager?.mail?.[i]?.initial}
                      onChange={() =>
                        setData((prevState) => ({
                          ...prevState,
                          alertManager: {
                            ...prevState.alertManager,
                            mail: {
                              ...prevState.alertManager.mail,
                              [i]: {
                                ...prevState.alertManager.mail[i],
                                initial:
                                  !prevState.alertManager.mail[i].initial,
                              },
                            },
                          },
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="col-2"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section">
        <div className="d-flex justify-content-between mb-5">
          <div className="d-flex align-items-center">
            <h5>
              <i className="fs-4 me-2 fas fa-comment"></i>
              SMS Alerts
            </h5>
            <span></span>
          </div>

          <span></span>
        </div>

        {Object.keys(alertManagerSmsBooleans).map((i, index) => {
          return (
            <div key={index} className="mb-5">
              <div className="row">
                <div className="col-3">
                  <h6>
                    {`${i
                      .replace(/([a-z])([A-Z])/g, "$1 $2")
                      .replace(/\b\w/g, (c) => c.toUpperCase())} Sms`}
                  </h6>
                </div>

                <div className="col-lg">
                  <p>{alertManagerSmsBooleans[i].description}</p>
                </div>

                <div className="col-2 text-end">
                  <div className="form-check form-switch p-0 ms-auto w-fc">
                    <input
                      className="form-check-input m-0"
                      type="checkbox"
                      role="switch"
                      checked={data?.alertManager?.sms?.[i]?.initial}
                      onChange={() =>
                        setData((prevState) => ({
                          ...prevState,
                          alertManager: {
                            ...prevState.alertManager,
                            sms: {
                              ...prevState.alertManager.sms,
                              [i]: {
                                ...prevState.alertManager.sms[i],
                                initial: !prevState.alertManager.sms[i].initial,
                              },
                            },
                          },
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="col-2"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section">
        <div className="d-flex justify-content-between mb-5">
          <div className="d-flex align-items-center">
            <h5>
              <i className="fs-4 me-2 fas fa-phone"></i>
              Call Alerts
            </h5>
            <span></span>
          </div>

          <span></span>
        </div>

        {Object.keys(alertManagerCallBooleans).map((i, index) => {
          return (
            <div key={index} className="mb-5">
              <div className="row">
                <div className="col-3">
                  <h6>
                    {`${i
                      .replace(/([a-z])([A-Z])/g, "$1 $2")
                      .replace(/\b\w/g, (c) => c.toUpperCase())} Calls`}
                  </h6>
                </div>

                <div className="col-lg">
                  <p>{alertManagerCallBooleans[i].description}</p>
                </div>

                <div className="col-2 text-end">
                  <div className="form-check form-switch p-0 ms-auto w-fc">
                    <input
                      className="form-check-input m-0"
                      type="checkbox"
                      role="switch"
                      checked={data?.alertManager?.call?.[i]?.initial}
                      onChange={() =>
                        setData((prevState) => ({
                          ...prevState,
                          alertManager: {
                            ...prevState.alertManager,
                            call: {
                              ...prevState.alertManager.call,
                              [i]: {
                                ...prevState.alertManager.call[i],
                                initial:
                                  !prevState.alertManager.call[i].initial,
                              },
                            },
                          },
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="col-2"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section d-none"></div>
    </main>
  );
};

const SettingPage2 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      hideProfile: {
        initial: 0,
        options: ["7 Days", "15 Days", "30 Days"],
      },
    });
  }, []);

  return (
    <main className="profile-content">
      <div className="section">
        <div className="d-flex justify-content-between mb-5">
          <div className="d-flex align-items-center">
            <h5>
              <i className="fs-4 me-2 fas fa-user-secret"></i>
              Hide your Profile
            </h5>
            <span></span>
          </div>

          <span></span>
        </div>
        <div className="mb-5">
          <div className="row">
            <div className="col-3">
              <h6>Hide my Profile for</h6>
            </div>

            <div className="col-lg">
              <p>
                Use this feature when you have decided to stop looking
                temporarily since you are busy, moving, in the middle of some
                big lifestyle changes and cannot spare the time to look
                seriously.
              </p>

              <div className="d-flex gap-2 mb-5">
                {data?.hideProfile?.options.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className={`btn btn-${
                        index === data?.hideProfile?.initial
                          ? "primary"
                          : "danger"
                      } border filter-btn text-ellipsis`}
                      onClick={() =>
                        setData((prevState) => ({
                          ...prevState,
                          hideProfile: {
                            ...prevState.hideProfile,
                            initial: index,
                          },
                        }))
                      }
                    >
                      {i}
                    </div>
                  );
                })}
              </div>

              <input
                type="text"
                className="form-control"
                placeholder="Confirm Password"
              />

              <div className="mt-3">
                <button className="border btn-danger disable w-100">
                  Hide My Profile
                </button>
              </div>
            </div>

            <div className="col-2"></div>
          </div>
        </div>
      </div>

      <div className="section d-none"></div>
    </main>
  );
};

const SettingPage3 = ({ setView }) => {
  const [accordion, setAccordion] = useState({
    tab: 0,
    option: 0,
  });

  return (
    <main className="profile-content">
      <div className="section">
        <div className="d-flex justify-content-between mb-5">
          <div className="d-flex align-items-center">
            <h5>
              <i className="fs-4 me-2 fas fa-face-sad-cry"></i>
              Looks like this is goodbye!
            </h5>
            <span></span>
          </div>

          <span></span>
        </div>
        <div className="mb-5">
          <div className="row">
            <div className="col-3">
              <h6>Account Deletion</h6>
            </div>

            <div className="col-lg">
              <p>
                Before you go, help us understand why you've decided to delete
                your account permanently
              </p>

              <div className="accordion mb-5" id="faqAccordion">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="heading0"
                    onClick={() => setAccordion({ tab: 0, option: 0 })}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse0"
                      aria-expanded="false"
                      aria-controls="collapse0"
                    >
                      I found my match
                    </button>
                  </h2>
                  <div
                    id="collapse0"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading0"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>Please specify your source</p>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 0 && accordion.option === 0
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 0 })
                            }
                          />
                          Through NoobleShaadi
                        </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 0 && accordion.option === 1
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 1 })
                            }
                          />
                          Through other sources
                        </label>
                      </div>
                      {accordion.tab === 0 && accordion.option === 1 && (
                        <div className="d-flex flex-wrap gap-2 mt-3">
                          <div className="px-3 py-1 border rounded-pill">
                            Family
                          </div>
                          <div className="px-3 py-1 border rounded-pill">
                            Friends
                          </div>
                          <div className="px-3 py-1 border rounded-pill">
                            Another Websites
                          </div>
                          <div className="px-3 py-1 border rounded-pill">
                            Merriage Centers
                          </div>
                          <div className="px-3 py-1 border rounded-pill">
                            News Papers
                          </div>
                          <div className="px-3 py-1 border rounded-pill">
                            Others
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="heading1"
                    onClick={() => setAccordion({ tab: 1, option: 0 })}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                      Not satisfied with services
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>What makes you unsatisfied ?</p>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 1 && accordion.option === 0
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 0 })
                            }
                          />
                          Irrelevant Matches
                        </label>
                      </div>
                      {accordion.tab === 1 && accordion.option === 0 && (
                        <div className="alert alert-danger mt-3" role="alert">
                          You can edit your desired partner preferences to get
                          more relevant matches.
                          <div className="mt-2">
                            <Link
                              to={"/edit-desired-partner"}
                              className="alert-link"
                            >
                              Edit Preferences
                            </Link>
                          </div>
                        </div>
                      )}
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 1 && accordion.option === 1
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 1 })
                            }
                          />
                          Repeated Matches
                        </label>
                      </div>
                      {accordion.tab === 1 && accordion.option === 1 && (
                        <div className="alert alert-danger mt-3" role="alert">
                          We have noted this and you will not be receiving
                          repeated matches going forward.
                          <div className="mt-2">
                            <Link to={"/"} className="alert-link">
                              Continue Browsing
                            </Link>
                          </div>
                        </div>
                      )}
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 1 && accordion.option === 2
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 2 })
                            }
                          />
                          Few Matches/ Responses
                        </label>
                      </div>
                      {accordion.tab === 1 && accordion.option === 2 && (
                        <div className="alert alert-danger mt-3" role="alert">
                          You can relax your desired partner preferences to get
                          more matches.
                          <div className="mt-2">
                            <Link
                              to={"/edit-desired-partner"}
                              className="alert-link"
                            >
                              Edit Preferences
                            </Link>
                          </div>
                        </div>
                      )}
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 1 && accordion.option === 3
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 3 })
                            }
                          />
                          Membership plans are expensive
                        </label>
                      </div>
                      {accordion.tab === 1 && accordion.option === 3 && (
                        <div className="alert alert-danger mt-3" role="alert">
                          Get our best discounts planned only for you.
                          <div className="mt-2">
                            <Link to={"/contact-us"} className="alert-link">
                              Request a call back
                            </Link>
                          </div>
                        </div>
                      )}
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 1 && accordion.option === 4
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 4 })
                            }
                          />
                          Technical Issue
                        </label>
                      </div>
                      {accordion.tab === 1 && accordion.option === 4 && (
                        <div className="alert alert-danger mt-3" role="alert">
                          Apologies for the inconvenience. We will connect with
                          you and rectify it at the earliest.
                          <div className="mt-2">
                            <Link to={"/contact-us"} className="alert-link">
                              Request a call back
                            </Link>
                          </div>
                        </div>
                      )}
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 1 && accordion.option === 5
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 5 })
                            }
                          />
                          Privacy Issue
                        </label>
                      </div>
                      {accordion.tab === 1 && accordion.option === 5 && (
                        <div className="alert alert-danger mt-3" role="alert">
                          You can edit your profile privacy settings for photo
                          and phone no. visibility.
                          <div className="mt-2">
                            <Link
                              to={"/edit-desired-partner"}
                              className="alert-link"
                            >
                              Edit Preferences
                            </Link>
                          </div>
                        </div>
                      )}
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 1 && accordion.option === 6
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 6 })
                            }
                          />
                          Too many calls and mails
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="heading2"
                    onClick={() => setAccordion({ tab: 2, option: 0 })}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      Marry Later/ Create profile later
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>When will you be back ?</p>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 2 && accordion.option === 0
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 0 })
                            }
                          />
                          15 Days
                        </label>
                      </div>
                      {accordion.tab === 2 && accordion.option === 0 && (
                        <div className="alert alert-danger mt-3" role="alert">
                          You can instead deactivate your profile temporarily.
                          We will retain your profile details and contacts
                          viewed, and welcome you back after 15 days.
                          <div className="mt-2">
                            <Link
                              to={"#"}
                              className="alert-link"
                              onClick={() => setView({ tab: 0, page: 2 })}
                            >
                              Deactivate Profile Temporarily
                            </Link>
                          </div>
                        </div>
                      )}

                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 2 && accordion.option === 1
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 1 })
                            }
                          />
                          15 days to 1 month
                        </label>
                      </div>
                      {accordion.tab === 2 && accordion.option === 1 && (
                        <div className="alert alert-danger mt-3" role="alert">
                          You can instead deactivate your profile temporarily.
                          We will retain your profile details and contacts
                          viewed, and welcome you back after 30 days.
                          <div className="mt-2">
                            <Link
                              to={"#"}
                              className="alert-link"
                              onClick={() => setView({ tab: 0, page: 2 })}
                            >
                              Deactivate Profile Temporarily
                            </Link>
                          </div>
                        </div>
                      )}

                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 2 && accordion.option === 2
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 2 })
                            }
                          />
                          1 to 3 months
                        </label>
                      </div>

                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 2 && accordion.option === 3
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 3 })
                            }
                          />
                          3 to 6 months
                        </label>
                      </div>

                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 2 && accordion.option === 4
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 4 })
                            }
                          />
                          6 to 12 months
                        </label>
                      </div>

                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 2 && accordion.option === 5
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 5 })
                            }
                          />
                          1 year and later
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="heading3"
                    onClick={() => setAccordion({ tab: 3, option: 0 })}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      Profile/Privacy Issue
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>What issues are you facing ?</p>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 3 && accordion.option === 0
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 0 })
                            }
                          />
                          I have to do some changes in my profile
                        </label>
                      </div>
                      {accordion.tab === 3 && accordion.option === 0 && (
                        <div className="alert alert-danger mt-3" role="alert">
                          You can add or edit your profile details in your
                          current profile.
                          <div className="mt-2">
                            <Link to={"/user-profile"} className="alert-link">
                              Edit Profile
                            </Link>
                          </div>
                        </div>
                      )}

                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountdeletionradiobtn"
                            checked={
                              accordion.tab === 3 && accordion.option === 1
                            }
                            onChange={(e) =>
                              e.target.checked &&
                              setAccordion({ ...accordion, option: 1 })
                            }
                          />
                          Facing privacy issues
                        </label>
                      </div>
                      {accordion.tab === 3 && accordion.option === 1 && (
                        <div className="alert alert-danger mt-3" role="alert">
                          You can edit your profile privacy settings for photo
                          and phone no. visibility.
                          <div className="mt-2">
                            <Link to={"/user-profile"} className="alert-link">
                              Edit Preferences
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="heading4"
                    onClick={() => setAccordion({ tab: 4, option: 0 })}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      Other Reasons
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>Give us your feedback and help us improve</p>

                      <textarea
                        className="form-control"
                        cols="30"
                        rows="6"
                        placeholder="Enter your message here ..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <input
                type="text"
                className="form-control"
                placeholder="Confirm Password"
              />

              <div className="mt-3">
                <button className="border btn-danger disable w-100">
                  Delete My Account
                </button>
              </div>
            </div>

            <div className="col-2"></div>
          </div>
        </div>
      </div>

      <div className="section d-none"></div>
    </main>
  );
};

const SettingPage4 = () => {
  return (
    <main className="profile-content">
      <div className="section">
        <div className="d-flex justify-content-between mb-5">
          <div className="d-flex align-items-center">
            <h5>
              <i className="fs-4 me-2 fas fa-lock"></i>
              Security
            </h5>
            <span></span>
          </div>

          <span></span>
        </div>
        <div className="mb-5">
          <div className="row">
            <div className="col-3">
              <h6>Change Password</h6>
            </div>

            <div className="col-lg">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Current Password"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="New Password"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Re-Enter New Password"
                />
              </div>

              <div className="mt-5">
                <button className="border btn-danger disable w-100">
                  Save New Password
                </button>
              </div>
            </div>

            <div className="col-2"></div>
          </div>
        </div>
      </div>

      <div className="section d-none"></div>
    </main>
  );
};

const SettingPage5 = () => {
  return (
    <main className="profile-content">
      <div className="section">
        <div className="d-flex justify-content-between mb-5">
          <div className="d-flex align-items-center">
            <h5>
              <i className="fs-4 me-2 fas fa-id-card-clip"></i>
              Membership Features
            </h5>
            <span></span>
          </div>

          <span></span>
        </div>

        <div className="mb-5">
          <div className="row">
            <div className="col-3">
              <h6>Basic Details</h6>
            </div>

            <div className="col-lg">
              <div className="mb-3">
                <div className="list">
                  <div className="d-flex justify-content-between pb-3 border-bottom">
                    <span>Matrimony ID :</span>
                    <span className="fw-bold">H9404723</span>
                  </div>
                  <div className="d-flex justify-content-between py-3 border-bottom">
                    <span>Membership Type :</span>
                    <span className="fw-bold">Gold</span>
                  </div>
                  <div className="d-flex justify-content-between py-3 border-bottom">
                    <span>Membership Status :</span>
                    <span className="fw-bold">Active</span>
                  </div>
                  <div className="d-flex justify-content-between py-3 border-bottom">
                    <span>Membership Validity :</span>
                    <span className="fw-bold">90 days</span>
                  </div>
                  <div className="d-flex justify-content-between py-3 border-bottom">
                    <span>Renewal Due Date :</span>
                    <span className="fw-bold">29th June 2022</span>
                  </div>
                  <div className="d-flex justify-content-between py-3">
                    <span>Last Renewed :</span>
                    <span className="fw-bold">31st March 2022</span>
                  </div>
                </div>
              </div>

              <div className="alert alert-secondary mb-3" role="alert">
                Your membership will expire on 29th June 2022
                <div className="mt-2">
                  <Link to={"/membership-plans"} className="alert-link">
                    Upgrade My Plan
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-2"></div>
          </div>
        </div>

        <div className="mb-5">
          <div className="row">
            <div className="col-3">
              <h6>Auto Renewal</h6>
            </div>

            <div className="col-lg">
              <p>Your membership will autorenew on 29th June 2022.</p>
            </div>

            <div className="col-2 text-end">
              <div className="form-check form-switch p-0 ms-auto w-fc">
                <input
                  className="form-check-input m-0"
                  type="checkbox"
                  role="switch"
                />
              </div>
            </div>

            <div className="col-2"></div>
          </div>
        </div>

        <div className="mb-5">
          <div className="row">
            <div className="col-3">
              <h6>Mobile Numbers Count</h6>
            </div>

            <div className="col-lg">
              <div className="mb-3">
                <div className="list">
                  <div className="d-flex justify-content-between pb-3 border-bottom">
                    <span>Total Count :</span>
                    <span className="fw-bold">Unlimited *</span>
                  </div>
                  <div className="d-flex justify-content-between py-3 border-bottom">
                    <span>Count Left :</span>
                    <span className="fw-bold">Unlimited *</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2"></div>
          </div>
        </div>

        <div className="mb-5">
          <div className="row">
            <div className="col-3">
              <h6>Sms Count</h6>
            </div>

            <div className="col-lg">
              <div className="mb-3">
                <div className="list">
                  <div className="d-flex justify-content-between pb-3 border-bottom">
                    <span>Total Count :</span>
                    <span className="fw-bold">90</span>
                  </div>
                  <div className="d-flex justify-content-between py-3 border-bottom">
                    <span>Count Left :</span>
                    <span className="fw-bold">69</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2"></div>
          </div>
        </div>
      </div>

      <div className="section d-none"></div>
    </main>
  );
};

export default ProfileSettings;
