import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";
import MultiSelect from "../Components/_MultiSelect";

import royalBg1Img from "../Assets/images/royal_bg_1.jpg";
// import couple2Jpg from "../Assets/images/couple2.jpg";

const EditDesiredPartner = () => {
  return (
    <>
      <Header />

      <section className="Profile-hero Common-hero">
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>
      </section>

      <section className="Documentation-content pt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-9">
              <div className="d-flex flex-column gap-2 pb-2 text-center">
                <h2>Desired Partner</h2>
                <p>
                  The criteria you mention here determines the 'Desired Partner
                  Matches' you see. So please review this information carefully.
                  Moreover, Filters determine whose Interests/Calls you want to
                  receive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Profile-grid User-profile">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-9">
              <main className="profile-content">
                <EditableSection1 />

                <EditableSection2 />

                <EditableSection3 />

                <EditableSection4 />

                <EditableSection5 />

                <div className="section"></div>
              </main>
            </div>
          </div>
        </div>
      </section>

      <FooterTop />
      <Contact />
      <Footer />
    </>
  );
};

const EditableSection1 = () => {
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      age: {
        initialFrom: "22",
        initialTo: "24",
        options: [
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
        ],
        strictFilter: true,
      },
      height: {
        initialFrom: "5.7 Ft",
        initialTo: "6.1 Ft",
        options: [
          "4.0 Ft",
          "4.1 Ft",
          "4.2 Ft",
          "4.3 Ft",
          "4.4 Ft",
          "4.5 Ft",
          "4.6 Ft",
          "4.7 Ft",
          "4.8 Ft",
          "4.9 Ft",
          "4.10 Ft",
          "4.11 Ft",
          "5.0 Ft",
          "5.1 Ft",
          "5.2 Ft",
          "5.3 Ft",
          "5.4 Ft",
          "5.5 Ft",
          "5.6 Ft",
          "5.7 Ft",
          "5.8 Ft",
          "5.9 Ft",
          "5.10 Ft",
          "5.11 Ft",
          "6.0 Ft",
          "6.1 Ft",
          "6.2 Ft",
          "6.3 Ft",
          "6.4 Ft",
          "6.5 Ft",
          "6.6 Ft",
          "6.7 Ft",
          "6.8 Ft",
          "6.9 Ft",
          "6.10 Ft",
          "6.11 Ft",
          "7.0 Ft",
        ],
      },
      maritalStatus: {
        initial: ["Never Married", "Awating Divorce"],
        options: [
          "Never Married",
          "Awating Divorce",
          "Divorced",
          "Widowed",
          "Annulled",
        ],
        strictFilter: false,
      },
      haveChildren: {
        initial: [],
        options: ["No", "Yes, Living Together", "Yes, Living Separately"],
      },
      country: {
        initial: ["India"],
        options: [
          "India",
          "Australia",
          "Dubai",
          "London",
          "Italy",
          "Rome",
          "Russia",
        ],
        strictFilter: false,
      },
    });
  }, []);

  const multiSelectMaritalStatusProps = {
    initial: data?.maritalStatus?.initial,
    options: data?.maritalStatus?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const multiSelectHaveChildrenProps = {
    initial: data?.haveChildren?.initial,
    options: data?.haveChildren?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const multiSelectCountryProps = {
    initial: data?.country?.initial,
    options: data?.country?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const toggleEditMode = () => {
    if (!editMode) {
      setEditMode(true);
      return;
    }

    console.log("save");
    setEditMode(false);
  };

  const toggleStrictFilter = (property) => {
    if (!editMode) return;

    setData((prevState) => ({
      ...prevState,
      [property]: {
        ...prevState[property],
        strictFilter: !prevState[property].strictFilter,
      },
    }));
    return;
  };

  return (
    <div className="section">
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex align-items-center">
          <h5>
            <i className="fs-4 me-2 fas fa-user-shield"></i>
            Basic details
          </h5>
          <span></span>
        </div>

        <div className="btn p-0" onClick={toggleEditMode}>
          <h5>{editMode ? "Save" : "Edit"}</h5>
        </div>
      </div>

      <div className="mb-5">
        <div className="row">
          <div className="col-3">
            <h6>Age</h6>
          </div>

          <div className="col-lg">
            <select className="form-select" disabled={!editMode}>
              {data?.age?.options.map((i, index) => {
                return (
                  <option
                    key={index}
                    value={i}
                    selected={i === data?.age?.initialFrom}
                  >
                    {i}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-lg">
            <select className="form-select" disabled={!editMode}>
              {data?.age?.options.map((i, index) => {
                return (
                  <option
                    key={index}
                    value={i}
                    selected={i === data?.age?.initialTo}
                  >
                    {i}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-2">
            <div
              className={`btn w-100 btn${
                data?.age?.strictFilter ? "-primary" : "-danger"
              } border${!editMode ? " disable" : ""}`}
              onClick={() => toggleStrictFilter("age")}
            >
              Filter {data?.age?.strictFilter ? "ON" : "OFF"}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="row">
          <div className="col-3">
            <h6>Height</h6>
          </div>

          <div className="col-lg">
            <select className="form-select" disabled={!editMode}>
              {data?.height?.options.map((i, index) => {
                return (
                  <option
                    key={index}
                    value={i}
                    selected={i === data?.height?.initialFrom}
                  >
                    {i}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-lg">
            <select className="form-select" disabled={!editMode}>
              {data?.height?.options.map((i, index) => {
                return (
                  <option
                    key={index}
                    value={i}
                    selected={i === data?.height?.initialTo}
                  >
                    {i}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-2"></div>
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

          <div className="col-2">
            <div
              className={`btn w-100 btn${
                data?.maritalStatus?.strictFilter ? "-primary" : "-danger"
              } border${!editMode ? " disable" : ""}`}
              onClick={() => toggleStrictFilter("maritalStatus")}
            >
              Filter {data?.maritalStatus?.strictFilter ? "ON" : "OFF"}
            </div>
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

          <div className="col-2"></div>
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

          <div className="col-2">
            <div
              className={`btn w-100 btn${
                data?.country?.strictFilter ? "-primary" : "-danger"
              } border${!editMode ? " disable" : ""}`}
              onClick={() => toggleStrictFilter("country")}
            >
              Filter {data?.country?.strictFilter ? "ON" : "OFF"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditableSection2 = () => {
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      religion: {
        initial: [],
        options: ["Hindu", "Muslim", "Sikh", "Christian"],
        strictFilter: true,
      },
      caste: {
        initial: [],
        options: ["Aggarwal", "Arora", "Patel", "Rajput"],
        strictFilter: false,
      },
      motherTounge: {
        initial: ["Hindi", "English"],
        options: [
          "Hindi",
          "English",
          "Punjabi",
          "Marathi",
          "Telugu",
          "Kannada",
          "Bangali",
        ],
        strictFilter: true,
      },
      manglik: {
        initial: [],
        options: ["Manglik", "Non Manglik", "Angshik ( Partial Manglik )"],
      },
    });
  }, []);

  const multiSelectReligionProps = {
    initial: data?.religion?.initial,
    options: data?.religion?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const multiSelectCasteProps = {
    initial: data?.caste?.initial,
    options: data?.caste?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const multiSelectMotherToungeProps = {
    initial: data?.motherTounge?.initial,
    options: data?.motherTounge?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const multiSelectManglikProps = {
    initial: data?.manglik?.initial,
    options: data?.manglik?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const toggleEditMode = () => {
    if (!editMode) {
      setEditMode(true);
      return;
    }

    console.log("save");
    setEditMode(false);
  };

  const toggleStrictFilter = (property) => {
    if (!editMode) return;

    setData((prevState) => ({
      ...prevState,
      [property]: {
        ...prevState[property],
        strictFilter: !prevState[property].strictFilter,
      },
    }));
    return;
  };

  return (
    <div className="section">
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex align-items-center">
          <h5>
            <i className="fs-4 me-2 fas fa-user-shield"></i>
            Religion & Ethnicity
          </h5>
          <span></span>
        </div>

        <div className="btn p-0" onClick={toggleEditMode}>
          <h5>{editMode ? "Save" : "Edit"}</h5>
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

          <div className="col-2">
            <div
              className={`btn w-100 btn${
                data?.religion?.strictFilter ? "-primary" : "-danger"
              } border${!editMode ? " disable" : ""}`}
              onClick={() => toggleStrictFilter("religion")}
            >
              Filter {data?.religion?.strictFilter ? "ON" : "OFF"}
            </div>
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

          <div className="col-2">
            <div
              className={`btn w-100 btn${
                data?.caste?.strictFilter ? "-primary" : "-danger"
              } border${!editMode ? " disable" : ""}`}
              onClick={() => toggleStrictFilter("caste")}
            >
              Filter {data?.caste?.strictFilter ? "ON" : "OFF"}
            </div>
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

          <div className="col-2">
            <div
              className={`btn w-100 btn${
                data?.motherTounge?.strictFilter ? "-primary" : "-danger"
              } border${!editMode ? " disable" : ""}`}
              onClick={() => toggleStrictFilter("motherTounge")}
            >
              Filter {data?.motherTounge?.strictFilter ? "ON" : "OFF"}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="row">
          <div className="col-3">
            <h6>Manglik</h6>
          </div>

          <div className="col-lg">
            <MultiSelect {...multiSelectManglikProps} />
          </div>

          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

const EditableSection3 = () => {
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      highestEducation: {
        initial: [],
        options: [
          "B.Arch",
          "B.Des",
          "B.E / B.Tech",
          "B.Pharma",
          "M.Arch",
          "M.Des",
          "M.E / M.Tech",
          "M.Pharma",
          "M.S ( Engineering )",
        ],
      },
      occupation: {
        initial: [],
        options: [
          "Government",
          "Civil Services",
          "Defence",
          "Self Employed",
          "Not Working",
          "Doctor",
          "Engineering",
          "Architect",
        ],
      },
      income: {
        initialFrom: "Rs. 2 Lakh",
        initialTo: "Rs. 5 Lakh",
        options: [
          "No Income",
          "Rs. 1 Lakh",
          "Rs. 2 Lakh",
          "Rs. 3 Lakh",
          "Rs. 4 Lakh",
          "Rs. 5 Lakh",
          "Rs. 7.5 Lakh",
          "Rs. 10 Lakh",
          "Rs. 15 Lakh",
          "Rs. 20 Lakh",
          "Rs. 25 Lakh",
          "Rs. 35 Lakh",
          "Rs. 50 Lakh",
          "Rs. 70 Lakh",
          "Rs. 1 Crore",
          "And Above",
        ],
        strictFilter: false,
      },
    });
  }, []);

  const multiSelectHighestEducationProps = {
    initial: data?.highestEducation?.initial,
    options: data?.highestEducation?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const multiSelectOccupationProps = {
    initial: data?.occupation?.initial,
    options: data?.occupation?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const toggleEditMode = () => {
    if (!editMode) {
      setEditMode(true);
      return;
    }

    console.log("save");
    setEditMode(false);
  };

  const toggleStrictFilter = (property) => {
    if (!editMode) return;

    setData((prevState) => ({
      ...prevState,
      [property]: {
        ...prevState[property],
        strictFilter: !prevState[property].strictFilter,
      },
    }));
    return;
  };

  return (
    <div className="section">
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex align-items-center">
          <h5>
            <i className="fs-4 me-2 fas fa-book"></i>
            Education & Work
          </h5>
          <span></span>
        </div>

        <div className="btn p-0" onClick={toggleEditMode}>
          <h5>{editMode ? "Save" : "Edit"}</h5>
        </div>
      </div>

      <div className="mb-5">
        <div className="row">
          <div className="col-3">
            <h6>Highest Education</h6>
          </div>

          <div className="col-lg">
            <MultiSelect {...multiSelectHighestEducationProps} />
          </div>

          <div className="col-2"></div>
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

          <div className="col-2"></div>
        </div>
      </div>

      <div className="mb-5">
        <div className="row">
          <div className="col-3">
            <h6>Income</h6>
          </div>

          <div className="col-lg">
            <select className="form-select" disabled={!editMode}>
              {data?.income?.options.map((i, index) => {
                return (
                  <option
                    key={index}
                    value={i}
                    selected={i === data?.income?.initialFrom}
                  >
                    {i}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-lg">
            <select className="form-select" disabled={!editMode}>
              {data?.income?.options.map((i, index) => {
                return (
                  <option
                    key={index}
                    value={i}
                    selected={i === data?.income?.initialTo}
                  >
                    {i}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-2">
            <div
              className={`btn w-100 btn${
                data?.income?.strictFilter ? "-primary" : "-danger"
              } border${!editMode ? " disable" : ""}`}
              onClick={() => toggleStrictFilter("income")}
            >
              Filter {data?.income?.strictFilter ? "ON" : "OFF"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditableSection4 = () => {
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      dietaryHabits: {
        initial: [],
        options: ["Vegetarian", "Non Vegetarian", "Jain", "Eggetarian"],
      },
      drinkingHabits: {
        initial: [],
        options: ["Yes", "No", "Occasionally"],
      },
      smokingHabits: {
        initial: [],
        options: ["Yes", "No", "Occasionally"],
      },
      challenged: {
        initial: [],
        options: ["Cripple", "Hearing Impaired", "Visually Impaired", "Others"],
      },
    });
  }, []);

  const multiSelectDietaryHabitsProps = {
    initial: data?.dietaryHabits?.initial,
    options: data?.dietaryHabits?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const multiSelectDrinkingHabitsProps = {
    initial: data?.drinkingHabits?.initial,
    options: data?.drinkingHabits?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const multiSelectSmokingHabitsProps = {
    initial: data?.smokingHabits?.initial,
    options: data?.smokingHabits?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const multiSelectChallengedProps = {
    initial: data?.challenged?.initial,
    options: data?.challenged?.options,
    callback: (data) => console.log(data),
    disabled: !editMode,
  };

  const toggleEditMode = () => {
    if (!editMode) {
      setEditMode(true);
      return;
    }

    console.log("save");
    setEditMode(false);
  };

  return (
    <div className="section">
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex align-items-center">
          <h5>
            <i className="fs-4 me-2 fas fa-glass-cheers"></i>
            Lifestyle
          </h5>
          <span></span>
        </div>

        <div className="btn p-0" onClick={toggleEditMode}>
          <h5>{editMode ? "Save" : "Edit"}</h5>
        </div>
      </div>

      <div className="mb-5">
        <div className="row">
          <div className="col-3">
            <h6>Dietary Habits</h6>
          </div>

          <div className="col-lg">
            <MultiSelect {...multiSelectDietaryHabitsProps} />
          </div>

          <div className="col-2"></div>
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

          <div className="col-2"></div>
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

          <div className="col-2"></div>
        </div>
      </div>

      <div className="mb-5">
        <div className="row">
          <div className="col-3">
            <h6>Challenged</h6>
          </div>

          <div className="col-lg">
            <MultiSelect {...multiSelectChallengedProps} />
          </div>

          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

const EditableSection5 = () => {
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      aboutDesiredPartner: {
        initial: "",
      },
    });
  }, []);

  const toggleEditMode = () => {
    if (!editMode) {
      setEditMode(true);
      return;
    }

    console.log("save");
    setEditMode(false);
  };

  return (
    <div className="section">
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex align-items-center">
          <h5>
            <i className="fs-4 me-2 fas fa-user"></i>
            About
          </h5>
          <span></span>
        </div>

        <div className="btn p-0" onClick={toggleEditMode}>
          <h5>{editMode ? "Save" : "Edit"}</h5>
        </div>
      </div>

      <div className="mb-5">
        <div className="row">
          <div className="col-3">
            <h6>About Desired Partner</h6>
          </div>

          <div className="col-lg">
            <textarea
              className="form-control"
              rows="8"
              disabled={!editMode}
              value={data?.aboutDesiredPartner?.initial}
              placeholder="Enter Some Text ... "
              style={{ resize: !editMode ? "none" : "" }}
            ></textarea>
          </div>

          <div className="col-2"></div>
        </div>
      </div>

      <div className="mb-5">
        <div className="row">
          <div className="col-3">
            <h6>Profile Created By</h6>
          </div>

          <div className="col-lg">
            <div className="d-flex gap-3">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  Doesn't Matter
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  Doesn't Matter
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  Doesn't Matter
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  Doesn't Matter
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDesiredPartner;
