// import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

const Faq = () => {
  return (
    <>
      <Header />

      <section className="Documentation-content">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>Faq</h2>
            <p>
              Please click the below appropriate category for your query.If you
              can't find your answers, please feel free to contact us.
            </p>
          </div>
        </div>
        <div className="container mt-5">
          <div className="accordion" id="faqAccordion">
            {[...Array(10)].map((i, index) => {
              return (
                <div key={index} className="accordion-item">
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button${
                        index === 0 ? "" : " collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      Registration
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse${
                      index === 0 ? " show" : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <div className="faq-item">
                        <div className="question">
                          <p>How can I register my profile on Noble Shaadi?</p>
                        </div>

                        <div className="answer">
                          <p>
                            You can either choose Online Registration or Offline
                            Registration.
                          </p>

                          <ul>
                            <li>
                              For Online Registration all you need to do is fill
                              out the required information in the Registration
                              Form as accurately as possible and click on the
                              'Submit' button .
                            </li>
                            <li>
                              For Offline Registration (Profile submission
                              through network Branches)
                            </li>
                            <li>
                              You can visit any of our Chavara Family Welfare
                              Centre Offices , and fill up the Matrimonial
                              Registration form manually.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="faq-item">
                        <div className="question">
                          <p>How can I register my profile on Noble Shaadi?</p>
                        </div>

                        <div className="answer">
                          <p>
                            You can either choose Online Registration or Offline
                            Registration.
                          </p>

                          <p>
                            PAID MEMBERS: Will be provided with an exclusive
                            ChavaraMatrimony.com ID which cannot be changed.
                            Password provided initially can be changed as needed
                            by the user.
                          </p>
                          <p>
                            Please Note: Upon Upgrade and every Re-registration
                            the member will be given a new unique USER ID and
                            Password by ChavaraMatrimony.com. All previous data
                            and history will be retained in the profile, nothing
                            will be lost. Other members searching/looking for
                            old ID, will be redirected to the new USER ID.
                          </p>
                        </div>
                      </div>
                      <div className="faq-item">
                        <div className="question">
                          <p>How can I register my profile on Noble Shaadi?</p>
                        </div>

                        <div className="answer">
                          <p>
                            You can either choose Online Registration or Offline
                            Registration.
                          </p>

                          <ul>
                            <li>
                              For Online Registration all you need to do is fill
                              out the required information in the Registration
                              Form as accurately as possible and click on the
                              'Submit' button .
                            </li>
                            <li>
                              For Offline Registration (Profile submission
                              through network Branches)
                            </li>
                            <li>
                              You can visit any of our Chavara Family Welfare
                              Centre Offices , and fill up the Matrimonial
                              Registration form manually.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="faq-item">
                        <div className="question">
                          <p>How can I register my profile on Noble Shaadi?</p>
                        </div>

                        <div className="answer">
                          <p>
                            You can either choose Online Registration or Offline
                            Registration.
                          </p>

                          <ul>
                            <li>
                              For Online Registration all you need to do is fill
                              out the required information in the Registration
                              Form as accurately as possible and click on the
                              'Submit' button .
                            </li>
                            <li>
                              For Offline Registration (Profile submission
                              through network Branches)
                            </li>
                            <li>
                              You can visit any of our Chavara Family Welfare
                              Centre Offices , and fill up the Matrimonial
                              Registration form manually.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FooterTop />
      <Contact />
      <Footer />
    </>
  );
};

export default Faq;
