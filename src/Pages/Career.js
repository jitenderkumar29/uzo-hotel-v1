// import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

const Career = () => {
  return (
    <>
      <Header />

      <section className="Career-content Documentation-content">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>Career</h2>
            <p>
              Please click the below appropriate category for your query.If you
              can't find your answers, please feel free to contact us.
            </p>
          </div>
        </div>
        <div className="container mt-5">
          <div className="accordion" id="careerAccordion">
            {[...Array(4)].map((i, index) => {
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
                      DOT NET DEVELOPER
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse${
                      index === 0 ? " show" : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#careerAccordion"
                  >
                    <div className="accordion-body">
                      <div className="career-item">
                        <div className="title">
                          <h5>Qualification :</h5>
                        </div>
                        <div className="list">
                          <ul>
                            <li>B.Tech/MCA/M.Sc IT/ B.Sc Computer Science</li>
                            <li> 2+ year of development experience in C#</li>
                          </ul>
                        </div>
                        <div className="title">
                          <h5>Desired Skills :</h5>
                        </div>
                        <div className="list">
                          <ul>
                            <li>
                              Design and implement ASP.NET based web
                              applications for internal and client facing
                              applications.
                            </li>
                            <li>
                              Build new Web based Applications with C#.NET,
                              ASP.NET , MVC/ WebForms, JQuery and AJAX
                            </li>
                            <li>Knowledge in SQL</li>
                            <li>
                              Participate in the full software development life
                              cycle including analysis, design, implementation,
                              and testing.
                            </li>
                            <li>
                              Expertise in ASP.Net, C#, Framework 2.0, 3.5,4,4.5
                              HTML & Java Script, SQL, JQuery ,WCF
                            </li>
                            <li>Should be a Team Player</li>
                            <li>Highly logical and analytical in approach</li>
                          </ul>
                        </div>
                        <div className="title">
                          <h5>Salary :</h5>
                        </div>
                        <div className="list">
                          <ul>
                            <li>Not constraint to the right Candidate</li>
                          </ul>
                        </div>
                        <div className="border-top pt-4">
                          <p>
                            Send your Resume to : &nbsp;
                            <a href="mailto:">text@testmail.com</a>
                          </p>
                          <p>
                            Contact Number : &nbsp;{" "}
                            <a href="tel:+">+0000 000 000</a>
                          </p>
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

export default Career;
