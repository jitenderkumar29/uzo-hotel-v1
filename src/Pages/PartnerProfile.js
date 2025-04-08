// import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Header from "../Components/_Header";
import Chat from "../Components/_Chat";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import royalBg1Img from "../Assets/images/royal_bg_1.jpg";
import couple2Jpg from "../Assets/images/couple2.jpg";

const PartnerProfile = () => {
  const [navStep, setNavStep] = useState(1);

  const stepOneRef = useRef();
  const stepTwoRef = useRef();
  const stepThreeRef = useRef();
  const stepFourRef = useRef();

  useEffect(() => {
    document.documentElement.removeAttribute("style");
  }, []);

  const jumpToStep = (tab, ref) => {
    setNavStep(tab);
    ref.current.scrollIntoView();
    return;
  };

  return (
    <>
      <Header />

      <section className="Profile-hero Partner-profile Common-hero">
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>
      </section>

      <section className="Profile-grid Partner-profile">
        <div className="container">
          <article className="profile-main">
            <div className="row">
              <div className="col-lg">
                <div className="row h-100">
                  <div className="col-4 px-0">
                    <div className="avatar h-100">
                      <img src={couple2Jpg} alt="" />
                    </div>
                  </div>

                  <div className="col-lg px-4">
                    <div className="d-flex align-items-end justify-content-between py-3 border-bottom">
                      <h4>
                        S Kumar (#NS56468)
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
                        <p>Bhubaneshwar & Cuttack</p>
                        <p>Brahmin</p>
                        <p>Oriya</p>
                      </div>

                      <div className="col-lg">
                        <p>MBA / PGDM</p>
                        <p>Business - Advertising Professional</p>
                        <p>Rs. 15 - 20 Lakh</p>
                        <p>Never Married</p>
                      </div>

                      <div className="col-12">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex gap-3">
                            <div className="btn fs-5">
                              <i className="fas fa-clock-rotate-left"></i>
                            </div>
                            <div className="btn fs-5">
                              <i className="fas fa-share-from-square"></i>
                            </div>
                            <div className="btn fs-5">
                              <i className="fas fa-user-slash"></i>
                            </div>
                            <div className="btn fs-5">
                              <i className="fas fa-flag"></i>
                            </div>
                          </div>
                          <span className="align-self-center text-danger">
                            ePrime
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3 options px-0">
                <div className="option">
                  <i className="fas fa-envelope"></i> Send Interest
                </div>
                <div className="option">
                  <i className="fas fa-address-book"></i> View Contacts
                </div>
                <div className="option">
                  <i className="fas fa-comment"></i> Chats
                </div>
                <div className="option">
                  <i className="fas fa-star"></i> Remove Shortlist
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg">
              <main className="profile-content">
                <div className="nav-btns">
                  <div
                    className={`nav-btn${navStep === 1 ? " active" : ""}`}
                    onClick={() => jumpToStep(1, stepOneRef)}
                  >
                    <i className="fs-3 fas fa-user"></i>
                    <h5>About Him</h5>
                  </div>
                  <div
                    className={`nav-btn${navStep === 2 ? " active" : ""}`}
                    onClick={() => jumpToStep(2, stepTwoRef)}
                  >
                    <i className="fs-3 fas fa-book"></i>
                    <h5>Education & Career</h5>
                  </div>
                  <div
                    className={`nav-btn${navStep === 3 ? " active" : ""}`}
                    onClick={() => jumpToStep(3, stepThreeRef)}
                  >
                    <i className="fs-3 fas fa-user-group"></i>
                    <h5>Family Details</h5>
                  </div>
                  <div
                    className={`nav-btn${navStep === 4 ? " active" : ""}`}
                    onClick={() => jumpToStep(4, stepFourRef)}
                  >
                    <i className="fs-3 fas fa-eye"></i>
                    <h5>Desired Partner</h5>
                  </div>
                </div>

                <div className="section" ref={stepOneRef}>
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-user"></i> About
                    </h5>

                    <span></span>
                  </div>

                  <h6>Profile managed by Relative/Friend</h6>
                  <p>
                    iam simple and like simple living need peaceful life..need a
                    partner who always understand me. nothing expectation.what
                    exactly i will say i have no idea. bas thats enough.
                  </p>

                  <div className="mb-4">
                    <h6>About his Family</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Education</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Occupation</h6>
                    <p>Not filled in</p>
                  </div>
                </div>

                <div className="section" ref={stepTwoRef}>
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-book"></i> Education &
                      Career
                    </h5>

                    <span></span>
                  </div>

                  <div className="row gap-3">
                    <div className="col-lg">
                      <div className="mb-4">
                        <h6>Highest Education</h6>
                        <p>MBA/PGDM</p>
                      </div>
                      <div className="mb-4">
                        <h6>UG Degree</h6>
                        <p>Not filled in</p>
                      </div>
                      <div className="mb-4">
                        <h6>UG College</h6>
                        <p>Not filled in</p>
                      </div>
                      <div className="mb-4">
                        <h6>Other UG Degree</h6>
                        <p>Not filled in</p>
                      </div>
                      <div className="mb-4">
                        <h6>Employed In</h6>
                        <p>Business/ Self Employed</p>
                      </div>
                      <div className="mb-4">
                        <h6>Organization Name</h6>
                        <p>Not filled in</p>
                      </div>
                    </div>

                    <div className="col-lg">
                      <div className="mb-4">
                        <h6>Business/ Self Employed</h6>
                        <p>Not filled in</p>
                      </div>
                      <div className="mb-4">
                        <h6>PG Degree</h6>
                        <p>Not filled in</p>
                      </div>
                      <div className="mb-4">
                        <h6>PG College</h6>
                        <p>Not filled in</p>
                      </div>
                      <div className="mb-4">
                        <h6>Other PG Degree</h6>
                        <p>Not filled in</p>
                      </div>
                      <div className="mb-4">
                        <h6>Occupation</h6>
                        <p>Advertising Professional</p>
                      </div>
                      <div className="mb-4">
                        <h6>Annual Income</h6>
                        <p>Rs. 15 - 20 Lakh</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section" ref={stepThreeRef}>
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-user-group"></i> Family
                      Details
                    </h5>

                    <span></span>
                  </div>

                  <div className="row gap-3">
                    <div className="col-lg">
                      <div className="mb-4">
                        <h6>Mother's Occupation</h6>
                        <p>Housewife</p>
                      </div>
                      <div className="mb-4">
                        <h6>Sister(s)</h6>
                        <p>1 sister of which 1 married</p>
                      </div>
                      <div className="mb-4">
                        <h6>Gothra</h6>
                        <p>mudgolasya</p>
                      </div>
                      <div className="mb-4">
                        <h6>Family Status</h6>
                        <p>Middle Class</p>
                      </div>
                      <div className="mb-4">
                        <h6>Family Type</h6>
                        <p>Nuclear Family</p>
                      </div>
                      <div className="mb-4">
                        <h6>Family based out of</h6>
                        <p>Cuttack, Odisha</p>
                      </div>
                    </div>

                    <div className="col-lg">
                      <div className="mb-4">
                        <h6>Father's Occupation</h6>
                        <p>Retired</p>
                      </div>
                      <div className="mb-4">
                        <h6>Brother(s)</h6>
                        <p>0 brother</p>
                      </div>
                      <div className="mb-4">
                        <h6>Gothra (maternal)</h6>
                        <p>Not filled in</p>
                      </div>
                      <div className="mb-4">
                        <h6>Family Income</h6>
                        <p>Rs. 5 - 7.5 Lakh per Annum</p>
                      </div>
                      <div className="mb-4">
                        <h6>Family Values</h6>
                        <p>Liberal</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-glass-cheers"></i>{" "}
                      Lifestyle
                    </h5>

                    <span></span>
                  </div>

                  <div className="row gap-3">
                    <div className="col-lg">
                      <div className="mb-4">
                        <h6>Habits</h6>
                        <p>Non Vegetarian, Doesn't drink, Doesn't smoke</p>
                      </div>
                      <div className="mb-4">
                        <h6>Languages Known</h6>
                        <p>Oriya</p>
                      </div>
                      <div className="mb-4">
                        <h6>Special Cases</h6>
                        <p>Not filled in</p>
                      </div>
                    </div>

                    <div className="col-lg">
                      <div className="mb-4">
                        <h6>Assets</h6>
                        <p>House - No, Car - Yes</p>
                      </div>
                      <div className="mb-4">
                        <h6>Blood Group</h6>
                        <p>Not filled in</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-heart"></i> He Likes
                    </h5>

                    <span></span>
                  </div>

                  <ul>
                    <li className="py-3">
                      <div className="d-flex align-items-center">
                        <i className="px-4 fas fa-palette"></i>
                        <p>
                          Photography, Film-making, Solving Crosswords, Puzzles
                        </p>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="d-flex align-items-center">
                        <i className="px-4 fas fa-music"></i>
                        <p>
                          Classical - Hindustani, Instrumental - Indian, Old
                          film songs, Ghazals
                        </p>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="d-flex align-items-center">
                        <i className="px-4 fas fa-book-open"></i>
                        <p>
                          Philosophy / Spiritual, Comics, Magazines & Newspapers
                        </p>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="d-flex align-items-center">
                        <i className="px-4 fas fa-tv"></i>
                        <p>kbc</p>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="d-flex align-items-center">
                        <i className="px-4 fas fa-basketball"></i>
                        <p>Jogging / Walking</p>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="d-flex align-items-center">
                        <i className="px-4 fas fa-burger"></i>
                        <p>
                          South Indian, Punjabi, Bengali, Chinese, Spanish, Fast
                          food
                        </p>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="d-flex align-items-center">
                        <i className="px-4 fas fa-plane"></i>
                        <p>my village is swizerland fr me</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="section" ref={stepFourRef}>
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-eye"></i> Desired Partner
                    </h5>

                    <span></span>
                  </div>

                  <h6>Must be Beautiful</h6>

                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col" colSpan={3}>
                          <div className="d-flex py-3 justify-content-between position-relative">
                            <span className="c-accent pe-3">
                              His Preference
                            </span>

                            <span className="px-3">3 of 5 matching</span>

                            <span className="c-accent ps-3">Matches You</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Age</th>
                        <td colSpan={2}>25 to 41 Years</td>
                        <td className="text-center px-5">
                          <i className="fs-5 fas fa-check"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Height</th>
                        <td colSpan={2}>5' 0" to 5' 9"</td>
                        <td className="text-center px-5">
                          <i className="fs-5 fas fa-check"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Caste</th>
                        <td colSpan={2}>
                          Brahmin - All, Vishwakarma, Brahmin Kanyakubj - All,
                          Jatav, Kaibarta,
                        </td>
                        <td className="text-center px-5">
                          <i className="fs-5 fas fa-check"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Mother tongue</th>
                        <td colSpan={2}>Oriya</td>
                        <td className="text-center px-5">
                          <i className="fs-5 fas fa-minus"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                        <td className="text-center px-5">
                          <i className="fs-5 fas fa-minus"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                        <td className="text-center px-5">
                          <i className="fs-5 fas fa-minus"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                        <td className="text-center px-5">
                          <i className="fs-5 fas fa-minus"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                        <td className="text-center px-5">
                          <i className="fs-5 fas fa-minus"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                        <td className="text-center px-5">
                          <i className="fs-5 fas fa-minus"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                        <td className="text-center px-5">
                          <i className="fs-5 fas fa-minus"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="section">
                  <span>Last updated on 14th Mar, 2022</span>
                </div>
              </main>
            </div>

            <div className="col-3">
              <div className="widget">
                <div className="title">
                  <div className="c-accent d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="fa-solid fa-hand-sparkles me-2"></i>
                      Horoscope
                    </h5>

                    <span></span>
                  </div>
                </div>

                <div className="pt-4 px-4">
                  <div className="mb-4">
                    <h6>Place of Birth</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Date of Birth</h6>
                    <p>Mar 02, 1984</p>
                  </div>
                  <div className="mb-4">
                    <h6>Time of Birth</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Sun sign</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Rashi/Moon Sign</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Nakshatra</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Manglik</h6>
                    <p>Not filled in</p>
                  </div>

                  <button className="w-100">Request Horoscope</button>
                </div>
              </div>

              <div className="widget">
                <div className="title">
                  <div className="c-accent d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="fa-solid fa-users me-2"></i>
                      Similar Profiles
                    </h5>

                    <span></span>
                  </div>
                </div>

                <div className="pt-4 px-4">
                  <div className="d-flex flex-column gap-3">
                    {[...Array(10)].map((_, index) => {
                      return (
                        <div key={index} className="profile-card">
                          <div className="avatar">
                            <img src={couple2Jpg} alt="" />
                          </div>

                          <div className="info">
                            <p>36 yrs, 5' 8" ,Bhubaneshwar, India</p>
                            <p>Khandayat, Oriya</p>
                            <p>B.Sc</p>
                            <p>Rs. 10 - 15lac, Govt. - Operator/Technician</p>
                          </div>
                        </div>
                      );
                    })}
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

export default PartnerProfile;
