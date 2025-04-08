// import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

const WriteToUs = () => {
  return (
    <>
      <Header />

      <section className="Documentation-content">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>Submit Support Request Form</h2>
            <p>
              Use this form to submit your queries and doubts directly to our
              support team. You will be contacted promptly with a responds
            </p>
          </div>
        </div>
        <div className="container mt-5">
          <form action="">
            <div className="row py-4">
              <div className="col-lg">
                <div className="d-flex flex-column gap-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="User ID"
                    required
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email ID"
                    required
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div className="col-lg">
                <div className="d-flex flex-column gap-3">
                  <select
                    className="form-select"
                    name=""
                    id=""
                    placeholder="Select Category"
                  >
                    <option value="">1</option>
                    <option value="">1</option>
                    <option value="">1</option>
                    <option value="">1</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                  <textarea
                    className="form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-end gap-2">
                <button className="px-4" type="submit">
                  Submit
                </button>
                <button className="px-4" type="reset">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="Documentation-content">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>Grievance Officer</h2>
            <ul>
              <li>Ms. Niharika Dudeja</li>
              <li>B-78, Greater Kailash One</li>
              <li>South Delhi, New Delhi - 110048</li>
              <li>India</li>
              <li>Email : grievance@nobleshaadi.com</li>
            </ul>
          </div>
        </div>
      </section>

      <FooterTop />
      <Contact />
      <Footer />
    </>
  );
};

export default WriteToUs;
