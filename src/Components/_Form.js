import React from "react";

const defaultPropData = {
  name: "NobleShaadi",
};

const Form = ({ data = defaultPropData }) => {
  return (
    <section className="Form">
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h2>
              Millions found their perfect match at {data?.name} Matrimony!
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="form-col col-lg">
            <h5>I'm looking for a</h5>
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue={0}
            >
              <option value="0">Open this select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="form-col-group col-lg">
            <div className="form-col">
              <h5>aged</h5>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={0}
              >
                <option value="0">Open this select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <h5 className="mx-2 mb-3">to</h5>
            <div className="form-col">
              <h5>&nbsp;</h5>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={0}
              >
                <option value="0">Open this select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="form-col col-lg">
            <h5>of religion</h5>
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue={0}
            >
              <option value="0">Open this select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="form-col col-lg">
            <h5>and mother tongue</h5>
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue={0}
            >
              <option value="0">Open this select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="form-col col-lg">
            <button className="py-2 px-3">
              <span>Let's Begin</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
