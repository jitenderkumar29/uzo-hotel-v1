// import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import royalBg1Img from "../Assets/images/royal_bg_1.jpg";
import ananuncmentPng from "../Assets/icons/ananuncment-icon.png";
import stockiconPng from "../Assets/icons/stock-icon2.png";
import producticonPng from "../Assets/icons/product-icon.png";
import pressiconPng from "../Assets/icons/press-icon.png";

const About = () => {
  return (
    <>
      <Header />

      <section className="About-hero Common-hero">
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>

        <div className="container">
          <div className="row h-100">
            <div className="col-1"></div>

            <div className="col-lg big px-0">
              <article className="about-card">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatem aperiam saepe cupiditate inventore magni dolorem
                  nostrum! Suscipit, maxime? Eum eius at recusandae consequuntur
                  quis numquam temporibus ratione voluptas beatae vitae!
                </span>
              </article>
            </div>

            <div className="col-lg small px-0">
              <div className="col-6">
                <article className="about-card one">
                  <img src={ananuncmentPng} alt="" />
                  <h5>We Are Here For You</h5>
                </article>
              </div>

              <div className="col-6">
                <article className="about-card two">
                  <img src={stockiconPng} alt="" />
                  <h5>We Are Here For You</h5>
                </article>
              </div>

              <div className="col-6">
                <article className="about-card three">
                  <img src={producticonPng} alt="" />
                  <h5>We Are Here For You</h5>
                </article>
              </div>

              <div className="col-6">
                <article className="about-card four">
                  <img src={pressiconPng} alt="" />
                  <h5>We Are Here For You</h5>
                </article>
              </div>
            </div>

            <div className="col-1"></div>
          </div>
        </div>
      </section>

      <section className="Documentation-content">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>About Us</h2>
          </div>
        </div>
        <div className="container mt-5">
          <div className="points">
            <article>
              <h5>
                Privacy and confidentiality features and tools at
                NOBLESHAADI.COM
              </h5>
              <p>
                At Nobleshaadi.com we believe that protecting the
                confidentiality and privacy of our registered users is very
                important. For this reason , our basic features are designed to
                protect your confidentialty. Further we have sophisticated tools
                that enable you to set your privacy and confidentiality levels
                to those that you are comfortable with.
              </p>
              <h5>A. Universal Confidentiality features</h5>
              <p>
                Profile design Our profile format is designed so as to prevent
                people from identifying you unless you wish them to do so. Thus
                the information that is gathered is general in nature - age,
                height, gender, caste, ethnicity, occupation, location, family
                profile, interests, desired partner profile etc. Typically
                information that will help generate interest among the right
                prospective life partners without individually identifying you.
                Uploading photographs is optional.
              </p>
              <h5>B. Protect your confidentiality</h5>
              <p>
                At Nobleshaadi.com we understand that different people have
                different needs for privacy and confidentiality. Thus For this
                reason we empower our registrants with tools to customize the
                privacy levels of their profile, photographs and contacts. Some
                of these settings are : For Profile
              </p>
              <ul>
                <li>
                  Allow my detailed profile to be viewed by all visitors or
                </li>
                <li>
                  Allow my detailed profile to be viewed only by registered
                  users who pass my filters.
                </li>
                <li>
                  Don't show my detailed profile or summary profile to any user,
                  I will search and contact profiles.
                </li>
              </ul>
              <p>
                Profile visibility settings are available in the settings
                section which is accessible from the header and footer on all
                pages after login. We recommend that you go in for the first
                privacy setting as that will get you the maximum response.
                Frequently our site is searched by casual browsers who are
                highly qualified, eligible people or friends and relatives of a
                prospective bride or groom and thus your profile is visible to
                this important group of visitors.
              </p>
              <p>
                Of course if you wish to maintain a higher level of privacy and
                confidentiality then you can go in for the second option. And if
                you want the maximum level of privacy then you can select the
                third option.
              </p>
              <p>
                Please note that in the first two profile visibility options,
                your summary profile will be viewed by all visitors. It will
                show your username, age, height, caste, occupation, city and
                date of updation. Typically these are the details by which you
                cannot be identified. In the second case, an unregistered user
                will be prompted to register and it will be checked if they pass
                your filters and only then would they be able to view your
                detailed profile. Whereas in the third case nobody will be able
                to view your summary or detailed profile.
              </p>
              <p>
                However, we would recommend you to go for the second option
                because the third option might minimize the number of responses
                your profile can get.
              </p>
              <p>
                For Photograph In case you wish to upload your photograph(s)
                along with your profile then you have the following options :
              </p>
              <ul>
                <li>I want my photos to be visible to all members.</li>
                <li>
                  I want my photos to be visible only to members I contact and
                  to members I accept.
                </li>
              </ul>
              <p>
                Thus you get to set that privacy level for your photograph which
                you feel most comfortable with.{" "}
              </p>
              <p>
                For contacts When entering profile on Nobleshaadi.com you can
                specify criteria based on which people who do not match your
                desired partner profile are unable to contact you. Thus you are
                not bothered by people who you are clear you would not be
                interested in.
              </p>
              <p>
                Filter setting are available once you have entered your desired
                partner profile. So when you register with Jeevansathi.com you
                register with the most confidential Indian matrimonial site. So
                register with confidence.
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

export default About;
