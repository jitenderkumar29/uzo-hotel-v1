import { Link } from "react-router-dom";

import { useEffect, useState, useRef } from "react";

import Header from "../Components/_Header";
import Chat from "../Components/_Chat";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import royalBg1Img from "../Assets/images/royal_bg_1.jpg";
import couple2Jpg from "../Assets/images/couple2.jpg";

const UserProfile = () => {
  const [percentage, setPercentage] = useState(0);

  const percentageRef = useRef();

  useEffect(() => {
    const init = setTimeout(() => {
      setPercentage(20);
    }, 2000);

    return () => {
      clearTimeout(init);
    };
  }, []);

  const getPercentageForGuage = (value) => (value / 100) * 180 - 45;

  return (
    <>
      <Header />

      <section className="Profile-hero User-profile Common-hero">
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>

        <button>
          Change Cover Photo <i className="ms-2 fas fa-camera"></i>
        </button>
      </section>

      <section className="Profile-grid User-profile">
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
                    <div className="row gap-2 py-3">
                      <div className="col-lg">
                        <p>Upload Photos From</p>
                        <div className="text-center w-25 my-3">
                          <i className="mb-2 fs-1 fas fa-tv"></i>
                          <p>Computer</p>
                        </div>
                        <p>You can set Photo Privacy</p>
                        <div className="btn p-0 mt-2">
                          <h6 className="mb-0">Preview Album</h6>
                        </div>
                      </div>

                      <div className="col-lg">
                        <h6>Add details to your profile</h6>

                        <div className="d-flex flex-column gap-3 mt-3">
                          <p>Upload Photos : +26%</p>
                          <p>Write about You & Family : +15%</p>
                          <p>Add Family details : +7%</p>
                          <p>Add Career details : +4%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3 options py-3">
                <div className="meter">
                  <div className="guage">
                    <div className="mask"></div>
                    <span className="value" ref={percentageRef}>
                      {percentage}%
                    </span>
                    <div className="graph">
                      <div
                        className="valve"
                        style={{
                          transform: `rotate(${getPercentageForGuage(
                            percentage
                          )}deg)`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-3">
                  <h5>Profile Completion</h5>

                  <p>Last Edited on 11th Mar, 2022</p>
                  <p>Profile Views 138</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg">
              <main className="profile-content">
                <div className="section">
                  <div className="d-flex justify-content-between mb-5">
                    <div className="d-flex align-items-center">
                      <h5>
                        <i className="fs-4 me-2 fas fa-user-shield"></i>
                        Critical Fields
                      </h5>
                      <span className="ms-2">
                        - Can be edited only once in lifetime
                      </span>
                    </div>

                    <div className="btn p-0">
                      <h5>Edit</h5>
                    </div>
                  </div>

                  <div className="row gap-3">
                    <div className="col-lg">
                      <div className="mb-4">
                        <h6>Age</h6>
                        <p>36 ( 18th Jun 1985 )</p>
                      </div>
                    </div>

                    <div className="col-lg">
                      <div className="mb-4">
                        <h6>Marital Status</h6>
                        <p>Never Married</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-user"></i> Basic Details
                    </h5>

                    <div className="btn p-0">
                      <h5>Edit</h5>
                    </div>
                  </div>

                  <h3>
                    <span className="c-light">Full Name</span> -{" "}
                    <span>Shivangi Sahoo</span>
                  </h3>

                  <div className="verification-card">
                    <i className="c-accent fs-5 fas fa-shield"></i>
                    Your profile verification is pending...
                    <div className="btn fw-bold p-0 c-accent">
                      Get Verified NOW
                    </div>
                  </div>

                  <div className="row gap-3">
                    <div className="col-lg">
                      <div className="mb-4">
                        <h6>Height</h6>
                        <p>5' 6</p>
                      </div>
                      <div className="mb-4">
                        <h6>Mother Tounge</h6>
                        <p>Hindi - Delhi</p>
                      </div>
                      <div className="mb-4">
                        <h6>Location</h6>
                        <p>New Delhi & Cuttack</p>
                      </div>
                      <div className="mb-4">
                        <h6>Profile Managed By</h6>
                        <p>Sibling</p>
                      </div>
                    </div>

                    <div className="col-lg">
                      <div className="mb-4">
                        <h6>Religion</h6>
                        <p>Hindu</p>
                      </div>
                      <div className="mb-4">
                        <h6>Annual Income</h6>
                        <p>Rs. 2 - 3 Lakh</p>
                      </div>
                      <div className="mb-4">
                        <h6>Caste, Sect</h6>
                        <p>Hindu : Bania, Not filled in</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-user"></i> About
                    </h5>

                    <div className="btn p-0">
                      <h5>Edit</h5>
                    </div>
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

                <div className="section">
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-book"></i> Education &
                      Career
                    </h5>

                    <div className="btn p-0">
                      <h5>Edit</h5>
                    </div>
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

                <div className="section">
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-user-group"></i> Family
                      Details
                    </h5>

                    <div className="btn p-0">
                      <h5>Edit</h5>
                    </div>
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

                    <div className="btn p-0">
                      <h5>Edit</h5>
                    </div>
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
                      <i className="fs-4 me-2 fas fa-heart"></i> Your Likes
                    </h5>

                    <div className="btn p-0">
                      <h5>Edit</h5>
                    </div>
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

                <div className="section">
                  <div className="d-flex justify-content-between mb-5">
                    <h5>
                      <i className="fs-4 me-2 fas fa-eye"></i> Desired Partner
                    </h5>

                    <Link to={"/edit-desired-partner"}>
                      <h5>
                        Edit <i className="ms-2 fas fa-arrow-right"></i>
                      </h5>
                    </Link>
                  </div>

                  <h6>Must be Beautiful</h6>

                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col" colSpan={2}>
                          <div className="d-flex py-3 clearfix justify-content-between position-relative">
                            <span className="c-accent pe-3">
                              Your Preference
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Age</th>
                        <td colSpan={2}>25 to 41 Years</td>
                      </tr>
                      <tr>
                        <th scope="row">Height</th>
                        <td colSpan={2}>5' 0" to 5' 9"</td>
                      </tr>
                      <tr>
                        <th scope="row">Caste</th>
                        <td colSpan={2}>
                          Brahmin - All, Vishwakarma, Brahmin Kanyakubj - All,
                          Jatav, Kaibarta,
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Mother tongue</th>
                        <td colSpan={2}>Oriya</td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                      </tr>
                      <tr>
                        <th scope="row">Income</th>
                        <td colSpan={2}>No Income</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="section">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      Profile Page :
                      https://nobleshaadi/partner-profile/GKf76AS7
                    </span>

                    <div className="btn p-0">
                      <i
                        className="fas fa-share-from-square"
                        style={{ color: "#fff" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </main>
            </div>

            <div className="col-3">
              <div className="widget">
                <div className="title">
                  <div className="c-accent d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="fas fa-phone me-2"></i>
                      Contact Details
                    </h5>

                    <div className="btn p-0">
                      <h5>Edit</h5>
                    </div>
                  </div>
                </div>

                <div className="pt-4 px-4">
                  <div className="mb-4">
                    <h6>Email id</h6>
                    <p>ms2029@rediffmail.com</p>
                  </div>
                  <div className="mb-4">
                    <h6>Alternate Email id</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Mobile No.</h6>
                    <p>+91 0000 000 000</p>
                  </div>
                  <div className="mb-4">
                    <h6>Alternate No.</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Landline No.</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Suitable time to call</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Contact Address</h6>
                    <p>Not filled in</p>
                  </div>
                  <div className="mb-4">
                    <h6>Parent's Address</h6>
                    <p>Not filled in</p>
                  </div>
                </div>
              </div>

              <div className="widget">
                <div className="title">
                  <div className="c-accent d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="fa-solid fa-hand-sparkles me-2"></i>
                      Horoscope
                    </h5>

                    <div className="btn p-0">
                      <h5>Edit</h5>
                    </div>
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

export default UserProfile;
