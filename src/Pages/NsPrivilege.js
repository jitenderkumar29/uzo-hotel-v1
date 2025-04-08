// import { Link } from "react-router-dom";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import bannerJpg from "../Assets/images/couple2.jpg";
import nsExclusive1Png from "../Assets/icons/nsexclusive1.png";
import nsExclusive2Png from "../Assets/images/nsexclusive2.png";

SwiperCore.use([Navigation]);

const NsPrivilege = () => {
  const storyPrev = useRef();
  const storyNext = useRef();
  const managerPrev = useRef();
  const managerNext = useRef();

  const swiperProps = (prevBtn, nextBtn, slidesPerView) => {
    return {
      loop: true,
      spaceBetween: 30,
      slidesPerView,
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

      <section className="Common-hero">
        <div className="background">
          <img src={bannerJpg} alt="" />
        </div>
      </section>

      <section className="NsPrivilege-main">
        <div className="container">
          <div className="row pt-5 justify-content-center">
            <div className="col-9 text-center">
              <h6 className="sub-title">NS Privilege</h6>
              <h4>
                Personalized
                <span className="c-accent"> MatchMaking Service</span>
              </h4>
              <p>
                NobleShaadi Exclusive is a personalized matchmaking service by
                NobleShaadi where an experienced relationship advisor helps you
                to find a perfect soulmate. JS Exclusive is recommended if
                you're busy, need help in contacting the opposite profile or
                want an expert to work with your profile on your behalf to find
                a match faster.
              </p>
            </div>
          </div>

          <div className="row py-5 gap-5 justify-content-center">
            <div className="step row col-9">
              <div className="col-lg">
                <div className="d-flex h-100">
                  <img src={nsExclusive1Png} alt="" />
                </div>
              </div>

              <div className="col-lg">
                <h6 className="sub-title">STEP</h6>
                <h6 className="count">01</h6>
                <h4>Relationship Manager</h4>
                <p>
                  A Relationship Manager is assigned to understand your
                  expectations and preferences
                </p>
              </div>
            </div>

            <div className="step row col-9">
              <div className="col-lg">
                <h6 className="sub-title">STEP</h6>
                <h6 className="count">02</h6>
                <h4>Handpicked Matches</h4>
                <p>
                  Sharing authentic mutual matches with you on a weekly basis
                </p>
              </div>

              <div className="col-lg">
                <div className="d-flex h-100">
                  <img src={nsExclusive1Png} alt="" />
                </div>
              </div>
            </div>

            <div className="step row col-9">
              <div className="col-lg">
                <div className="d-flex h-100">
                  <img src={nsExclusive1Png} alt="" />
                </div>
              </div>

              <div className="col-lg">
                <h6 className="sub-title">STEP</h6>
                <h6 className="count">03</h6>
                <h4>Scheduled Meetings</h4>
                <p>
                  Arranging calls and setting up meetings with prospect families
                </p>
              </div>
            </div>

            <div className="step row col-9">
              <div className="col-lg">
                <h6 className="sub-title">STEP</h6>
                <h6 className="count">04</h6>
                <h4>Relationship Manager</h4>
                <p>
                  A Relationship Manager is assigned to understand your
                  expectations and preferences
                </p>
              </div>

              <div className="col-lg">
                <div className="d-flex h-100">
                  <img src={nsExclusive1Png} alt="" />
                </div>
              </div>
            </div>

            <div className="step row col-9">
              <div className="col-lg">
                <div className="d-flex h-100">
                  <img src={nsExclusive1Png} alt="" />
                </div>
              </div>

              <div className="col-lg">
                <h6 className="sub-title">STEP</h6>
                <h6 className="count">05</h6>
                <h4>Relationship Manager</h4>
                <p>
                  A Relationship Manager is assigned to understand your
                  expectations and preferences
                </p>
              </div>
            </div>
          </div>

          <div className="row pb-4">
            <div className="col-lg ps-0 pe-4">
              <img src={nsExclusive2Png} alt="" />
            </div>

            <div className="col-lg ps-5 py-4">
              <h6 className="sub-title mb-3">EXCLUSIVE BENEFITS</h6>
              <h4 className="mb-3">
                Role of a<span className="c-accent"> Relationship Manager</span>
              </h4>

              <ul>
                <li>
                  <i className="fas fa-user-circle"></i>
                  <span className="ms-2">
                    Relationship manager acts as an advisor
                  </span>
                </li>

                <li>
                  <i className="fas fa-sliders-h"></i>
                  <span className="ms-2">
                    Understands your preferences and expectations
                  </span>
                </li>

                <li>
                  <i className="fas fa-user-check"></i>
                  <span className="ms-2">
                    Sends interests and shares acceptances on a weekly basis
                  </span>
                </li>

                <li>
                  <i className="fas fa-user-friends"></i>
                  <span className="ms-2">
                    Connects with the members you choose on your behalf
                  </span>
                </li>

                <li>
                  <i className="fas fa-handshake"></i>
                  <span className="ms-2">
                    Sets up meetings with interested prospects
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row pt-5 justify-content-center">
            <div className="col-9 text-center">
              <h6 className="sub-title">LET'S DISCOVER</h6>
              <h4>
                Advantages of
                <span className="c-accent"> NS Exclusive</span>
              </h4>

              <div className="advantage row">
                <div className="col-lg">
                  <div className="my-3">
                    <img src={nsExclusive1Png} alt="" />
                  </div>

                  <h5>3x Fater Maching</h5>

                  <p>
                    Chances of finding a match are tripled with JS Exclusive.
                  </p>
                </div>

                <div className="col-lg">
                  <div className="my-3">
                    <img src={nsExclusive1Png} alt="" />
                  </div>

                  <h5>3x Fater Maching</h5>

                  <p>
                    Chances of finding a match are tripled with JS Exclusive.
                  </p>
                </div>

                <div className="col-lg">
                  <div className="my-3">
                    <img src={nsExclusive1Png} alt="" />
                  </div>

                  <h5>3x Fater Maching</h5>

                  <p>
                    Chances of finding a match are tripled with JS Exclusive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5 justify-content-center">
            <div className="col-9 text-center">
              <h6 className="sub-title">CREATE YOUR STORY</h6>
              <h4>
                Matched by
                <span className="c-accent"> NS Exclusive</span>
              </h4>
              <p>
                NS Exclusive boasts of thousands of success stories and this
                motivates us to work harder and perform better for our clients
              </p>

              <div className="py-3 position-relative">
                <Swiper {...swiperProps(storyPrev, storyNext, 2)}>
                  <SwiperSlide>
                    <article className="story">
                      <div className="h-100">
                        <img src={bannerJpg} alt="" />
                      </div>

                      <div className="info">
                        <h4>Glen Richard & Simi Tom</h4>
                        <h6 className="sub-title">
                          MARRIAGE DATE 13, DECEMBER 2021
                        </h6>
                      </div>

                      <div className="overlay">
                        <p>
                          Got my soulmate form Jeevansathi, happy to be with my
                          chosen one.
                        </p>
                      </div>
                    </article>
                  </SwiperSlide>

                  <SwiperSlide>
                    <article className="story">
                      <div className="h-100">
                        <img src={bannerJpg} alt="" />
                      </div>

                      <div className="info">
                        <h4>Glen Richard & Simi Tom</h4>
                        <h6 className="sub-title">
                          MARRIAGE DATE 13, DECEMBER 2021
                        </h6>
                      </div>

                      <div className="overlay">
                        <p>
                          Got my soulmate form Jeevansathi, happy to be with my
                          chosen one.
                        </p>
                      </div>
                    </article>
                  </SwiperSlide>
                </Swiper>

                <div className="slider-navigation">
                  <div className="prev-btn" ref={storyPrev}>
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className="next-btn" ref={storyNext}>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row py-5 justify-content-center">
            <div className="col-9 text-center">
              <h6 className="sub-title">PLAYING CUPID</h6>
              <h4>
                Meet Our
                <span className="c-accent"> Relationship Managers</span>
              </h4>
              <p>
                Our Relationship managers use their rich experience and
                unwavering focus to help you find the right one
              </p>

              <div className="py-3 position-relative">
                <Swiper
                  className="p-2"
                  {...swiperProps(managerPrev, managerNext, 3)}
                >
                  <SwiperSlide>
                    <article className="manager">
                      <div className="poster">
                        <img src={bannerJpg} alt="" />
                      </div>

                      <div className="info">
                        <h5>Ankita Singh</h5>
                        <h6 className="sub-title">
                          5 Years Experience | 600+ Clients
                        </h6>
                        <p>
                          Ankita is an MBA professional from Delhi & has handled
                          600+ clients. She is skilled to handle versatile
                          clients, especially from the Rajput community. She
                          believes in going the extra mile to ensure you find
                          and marry the Jeevansathi of your dreams.
                        </p>
                      </div>
                    </article>
                  </SwiperSlide>

                  <SwiperSlide>
                    <article className="manager">
                      <div className="poster">
                        <img src={bannerJpg} alt="" />
                      </div>

                      <div className="info">
                        <h5>Ankita Singh</h5>
                        <h6 className="sub-title">
                          5 Years Experience | 600+ Clients
                        </h6>
                        <p>
                          Ankita is an MBA professional from Delhi & has handled
                          600+ clients. She is skilled to handle versatile
                          clients, especially from the Rajput community. She
                          believes in going the extra mile to ensure you find
                          and marry the Jeevansathi of your dreams.
                        </p>
                      </div>
                    </article>
                  </SwiperSlide>

                  <SwiperSlide>
                    <article className="manager">
                      <div className="poster">
                        <img src={bannerJpg} alt="" />
                      </div>

                      <div className="info">
                        <h5>Ankita Singh</h5>
                        <h6 className="sub-title">
                          5 Years Experience | 600+ Clients
                        </h6>
                        <p>
                          Ankita is an MBA professional from Delhi & has handled
                          600+ clients. She is skilled to handle versatile
                          clients, especially from the Rajput community. She
                          believes in going the extra mile to ensure you find
                          and marry the Jeevansathi of your dreams.
                        </p>
                      </div>
                    </article>
                  </SwiperSlide>
                </Swiper>

                <div className="slider-navigation">
                  <div className="prev-btn" ref={managerPrev}>
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className="next-btn" ref={managerNext}>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterTop />
      <Contact />
      <Footer />
    </>
  );
};

export default NsPrivilege;
