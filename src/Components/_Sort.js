import React, { useState } from "react";

const Sort = () => {
  const [filterKey, setFilterKey] = useState("Language");

  const data = {
    Language: [
      "Bihari",
      "Bengali",
      "Hindi",
      "Gujrati",
      "Kannada",
      "Malayalam",
      "Marathi",
      "Oriya",
      "Punjabi",
      "Rajasthani",
      "Konkani",
      "Himachali",
      "Haryanvi",
      "Assamese",
      "Kashmiri",
      "Nepali",
      "Tulu",
    ],
    Caste: [
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
      "Aggarwal",
    ],
    Religion: [
      "Hindi",
      "Muslim",
      "Christian",
      "Buddhist",
      "Inter Religion",
      "Sikh",
      "Jain",
      "Parsi",
      "Jewish",
    ],
    City: [
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
      "New Delhi",
    ],
    Occupation: [
      "IT Software",
      "IT Software",
      "IT Software",
      "IT Software",
      "IT Software",
      "IT Software",
      "IT Software",
      "IT Software",
    ],
    State: [
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
      "Maharashtra",
    ],
    NRI: [
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
      "United States",
    ],
  };

  return (
    <section className="Sort">
      <div className="container">
        <div className="row mb-3">
          <h2>Browse Matrimonial Profiles By</h2>
        </div>

        <div className="row tab">
          {Object.keys(data).map((i, index) => {
            return (
              <div
                key={index}
                className={`col${i === filterKey ? " active" : ""}`}
                onClick={() => setFilterKey(i)}
              >
                <span className="tab-btn">{i}</span>
              </div>
            );
          })}
        </div>

        <div className="row my-5 gap-3">
          {data[filterKey].map((i, index) => {
            return (
              <div key={index} className="item">
                <span className="pill">{i}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sort;
