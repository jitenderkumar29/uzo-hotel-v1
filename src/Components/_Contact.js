import React from "react";

const Contact = () => {
  return (
    <section className="Contact">
      <div className="container">
        <div className="row">
          <article className="col-lg">
            <i className="fas fa-phone-volume"></i>
            <div className="ms-4">
              <div className="d-block">
                <span>Call US On</span>
              </div>
              <div className="d-block">
                <span className="fw-bold">
                  1800 - 103 - 4080 (INDIA-Toll Free)
                </span>
              </div>
            </div>
          </article>

          <article className="col-lg justify-content-end">
            <i className="fas fa-phone-volume"></i>
            <div className="ms-4">
              <div className="d-block">
                <span>Get a Call Back</span>
              </div>
              <div className="d-block">
                <span>Give a missed call to </span>
                <span className="fw-bold">902699588</span>
              </div>
            </div>
          </article>

          <article className="col-lg justify-content-center">
            <i className="fas fa-comments"></i>
            <div className="ms-4">
              <div className="d-block">
                <span>Live</span>
              </div>
              <div className="d-block">
                <span className="fw-bold">Chat</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
