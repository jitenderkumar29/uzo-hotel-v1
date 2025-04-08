// import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

const FraudReporting = () => {
  return (
    <>
      <Header />

      <section className="Documentation-content">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>Fraud Reporting</h2>
          </div>
        </div>
        <div className="container mt-5">
          <div className="points">
            <article>
              <p>
                Nobleshaadi.com is committed to provide you with a safe & secure
                platform in which you search and find your partner. We help our
                users discover the best matches but it is in the interests of a
                user to use their best judgment to assess another person's
                genuineness and interest in marriage.
              </p>
              <p>
                Despite all we do to make the platform secure, we advise some
                precautions while using our sites and apps:
              </p>
              <ul>
                <li>
                  If a user appears to have entered false, incorrect information
                  about their education, profession, income, family etc., mark
                  such profiles as 'Report Abuse' and refrain from contacting
                  that user.
                </li>
                <li>
                  If a user asks for personal favors like transportation of
                  goods, deposit of funds on their behalf, lend them some money
                  etc., immediately cease any communication with the user and do
                  as advised above.
                </li>
                <li>
                  Be cautious of fake or copy sites which may look similar but
                  are actually owned by people who may have malicious intent.
                  Many sites have a similar appearance as Nobleshaadi.com but
                  they are not in any way related or affiliated to
                  Nobleshaadi.com. Please check the URL of the site (it should
                  be <a href="/">www.nobleshaadi.com</a>) that you are visiting.
                </li>
                <li>
                  Representatives from these fake sites may reach out to you to
                  get membership fee or for registering your profiles. Exercise
                  caution and alert our customer service if and when this
                  happens.
                </li>
                <li>
                  Beware of people who pretend to call from the Nobleshaadi team
                  asking for your user id's and passwords to login to your
                  account. Please note that Nobleshaadi never asks you for user
                  password information either on phone or in person.
                </li>
                <li>
                  Never share your financial details like bank account number,
                  online banking credentials, credit card details etc. and be
                  wary of those who ask for money from you. Use sound judgement
                  and do not take any decision in a hurry.
                </li>
                <li>
                  Meet with prospective partners you find on the platform in a
                  safe place and inform your family or friends of the meeting.
                </li>
                <li>
                  Do a thorough background research about the person before any
                  commitments are made.
                </li>
              </ul>
              <p>
                Nobleshaadi.com is merely a preliminary medium of contact and
                exchange of information. Users are strongly advised to conduct
                an independent check/due diligence prior to proceeding with any
                decisions based on the content of the profile. The onus of
                verifying the authenticity of the information displayed on a
                profile lies on the user.
              </p>
              <p>
                In case you face any of the above stated situations or come
                across a probable fake profile, immediately notify us on
                <a href="tel:"> 1860567890</a> (Toll Free) or
                <a href="mailto:"> help@nobleshaadi.com</a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <FooterTop />
      <Contact />
      <Footer />
    </>
  );
};

export default FraudReporting;
