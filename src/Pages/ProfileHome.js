import { Link } from "react-router-dom";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import Header from "../Components/_Header";
import Chat from "../Components/_Chat";
import Feature from "../Components/_Feature";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import royalBg1Img from "../Assets/images/royal_bg_1.jpg";
import couple2Jpg from "../Assets/images/couple2.jpg";

SwiperCore.use([Navigation]);

const ProfileHome = () => {
  const swiper1PrevBtn = useRef();
  const swiper1NextBtn = useRef();

  const swiper2PrevBtn = useRef();
  const swiper2NextBtn = useRef();

  const swiper3PrevBtn = useRef();
  const swiper3NextBtn = useRef();

  const swiper4PrevBtn = useRef();
  const swiper4NextBtn = useRef();

  const swiper5PrevBtn = useRef();
  const swiper5NextBtn = useRef();

  const swiperProps = (prevBtn, nextBtn) => {
    return {
      spaceBetween: 30,
      slidesPerView: 4,
      onSwiper: (swiper) => {
        setTimeout(() => {
          swiper.params.navigation.prevEl = prevBtn.current;
          swiper.params.navigation.nextEl = nextBtn.current;

          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        });
      },
    };
  };

  return (
    <>
      <Header />

      <section className="ProfileHome-hero Common-hero">
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <article className="updates-card">
              <div className="d-flex gap-3 align-items-center">
                <div className="avatar">
                  <div className="img">
                    <img src={couple2Jpg} alt="" />
                  </div>

                  <span className="fw-bold">37%</span>
                </div>

                <div className="info">
                  <h5 className="mb-4">Shivandi Sahoo</h5>
                  <p>Add details to your profile</p>

                  <div className="d-flex py-2">
                    <p>Upload Photos +26%</p>
                    <div className="hr"></div>
                    <p>Write About You & Family +15%</p>
                    <div className="hr"></div>
                    <p>Add Family Details +7%</p>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="recommendation">
                  <div className="img">
                    <span className="fs-4">55</span>
                  </div>

                  <span className="fw-bold">Interests Received</span>
                </div>

                <div className="recommendation">
                  <div className="img">
                    <span className="fs-4">38</span>
                  </div>

                  <span className="fw-bold">Just Joined</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="ProfileHome-grid">
        <div className="container">
          <div className="nav-btns row">
            <div className="col-3 nav-btn">
              <Link to={"/profile-filter"}>
                <span>
                  Interests Received <strong>39</strong>
                </span>
              </Link>
            </div>

            <div className="col-3 nav-btn">
              <Link to={"/profile-filter"}>
                <span>
                  Filtered Interests <strong>0</strong>
                </span>
              </Link>
            </div>

            <div className="col-3 nav-btn">
              <Link to={"/profile-filter"}>
                <span>
                  Accepted Me <strong>0</strong>
                </span>
              </Link>
            </div>

            <div className="col-3 nav-btn">
              <Link to={"/profile-filter"}>
                <span>
                  Messages <strong>1</strong>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="pb-5">
            <div className="d-flex align-items-center justify-content-between">
              <h4>
                Daily Recommendations <strong>55</strong>
              </h4>

              <div className="btn px-0 c-accent fw-bold">
                View All <i className="ms-2 fas fa-arrow-right"></i>
              </div>
            </div>

            <div className="mt-4 position-relative">
              <Swiper {...swiperProps(swiper1PrevBtn, swiper1NextBtn)}>
                {[...Array(10)].map((_, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <article className="profile-card">
                        <div className="poster">
                          <Link to={"/partner-profile"}>
                            <img src={couple2Jpg} alt="" />
                          </Link>
                        </div>

                        <div className="info">
                          <h6>34, 5'7, London, United Kingdom</h6>
                          <p>Oriya Khandayat</p>
                          <p>B.E / B.Tech</p>
                          <p>$40,000 - 60,000, Software Engineer</p>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="slider-navigation">
                <div className="prev-btn" ref={swiper1PrevBtn}>
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="next-btn" ref={swiper1NextBtn}>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-5">
            <div className="d-flex align-items-center justify-content-between">
              <h4>
                Just Joined <strong>38</strong>
              </h4>

              <div className="btn px-0 c-accent fw-bold">
                View All <i className="ms-2 fas fa-arrow-right"></i>
              </div>
            </div>

            <div className="mt-4 position-relative">
              <Swiper {...swiperProps(swiper2PrevBtn, swiper2NextBtn)}>
                {[...Array(10)].map((_, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <article className="profile-card">
                        <div className="poster">
                          <Link to={"/partner-profile"}>
                            <img src={couple2Jpg} alt="" />
                          </Link>
                        </div>

                        <div className="info">
                          <h6>34, 5'7, London, United Kingdom</h6>
                          <p>Oriya Khandayat</p>
                          <p>B.E / B.Tech</p>
                          <p>$40,000 - 60,000, Software Engineer</p>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="slider-navigation">
                <div className="prev-btn" ref={swiper2PrevBtn}>
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="next-btn" ref={swiper2NextBtn}>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-5">
            <div className="d-flex align-items-center justify-content-between">
              <h4>
                Mutual Matches <strong>172</strong>
              </h4>

              <div className="btn px-0 c-accent fw-bold">
                View All <i className="ms-2 fas fa-arrow-right"></i>
              </div>
            </div>

            <div className="mt-4 position-relative">
              <Swiper {...swiperProps(swiper3PrevBtn, swiper3NextBtn)}>
                {[...Array(10)].map((_, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <article className="profile-card">
                        <div className="poster">
                          <Link to={"/partner-profile"}>
                            <img src={couple2Jpg} alt="" />
                          </Link>
                        </div>

                        <div className="info">
                          <h6>34, 5'7, London, United Kingdom</h6>
                          <p>Oriya Khandayat</p>
                          <p>B.E / B.Tech</p>
                          <p>$40,000 - 60,000, Software Engineer</p>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="slider-navigation">
                <div className="prev-btn" ref={swiper3PrevBtn}>
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="next-btn" ref={swiper3NextBtn}>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-5">
            <div className="d-flex align-items-center justify-content-between">
              <h4>
                My Matches <strong>32</strong>
              </h4>

              <div className="btn px-0 c-accent fw-bold">
                View All <i className="ms-2 fas fa-arrow-right"></i>
              </div>
            </div>

            <div className="mt-4 position-relative">
              <Swiper {...swiperProps(swiper4PrevBtn, swiper4NextBtn)}>
                {[...Array(10)].map((_, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <article className="profile-card">
                        <div className="poster">
                          <Link to={"/partner-profile"}>
                            <img src={couple2Jpg} alt="" />
                          </Link>
                        </div>

                        <div className="info">
                          <h6>34, 5'7, London, United Kingdom</h6>
                          <p>Oriya Khandayat</p>
                          <p>B.E / B.Tech</p>
                          <p>$40,000 - 60,000, Software Engineer</p>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="slider-navigation">
                <div className="prev-btn" ref={swiper4PrevBtn}>
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="next-btn" ref={swiper4NextBtn}>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-5">
            <div className="d-flex align-items-center justify-content-between">
              <h4>
                Nearby Matches <strong>32</strong>
              </h4>

              <div className="btn px-0 c-accent fw-bold">
                View All <i className="ms-2 fas fa-arrow-right"></i>
              </div>
            </div>

            <div className="mt-4 position-relative">
              <Swiper {...swiperProps(swiper5PrevBtn, swiper5NextBtn)}>
                {[...Array(10)].map((_, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <article className="profile-card">
                        <div className="poster">
                          <Link to={"/partner-profile"}>
                            <img src={couple2Jpg} alt="" />
                          </Link>
                        </div>

                        <div className="info">
                          <h6>34, 5'7, London, United Kingdom</h6>
                          <p>Oriya Khandayat</p>
                          <p>B.E / B.Tech</p>
                          <p>$40,000 - 60,000, Software Engineer</p>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="slider-navigation">
                <div className="prev-btn" ref={swiper5PrevBtn}>
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="next-btn" ref={swiper5NextBtn}>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row gap-3 pb-5">
            <div className="col-lg">
              <h4>Profile Visitors</h4>

              <div className="d-flex gap-3 mt-3">
                <div className="avatar">
                  <Link to={"/partner-profile"}>
                    <img src={couple2Jpg} alt="" />
                  </Link>
                </div>
                <div className="avatar">
                  <Link to={"/partner-profile"}>
                    <img src={couple2Jpg} alt="" />
                  </Link>
                </div>
                <div className="avatar">
                  <Link to={"/partner-profile"}>
                    <img src={couple2Jpg} alt="" />
                  </Link>
                </div>
                <div className="avatar">
                  <Link to={"/partner-profile"}>
                    <img src={couple2Jpg} alt="" />
                  </Link>
                </div>
                <div className="avatar">
                  <Link to={"/profile-inbox"}>
                    <span className="fw-bold fs-4">+88</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg">
              <h4>Shortlisted Profiles</h4>

              <div className="d-flex gap-3 mt-3">
                <div className="avatar">
                  <Link to={"/partner-profile"}>
                    <img src={couple2Jpg} alt="" />
                  </Link>
                </div>
                <div className="avatar">
                  <Link to={"/partner-profile"}>
                    <img src={couple2Jpg} alt="" />
                  </Link>
                </div>
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="MembershipPlans-features">
        <div className="container">
          <div className="row gap-4">
            <div className="col-lg">
              <div className="pb-2 mb-3 border-bottom">
                <h5>WHY NOBLESHAADI</h5>
              </div>

              <ul>
                <li>Maximum benefits per month</li>
                <li>Biggest savings per month</li>
                <li>Lowest price per contact</li>
              </ul>
            </div>

            <div className="col-lg">
              <div className="pb-2 mb-3 border-bottom">
                <h5>WHATS NEW</h5>
              </div>

              <ul>
                <li>Real-time profile updates</li>
                <li>Profiles verified by Jeevansathi</li>
                <li>Search got even more personalised</li>
              </ul>
            </div>

            <div className="col-lg">
              <div className="pb-2 mb-3 border-bottom">
                <h5>WE ARE SECURE</h5>
              </div>

              <ul>
                <li>Multiple methods for payment</li>
                <li>Safe & secure payment gateway</li>
                <li>We do not save your card details</li>
              </ul>
            </div>

            <div className="col-lg">
              <div className="pb-2 mb-3 border-bottom">
                <h5>WE ARE SECURE</h5>
              </div>

              <ul>
                <li>Multiple methods for payment</li>
                <li>Safe & secure payment gateway</li>
                <li>We do not save your card details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Feature />
      <Chat />
      <FooterTop />
      <Contact />
      <Footer />
    </>
  );
};

export default ProfileHome;
