// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStore } from "../Context/AppContext";

import Header from "../Components/_Header";
import Chat from "../Components/_Chat";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";
import MultiSelect from "../Components/_MultiSelect";

import royalBg1Img from "../Assets/images/royal_bg_1.jpg";
// import couple2Jpg from "../Assets/images/couple2.jpg";

const ProfileSearch = () => {
  const { data } = useStore();
  const [view, setView] = useState({ tab: 0, page: 0 });
  const [category, setCategory] = useState({});

  useEffect(() => {
    setCategory({
      age: {
        initialFrom: "22",
        initialTo: "24",
        options: data.age,
      },
      height: {
        initialFrom: "5.7 Ft",
        initialTo: "6.1 Ft",
        options: data.height,
      },
      maritalStatus: {
        initial: ["Never Married", "Awating Divorce"],
        options: data.maritalStatus,
      },
      haveChildren: {
        initial: [],
        options: data.haveChildren,
      },
      country: {
        initial: ["India"],
        options: data.country,
      },
      religion: {
        initial: [],
        options: data.religion,
      },
      caste: {
        initial: [],
        options: data.caste,
        strictFilter: false,
      },
      motherTounge: {
        initial: ["Hindi", "English"],
        options: data.language,
      },
      manglik: {
        initial: [],
        options: data.manglik,
      },
      highestEducation: {
        initial: [],
        options: data.highestEducation,
      },
      occupation: {
        initial: [],
        options: data.occupation,
      },
      income: {
        rupee: {
          initialFrom: "Rs. 2 Lakh",
          initialTo: "Rs. 5 Lakh",
          options: data.income.rupee,
        },
        dollar: {
          initialFrom: "25,000 USD",
          initialTo: "50,000 USD",
          options: data.income.dollar,
        },
      },
      dietaryHabits: {
        initial: [],
        options: data.dietaryHabits,
      },
      drinkingHabits: {
        initial: [],
        options: data.drinkingHabits,
      },
      smokingHabits: {
        initial: [],
        options: data.smokingHabits,
      },
      challenged: {
        initial: [],
        options: data.challenged,
      },
    });
  }, []);

  const multiSelectMaritalStatusProps = {
    initial: category?.maritalStatus?.initial,
    options: category?.maritalStatus?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectHaveChildrenProps = {
    initial: category?.haveChildren?.initial,
    options: category?.haveChildren?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectCountryProps = {
    initial: category?.country?.initial,
    options: category?.country?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectReligionProps = {
    initial: category?.religion?.initial,
    options: category?.religion?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectCasteProps = {
    initial: category?.caste?.initial,
    options: category?.caste?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectMotherToungeProps = {
    initial: category?.motherTounge?.initial,
    options: category?.motherTounge?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectManglikProps = {
    initial: category?.manglik?.initial,
    options: category?.manglik?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectHighestEducationProps = {
    initial: category?.highestEducation?.initial,
    options: category?.highestEducation?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectOccupationProps = {
    initial: category?.occupation?.initial,
    options: category?.occupation?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectDietaryHabitsProps = {
    initial: category?.dietaryHabits?.initial,
    options: category?.dietaryHabits?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectDrinkingHabitsProps = {
    initial: category?.drinkingHabits?.initial,
    options: category?.drinkingHabits?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectSmokingHabitsProps = {
    initial: category?.smokingHabits?.initial,
    options: category?.smokingHabits?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const multiSelectChallengedProps = {
    initial: category?.challenged?.initial,
    options: category?.challenged?.options,
    callback: (data) => console.log(data),
    disabled: false,
  };

  const handleChangeFilterBtnItem = (page) => setView({ ...view, page });

  return (
    <>
      <Header />

      <section className="ProfileSearch-hero Common-hero">
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>
      </section>

      <section className="Profile-grid">
        <div className="container mt-5">
          <div className="row gap-4 flex-row-reverse pb-5">
            <div className="col-lg">
              {view.page === 0 && (
                <main className="profile-content">
                  <div className="section">
                    <div className="d-flex justify-content-between mb-5">
                      <div className="d-flex align-items-center">
                        <h5>
                          <i className="fs-4 me-2 fas fa-user-shield"></i>
                          Search Criteria
                        </h5>
                        <span></span>
                      </div>

                      <span></span>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Age</h6>
                        </div>

                        <div className="col-lg">
                          <select className="form-select">
                            {category?.age?.options.map((i, index) => {
                              return (
                                <option
                                  key={index}
                                  value={i}
                                  selected={i === category?.age?.initialFrom}
                                >
                                  {i}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div className="col-lg">
                          <select className="form-select">
                            {category?.age?.options.map((i, index) => {
                              return (
                                <option
                                  key={index}
                                  value={i}
                                  selected={i === category?.age?.initialTo}
                                >
                                  {i}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Height</h6>
                        </div>

                        <div className="col-lg">
                          <select className="form-select">
                            {category?.height?.options.map((i, index) => {
                              return (
                                <option
                                  key={index}
                                  value={i}
                                  selected={i === category?.height?.initialFrom}
                                >
                                  {i}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div className="col-lg">
                          <select className="form-select">
                            {category?.height?.options.map((i, index) => {
                              return (
                                <option
                                  key={index}
                                  value={i}
                                  selected={i === category?.height?.initialTo}
                                >
                                  {i}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Religion</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectReligionProps} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Caste</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectCasteProps} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Mother Tongue</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectMotherToungeProps} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Income</h6>
                        </div>

                        <div className="col-9 d-flex flex-wrap gap-4">
                          <div className="col-lg">
                            <select className="form-select">
                              {category?.income?.rupee?.options.map(
                                (i, index) => {
                                  return (
                                    <option
                                      key={index}
                                      value={i}
                                      selected={
                                        i ===
                                        category?.income?.rupee?.initialFrom
                                      }
                                    >
                                      {i}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>

                          <div className="col-lg">
                            <select className="form-select">
                              {category?.income?.rupee?.options.map(
                                (i, index) => {
                                  return (
                                    <option
                                      key={index}
                                      value={i}
                                      selected={
                                        i === category?.income?.rupee?.initialTo
                                      }
                                    >
                                      {i}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>

                          <div className="w-100"></div>

                          <div className="col-lg">
                            <select className="form-select">
                              {category?.income?.dollar?.options.map(
                                (i, index) => {
                                  return (
                                    <option
                                      key={index}
                                      value={i}
                                      selected={
                                        i ===
                                        category?.income?.dollar?.initialFrom
                                      }
                                    >
                                      {i}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>

                          <div className="col-lg">
                            <select className="form-select">
                              {category?.income?.dollar?.options.map(
                                (i, index) => {
                                  return (
                                    <option
                                      key={index}
                                      value={i}
                                      selected={
                                        i ===
                                        category?.income?.dollar?.initialTo
                                      }
                                    >
                                      {i}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Marital Status</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectMaritalStatusProps} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Have Children</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectHaveChildrenProps} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Country</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectCountryProps} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Photo</h6>
                        </div>

                        <div className="col-lg">
                          <div className="w-100 btn btn-primary border">
                            All Profiles
                          </div>
                        </div>

                        <div className="col-lg">
                          <div className="w-100 btn btn-danger border">
                            Profiles with photo only
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section">
                    <div className="d-flex justify-content-between mb-5">
                      <div className="d-flex align-items-center">
                        <h5>
                          <i className="fs-4 me-2 fas fa-hand-sparkles"></i>
                          Astro
                        </h5>
                        <span></span>
                      </div>

                      <span></span>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Manglik</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectManglikProps} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Horoscope Available?</h6>
                        </div>

                        <div className="col-lg">
                          <div className="w-100 btn btn-primary border">
                            Yes
                          </div>
                        </div>

                        <div className="col-lg">
                          <div className="w-100 btn btn-danger border">
                            Doesn't Matter
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section">
                    <div className="d-flex justify-content-between mb-5">
                      <div className="d-flex align-items-center">
                        <h5>
                          <i className="fs-4 me-2 fas fa-book"></i>
                          Education & Career
                        </h5>
                        <span></span>
                      </div>

                      <span></span>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Highest Education</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectHighestEducationProps} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Occupation</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectOccupationProps} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section">
                    <div className="d-flex justify-content-between mb-5">
                      <div className="d-flex align-items-center">
                        <h5>
                          <i className="fs-4 me-2 fas fa-glass-cheers"></i>
                          Lifestyle
                        </h5>
                        <span></span>
                      </div>

                      <span></span>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Dietary Habits</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectDietaryHabitsProps} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Drinking Habits</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectDrinkingHabitsProps} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Smoking Habits</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectSmokingHabitsProps} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section">
                    <div className="d-flex justify-content-between mb-5">
                      <div className="d-flex align-items-center">
                        <h5>
                          <i className="fs-4 me-2 fas fa-ellipsis"></i>
                          Others
                        </h5>
                        <span></span>
                      </div>

                      <span></span>
                    </div>

                    <div className="mb-5">
                      <div className="row">
                        <div className="col-3">
                          <h6>Challenged</h6>
                        </div>

                        <div className="col-lg">
                          <MultiSelect {...multiSelectChallengedProps} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section">
                    <div className="row justify-content-center">
                      <div className="col-3">
                        <button className="w-100">SEARCH</button>
                      </div>
                    </div>
                  </div>

                  <div className="section d-none"></div>
                </main>
              )}

              {view.page === 1 && (
                <main className="profile-content">
                  <div className="section">
                    <div className="text-center">
                      <h5>Saved Seatches 0</h5>

                      <p>You haven't saved any searches yet</p>

                      <div className="mt-5">
                        <a href="/profile-search">
                          <button>Start a Search</button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="section d-none"></div>
                </main>
              )}

              {view.page === 2 && (
                <main className="profile-content">
                  <div className="section">
                    <div className="text-center">
                      {/* <h5>Saved Seatches 0</h5> */}
                      <div className="row justify-content-center">
                        <div className="col-9">
                          <h5>Search Profile</h5>
                        </div>
                      </div>

                      <div className="mt-2">
                        <div className="row justify-content-center">
                          <div className="col-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Profile ID ..."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="row justify-content-center">
                          <div className="col-9">
                            <div className="col-3 mx-auto">
                              <a href="/profile-search">
                                <button className="w-100">Search</button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section d-none"></div>
                </main>
              )}
            </div>

            <div className="col-3 px-0">
              <div className="Custom-accordion">
                <div className="Custom-accordion-item active">
                  <div className="label">
                    <div className="d-flex gap-3 align-items-center">
                      <i className="fas fa-angle-right"></i>
                      <span className="fw-bold">SEARCH OPTIONS</span>
                    </div>
                    <span></span>
                  </div>

                  <div className="box show">
                    <div className="content">
                      <div className="filter-btn">
                        {[
                          "Search",
                          "My Saved Searches",
                          "Search By Profile ID",
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

export default ProfileSearch;
