import { useState } from "react";
import { Navigate } from "react-router-dom";

import { useStore } from "../Context/AppContext";
import { setUrlParam } from "../Tools/helper";

import logoPng from "../Assets/icons/logo.png";

const profileDetailModel = {
  name: "",
  dateOfBirth: "",
  motherTongue: "",
  religion: "",
  sect: "",
  jamaat: "",
  caste: "",
  casteBar: "",
  subCaste: "",
  manglik: "",
  horoscope: "",
  maritalStatus: "",
  children: "",
  height: "",
};

const careerDetailModel = {
  country: "",
  state: "",
  city: "",
  residentialStatus: "",
  highestDegree: "",
  employedIn: "",
  occupation: "",
  annualIncome: "",
  about: "",
};

const familyDetailModel = {
  familyType: "",
  fatherOccupation: "",
  motherOccupation: "",
  brother: "",
  brotherMarried: "",
  sister: "",
  sisterMarried: "",
  country: "",
  state: "",
  city: "",
  address: "",
  about: "",
};

const documentVerificationModel = {
  documentType: "",
  nameOnDocument: "",
  documentNumber: "",
  documentFront: "",
  documentBack: "",
};

const Registration = () => {
  const { login, data, navigate } = useStore();
  const [step, setStep] = useState(0);
  const [profileDetail, setProfileDetail] = useState({ ...profileDetailModel });
  const [careerDetail, setCareerDetail] = useState({ ...careerDetailModel });
  const [familyDetail, setFamilyDetail] = useState({ ...familyDetailModel });
  const [documentVerification, setDocumentVerification] = useState({
    ...documentVerificationModel,
  });

  const handleChangeProfileDetail = (key, value) => {
    setProfileDetail((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleChangeCareerDetail = (key, value) => {
    setCareerDetail((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleChangeFamilyDetail = (key, value) => {
    setFamilyDetail((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleChangeDocumentVerification = (key, value) => {
    setDocumentVerification((prevState) => ({ ...prevState, [key]: value }));
  };

  const stepIncrement = () => setStep((prevState) => prevState + 1);

  const brotherSisterCount = ["None", "1", "2", "3", "3+"];

  if (login) return <Navigate to={"/"} />;

  return (
    <>
      {/* <Header /> */}

      <section className="Registration-hero">
        <div className="container">
          <div className="row text-center">
            <div className="d-flex flex-column gap-4">
              <div className="logo">
                <img src={logoPng} alt="" />
              </div>

              {/* <div className="head col-lg-8 col-12 mx-auto pe-4">
                <div className="d-flex justify-content-between align-items-center h-100">
                  <div className="logo p-2 h-100">
                    <img src={logoPng} alt="" />
                  </div>

                  <div className="d-flex gap-4">
                    <Link to={"/"}>Live Chat</Link>

                    <span>1-234-567-8901 (Toll Free)</span>
                  </div>
                </div>
              </div> */}

              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-center Registration-tabs">
                    {[
                      "Profile Details",
                      "Career Details",
                      "Lifestyle & Family",
                      "Document Verification",
                    ].map((i, index) => {
                      return (
                        <div
                          key={index}
                          className={`Registration-tab${
                            step === index ? " active" : ""
                          }`}
                          onClick={() => setStep(index)}
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
      </section>

      <section className="Registration-main">
        <div className="container">
          <div className="row my-5">
            <h5 className="text-center mb-0">
              Complete your profile now to contact members you like and to
              receive interests
            </h5>
          </div>

          <div className="row pt-3">
            <div className="col-lg-5 col-12 mx-auto position-relative">
              <div className="d-flex flex-column gap-4">
                {step === 0 && (
                  <>
                    <div className="w-100">
                      <h5>Groom's Name</h5>

                      <input
                        className="form-control"
                        type="text"
                        value={profileDetail.name}
                        onChange={({ target: { value } }) =>
                          handleChangeProfileDetail("name", value)
                        }
                      />
                    </div>

                    <div className="w-100">
                      <h5>Date of Birth</h5>

                      <input
                        className="form-control"
                        type="date"
                        value={profileDetail.dateOfBirth}
                        onChange={({ target: { value } }) =>
                          handleChangeProfileDetail("dateOfBirth", value)
                        }
                      />
                    </div>

                    <div className="w-100">
                      <h5>Mother tongue</h5>

                      <select
                        className="form-select"
                        value={profileDetail.motherTongue}
                        onChange={({ target: { value } }) =>
                          handleChangeProfileDetail("motherTongue", value)
                        }
                      >
                        <option value="">Select</option>
                        {data.language.map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-100">
                      <h5>Religion</h5>

                      <select
                        className="form-select"
                        value={profileDetail.religion}
                        onChange={({ target: { value } }) => {
                          setProfileDetail((prevState) => {
                            const { name, dateOfBirth, motherTongue, height } =
                              prevState;
                            return {
                              ...profileDetailModel,
                              name,
                              dateOfBirth,
                              motherTongue,
                              height,
                            };
                          });
                          handleChangeProfileDetail("religion", value);
                        }}
                      >
                        <option value="">Select</option>
                        {data.religion.map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    {["Muslim", "Christian"].includes(
                      profileDetail.religion
                    ) && (
                      <>
                        <div className="w-100">
                          <h5>Sect</h5>

                          <select
                            className="form-select"
                            value={profileDetail.sect}
                            onChange={({ target: { value } }) =>
                              handleChangeProfileDetail("sect", value)
                            }
                          >
                            <option value="">Select</option>
                            {data.religion.map((i, index) => (
                              <option key={index} value={i}>
                                {i}
                              </option>
                            ))}
                          </select>
                        </div>

                        {profileDetail.religion === "Muslim" &&
                          profileDetail.sect.length > 0 && (
                            <div className="w-100">
                              <h5>Jamaat</h5>

                              <select
                                className="form-select"
                                value={profileDetail.jamaat}
                                onChange={({ target: { value } }) =>
                                  handleChangeProfileDetail("jamaat", value)
                                }
                              >
                                <option value="">Select</option>
                                {data.religion.map((i, index) => (
                                  <option key={index} value={i}>
                                    {i}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                      </>
                    )}

                    {["Hindu", "Muslim", "Sikh", "Jain"].includes(
                      profileDetail.religion
                    ) && (
                      <>
                        <div className="w-100">
                          <h5>Caste</h5>

                          <select
                            className="form-select"
                            value={profileDetail.caste}
                            onChange={({ target: { value } }) =>
                              handleChangeProfileDetail("caste", value)
                            }
                          >
                            <option value="">Select</option>
                            {data.caste.map((i, index) => (
                              <option key={index} value={i}>
                                {i}
                              </option>
                            ))}
                          </select>

                          {["Hindu", "Sikh", "Jain"].includes(
                            profileDetail.religion
                          ) && (
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked={!!profileDetail.casteBar}
                                id="checkCastebar"
                                onChange={({ target: { checked } }) =>
                                  handleChangeProfileDetail("casteBar", checked)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="checkCastebar"
                              >
                                Caste no bar (I am open to marry people of all
                                castes)
                              </label>
                            </div>
                          )}
                        </div>

                        {profileDetail.religion !== "Muslim" && (
                          <div className="w-100">
                            <h5>Sub Caste</h5>

                            <select
                              className="form-select"
                              value={profileDetail.subCaste}
                              onChange={({ target: { value } }) =>
                                handleChangeProfileDetail("subCaste", value)
                              }
                            >
                              <option value="">Select</option>
                              {data.religion.map((i, index) => (
                                <option key={index} value={i}>
                                  {i}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </>
                    )}

                    {["Hindu", "Sikh", "Buddhist", "Jain"].includes(
                      profileDetail.religion
                    ) && (
                      <>
                        <div className="w-100">
                          <h5>Manglik</h5>

                          <div className="d-flex gap-4">
                            {data.manglik.map((i, index) => {
                              return (
                                <div key={index} className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radioManglik"
                                    id={`radioManglik${index}`}
                                    checked={profileDetail.manglik === i}
                                    onChange={({ target: { checked } }) =>
                                      checked &&
                                      handleChangeProfileDetail("manglik", i)
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`radioManglik${index}`}
                                  >
                                    {i}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="w-100">
                          <h5>Horoscope</h5>

                          <div className="d-flex gap-4">
                            {["Must", "Not Necessary"].map((i, index) => {
                              return (
                                <div key={index} className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radioHoroscope"
                                    id={`radioHoroscope${index}`}
                                    checked={profileDetail.horoscope === i}
                                    onChange={({ target: { checked } }) =>
                                      checked &&
                                      handleChangeProfileDetail("horoscope", i)
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`radioHoroscope${index}`}
                                  >
                                    {i}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}

                    <div className="w-100">
                      <h5>Marital status</h5>

                      <select
                        className="form-select"
                        value={profileDetail.maritalStatus}
                        onChange={({ target: { value } }) =>
                          handleChangeProfileDetail("maritalStatus", value)
                        }
                      >
                        <option value="">Select</option>
                        {profileDetail.religion === "Muslim" && (
                          <option value="Married">Married</option>
                        )}
                        {data.maritalStatus.map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    {profileDetail.maritalStatus !== "Never Married" &&
                      profileDetail.maritalStatus.length > 0 && (
                        <div className="w-100">
                          <h5>Children</h5>

                          <div className="d-flex gap-4">
                            {data.haveChildren.map((i, index) => {
                              return (
                                <div
                                  key={index}
                                  className="form-check"
                                  onClick={() =>
                                    handleChangeProfileDetail("children", i)
                                  }
                                >
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radioChildren"
                                    id={`radioChildren${index}`}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`radioChildren${index}`}
                                  >
                                    {i}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                    <div className="w-100">
                      <h5>Height</h5>

                      <select
                        className="form-select"
                        value={profileDetail.height}
                        onChange={({ target: { value } }) =>
                          handleChangeProfileDetail("height", value)
                        }
                      >
                        <option value="">Select</option>
                        {data.height.map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-5">
                      <button className="w-100 py-3" onClick={stepIncrement}>
                        Continue
                      </button>
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="w-100">
                      <h5>Country</h5>

                      <select
                        className="form-select"
                        value={careerDetail.country}
                        onChange={({ target: { value } }) => {
                          setCareerDetail((prevState) => {
                            const {
                              highestDegree,
                              employedIn,
                              occupation,
                              about,
                            } = prevState;
                            return {
                              ...careerDetailModel,
                              highestDegree,
                              employedIn,
                              occupation,
                              about,
                            };
                          });
                          handleChangeCareerDetail("country", value);
                        }}
                      >
                        <option value="">Select</option>
                        {data.country.map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    {careerDetail.country.length > 0 && (
                      <>
                        {careerDetail.country === "India" && (
                          <div className="w-100">
                            <h5>State</h5>

                            <select
                              className="form-select"
                              value={careerDetail.state}
                              onChange={({ target: { value } }) =>
                                handleChangeCareerDetail("state", value)
                              }
                            >
                              <option value="">Select</option>
                              {data.state.map((i, index) => (
                                <option key={index} value={i}>
                                  {i}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        <div className="w-100">
                          <h5>City</h5>

                          <select
                            className="form-select"
                            value={careerDetail.city}
                            onChange={({ target: { value } }) =>
                              handleChangeCareerDetail("city", value)
                            }
                          >
                            <option value="">Select</option>
                            {data.city.map((i, index) => (
                              <option key={index} value={i}>
                                {i}
                              </option>
                            ))}
                          </select>
                        </div>

                        {careerDetail.country !== "India" && (
                          <div className="w-100">
                            <h5>Residential Status</h5>

                            <select
                              className="form-select"
                              value={careerDetail.residentialStatus}
                              onChange={({ target: { value } }) =>
                                handleChangeCareerDetail(
                                  "residentialStatus",
                                  value
                                )
                              }
                            >
                              <option value="">Select</option>
                              {data.city.map((i, index) => (
                                <option key={index} value={i}>
                                  {i}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </>
                    )}

                    <div className="w-100">
                      <h5>Highest Degree</h5>

                      <select
                        className="form-select"
                        value={careerDetail.highestDegree}
                        onChange={({ target: { value } }) =>
                          handleChangeCareerDetail("highestDegree", value)
                        }
                      >
                        <option value="">Select</option>
                        {data.highestEducation.map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-100">
                      <h5>Employed In</h5>

                      <select
                        className="form-select"
                        value={careerDetail.employedIn}
                        onChange={({ target: { value } }) =>
                          handleChangeCareerDetail("employedIn", value)
                        }
                      >
                        <option value="">Select</option>
                        {data.occupation.map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    {careerDetail.employedIn.length > 0 && (
                      <div className="w-100">
                        <h5>Occupation</h5>

                        <select
                          className="form-select"
                          value={careerDetail.occupation}
                          onChange={({ target: { value } }) =>
                            handleChangeCareerDetail("occupation", value)
                          }
                        >
                          <option value="">Select</option>
                          {data.occupation.map((i, index) => (
                            <option key={index} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    <div className="w-100">
                      <h5>Annual Income</h5>

                      <select
                        className="form-select"
                        value={careerDetail.annualIncome}
                        onChange={({ target: { value } }) =>
                          handleChangeCareerDetail("annualIncome", value)
                        }
                      >
                        <option value="">Select</option>
                        {data.income[
                          careerDetail.country === "India" ? "rupee" : "dollar"
                        ].map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    <hr />

                    <div className="w-100">
                      <h5 className="text-center">
                        Here is your chance to make your profile stand out!
                      </h5>
                    </div>

                    <div className="w-100">
                      <h5>Express Yourself</h5>

                      <textarea
                        className="form-control"
                        rows="5"
                        value={careerDetail.about}
                        onChange={({ target: { value } }) =>
                          handleChangeCareerDetail("about", value)
                        }
                      />

                      <div className="mt-2">
                        <p className="fs-7">
                          Introduce yourself (Don't mention your name, number or
                          social handles). Write about your values,
                          beliefs/goals and aspirations. How do you describe
                          yourself? Your interests and hobbies.
                        </p>
                        <p className="fs-7">
                          This text will be screened by our team.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <button className="w-100 py-3" onClick={stepIncrement}>
                        Continue
                      </button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="w-100">
                      <h5>Family type</h5>

                      <div className="d-flex gap-4">
                        {["Joint Family", "Nuclear Family", "Others"].map(
                          (i, index) => {
                            return (
                              <div key={index} className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="radioFamilyType"
                                  id={`radioFamilyType${index}`}
                                  checked={familyDetail.familyType === i}
                                  onChange={({ target: { checked } }) =>
                                    checked &&
                                    handleChangeFamilyDetail("familyType", i)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`radioFamilyType${index}`}
                                >
                                  {i}
                                </label>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div className="w-100">
                      <h5>Father's Occupation</h5>

                      <select
                        className="form-select"
                        value={familyDetail.fatherOccupation}
                        onChange={({ target: { value } }) =>
                          handleChangeFamilyDetail("fatherOccupation", value)
                        }
                      >
                        <option value="">Select</option>
                        {data.occupation.map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-100">
                      <h5>Mother's Occupation</h5>

                      <select
                        className="form-select"
                        value={familyDetail.motherOccupation}
                        onChange={({ target: { value } }) =>
                          handleChangeFamilyDetail("motherOccupation", value)
                        }
                      >
                        <option value="">Select</option>
                        {data.occupation.map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-100">
                      <h5>Brother</h5>

                      <div className="d-flex gap-4">
                        {brotherSisterCount.map((i, index) => {
                          return (
                            <div key={index} className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="radioBrother"
                                id={`radioBrother${index}`}
                                checked={familyDetail.brother === i}
                                onChange={({ target: { checked } }) => {
                                  if (familyDetail.brother === i) return;
                                  setFamilyDetail((prevState) => ({
                                    ...prevState,
                                    brotherMarried: "",
                                  }));
                                  checked &&
                                    handleChangeFamilyDetail("brother", i);
                                }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`radioBrother${index}`}
                              >
                                {i}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {familyDetail.brother.length > 0 &&
                      familyDetail.brother !== "None" && (
                        <div className="w-100">
                          <h5>Brother Married</h5>

                          <div className="d-flex gap-4">
                            {brotherSisterCount
                              .slice(
                                0,
                                brotherSisterCount.indexOf(
                                  familyDetail.brother
                                ) + 1
                              )
                              .map((i, index) => {
                                return (
                                  <div key={index} className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="radioBrotherMarried"
                                      id={`radioBrotherMarried${index}`}
                                      checked={
                                        familyDetail.brotherMarried === i
                                      }
                                      onChange={({ target: { checked } }) =>
                                        checked &&
                                        handleChangeFamilyDetail(
                                          "brotherMarried",
                                          i
                                        )
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`radioBrotherMarried${index}`}
                                    >
                                      {i}
                                    </label>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}

                    <div className="w-100">
                      <h5>Sister</h5>

                      <div className="d-flex gap-4">
                        {brotherSisterCount.map((i, index) => {
                          return (
                            <div key={index} className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="radioSister"
                                id={`radioSister${index}`}
                                checked={familyDetail.sister === i}
                                onChange={({ target: { checked } }) => {
                                  if (familyDetail.sister === i) return;
                                  setFamilyDetail((prevState) => ({
                                    ...prevState,
                                    sisterMarried: "",
                                  }));
                                  checked &&
                                    handleChangeFamilyDetail("sister", i);
                                }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`radioSister${index}`}
                              >
                                {i}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {familyDetail.sister.length > 0 &&
                      familyDetail.sister !== "None" && (
                        <div className="w-100">
                          <h5>Sister Married</h5>

                          <div className="d-flex gap-4">
                            {brotherSisterCount
                              .slice(
                                0,
                                brotherSisterCount.indexOf(
                                  familyDetail.sister
                                ) + 1
                              )
                              .map((i, index) => {
                                return (
                                  <div key={index} className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="radioSisterMarried"
                                      id={`radioSisterMarried${index}`}
                                      checked={familyDetail.sisterMarried === i}
                                      onChange={({ target: { checked } }) =>
                                        checked &&
                                        handleChangeFamilyDetail(
                                          "sisterMarried",
                                          i
                                        )
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`radioSisterMarried${index}`}
                                    >
                                      {i}
                                    </label>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}

                    <div className="w-100">
                      <h5>Country</h5>

                      <select
                        className="form-select"
                        value={familyDetail.country}
                        onChange={({ target: { value } }) => {
                          setFamilyDetail((prevState) => {
                            const { state, city, address } = familyDetailModel;
                            return {
                              ...prevState,
                              state,
                              city,
                              address,
                            };
                          });
                          handleChangeFamilyDetail("country", value);
                        }}
                      >
                        <option value="">Select</option>
                        {data.country.map((i, index) => (
                          <option key={index} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    {familyDetail.country === "India" && (
                      <>
                        <div className="w-100">
                          <h5>State</h5>

                          <select
                            className="form-select"
                            value={familyDetail.state}
                            onChange={({ target: { value } }) =>
                              handleChangeFamilyDetail("state", value)
                            }
                          >
                            <option value="">Select</option>
                            {data.state.map((i, index) => (
                              <option key={index} value={i}>
                                {i}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="w-100">
                          <h5>City</h5>

                          <select
                            className="form-select"
                            value={familyDetail.city}
                            onChange={({ target: { value } }) =>
                              handleChangeFamilyDetail("city", value)
                            }
                          >
                            <option value="">Select</option>
                            {data.city.map((i, index) => (
                              <option key={index} value={i}>
                                {i}
                              </option>
                            ))}
                          </select>
                        </div>
                      </>
                    )}

                    <div className="w-100">
                      <h5>Contact Address</h5>

                      <input
                        className="form-control"
                        type="text"
                        value={familyDetail.address}
                        onChange={({ target: { value } }) =>
                          handleChangeFamilyDetail("address", value)
                        }
                      />
                    </div>

                    <div className="w-100">
                      <h5>About My Family</h5>

                      <textarea
                        className="form-control"
                        rows="5"
                        value={familyDetail.about}
                        onChange={({ target: { value } }) =>
                          handleChangeFamilyDetail("about", value)
                        }
                      />
                    </div>

                    <div className="mt-5">
                      <button className="w-100 py-3" onClick={stepIncrement}>
                        Continue
                      </button>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="w-100">
                      <h5 className="text-center mb-4">Document Type</h5>

                      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                        {[
                          "Voter ID",
                          "Pan Card",
                          "Passport",
                          "Driving License",
                          "Aadhaar Card",
                        ].map((i, index) => {
                          return (
                            <div
                              key={index}
                              className={`pill${
                                documentVerification.documentType === i
                                  ? " active"
                                  : ""
                              }`}
                              role="button"
                              onClick={() =>
                                setDocumentVerification({
                                  ...documentVerificationModel,
                                  documentType: i,
                                })
                              }
                            >
                              {i}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {documentVerification.documentType.length > 0 && (
                      <>
                        <div className="w-100">
                          <h5>Name On Document</h5>

                          <input
                            className="form-control"
                            type="text"
                            value={documentVerification.nameOnDocument}
                            onChange={({ target: { value } }) =>
                              handleChangeDocumentVerification(
                                "nameOnDocument",
                                value
                              )
                            }
                          />
                        </div>

                        <div className="w-100">
                          <h5>Document Number</h5>

                          <input
                            className="form-control"
                            type="text"
                            value={documentVerification.documentNumber}
                            onChange={({ target: { value } }) =>
                              handleChangeDocumentVerification(
                                "documentNumber",
                                value
                              )
                            }
                          />
                        </div>

                        <div className="w-100">
                          <h5>Upload Document Images</h5>

                          <div className="d-flex gap-3">
                            <div className="col border rounded-3 overflow-hidden">
                              <label
                                className="d-flex flex-column align-items-center justify-content-center py-5 px-3"
                                htmlFor="fileDocumentFront"
                              >
                                <i className="far fa-image fs-2" />
                                <h6 className="mb-0 mt-2 text-center text-truncate w-100">
                                  {documentVerification.documentFront
                                    ? documentVerification.documentFront.name
                                    : "Front"}
                                </h6>
                              </label>
                              <input
                                type="file"
                                id="fileDocumentFront"
                                onChange={({ target: { files } }) =>
                                  handleChangeDocumentVerification(
                                    "documentFront",
                                    files[0]
                                  )
                                }
                                hidden
                              />
                            </div>

                            {["Voter ID", "Passport", "Aadhaar Card"].includes(
                              documentVerification.documentType
                            ) && (
                              <div className="col border rounded-3 overflow-hidden">
                                <label
                                  className="d-flex flex-column align-items-center justify-content-center py-5 px-3"
                                  htmlFor="fileDocumentBack"
                                >
                                  <i className="far fa-image fs-2" />
                                  <h6 className="mb-0 mt-2 text-center text-truncate w-100">
                                    Back
                                  </h6>
                                </label>
                                <input
                                  type="file"
                                  id="fileDocumentBack"
                                  hidden
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-5">
                          <button
                            className="w-100 py-3"
                            onClick={() =>
                              navigate(setUrlParam("modal", "verify"))
                            }
                          >
                            Continue
                          </button>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              <div className="d-flex flex-column gap-3 position-absolute start-100 top-0 ms-5">
                <h5 className="text-nowrap">WHY REGISTER</h5>

                <div className="d-flex flex-column text-center gap-3 p-2">
                  <i className="fas fa-address-card fs-1"></i>
                  <h6 className="fs-7">Lakhs of Genuine Profiles</h6>
                </div>

                <div className="d-flex flex-column text-center gap-3 p-2">
                  <i className="fas fa-user-check fs-1"></i>
                  <h6 className="fs-7">Many Verified by Personal Visit</h6>
                </div>

                <div className="d-flex flex-column text-center gap-3 p-2">
                  <i className="fas fa-users fs-1"></i>
                  <h6 className="fs-7">Secure & Family Friendly</h6>
                </div>

                <div className="d-flex flex-column text-center gap-3 p-2">
                  <i className="fas fa-lock fs-1"></i>
                  <h6 className="fs-7">Strict Privacy Control</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Registration;
