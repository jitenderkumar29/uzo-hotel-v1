import { useState, useRef, useEffect } from "react";
import { useStore } from "../Context/AppContext";
import { currencyFormater, setUrlParam } from "../Tools/helper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import "../SnowFall.scss";

import logoPng from "../Assets/icons/logo.png";
import sapphireLogo from "../Assets/icons/sapphire6.png";
// import sapphireDarkLogo from "../Assets/icons/sapphire6dark.png";
import sapphireAccentLogo from "../Assets/icons/sapphire6accent.png";

import sectionBgVideo from "../Assets/video/vip-new.mp4";
import royalBg1Img from "../Assets/images/royal_bg_1.jpg";
import royalBg3Img from "../Assets/images/only-for-you.jpg";
import royalBg4Img from "../Assets/images/what-we-do.jpg";
import royalBg2Img from "../Assets/images/royal_bg_2_t.png";
// import royalBg3Img from "../Assets/images/royal_bg_3.jpg";

import flowerImg from "../Assets/icons/flower.webp";
// import diamondImg from "../Assets/icons/diamond.png";

SwiperCore.use([Autoplay, Navigation]);

const SapphirePremier = () => {
  const { navigate, membershipData: { sapphirePremierPlans } } = useStore();

  const [showHeaderMenu, setShowHeaderMenu] = useState(false);
  const [premierPlan, setPremierPlan] = useState(
    sapphirePremierPlans?.packages[0]
  );

  const reviewPrev = useRef();
  const reviewNext = useRef();

  useEffect(() => {
    const sections = document.querySelectorAll(".RoyalSection");

    try {
      const callBack = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(callBack, {
        root: null,
        rootMargin: "0%",
        threshold: 0.2,
      });

      sections.forEach((section) => observer.observe(section));
    } catch (error) {
      sections.forEach((section) => {
        section.classList.remove("active");
        section.classList.add("active");
      });

      console.log(error);
    }
  }, []);

  const swiperProps = (prevBtn, nextBtn) => {
    return {
      direction: "vertical",
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
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
      <section className="RoyalSection">
        <div className="container-fluid text-center">
          <div className="bdr tl">
            <img
              className="position-absolute top-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr tr">
            <img
              className="position-absolute top-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="row">
            <div className="bdr-l"></div>
            <div className="col-12">
              <div className="title-bg mb-4">
                <img src={sapphireLogo} alt="" />
              </div>
              <span className="title-before title-after">From NobleShaadi</span>
            </div>
            <div className="col-12">
              <h1>
                Premiere matrimonial services for High Networth Individuals
              </h1>
            </div>
            <div className="col-12 text-center">
              <div className="d-flex justify-content-center">
                <button className="bordered">Register Now</button>
              </div>

              <div className="mt-3">
                <span>Customer Care No - 0000000000</span>
              </div>
            </div>
            <div className="bdr-r"></div>
          </div>
          <div className="bdr bl">
            <img
              className="position-absolute bottom-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr br">
            <img
              className="position-absolute bottom-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
        </div>
        <div className="background">
          <video autoPlay muted loop>
            <source type="video/mp4" src={sectionBgVideo} />
          </video>
        </div>
      </section>

      <header className="RoyalNav">
        <Link to="/">
          <img className="h-100" src={logoPng} alt="" />
        </Link>

        <div className="menu" onClick={() => setShowHeaderMenu(true)}>
          <span className="fw-bold fs-5">Menu</span>
          <i className="fas fa-bars"></i>
        </div>

        <div className={`menu_slide_in${showHeaderMenu ? "" : " hide"}`}>
          <div className={`wrap${showHeaderMenu ? " active" : ""}`}>
            <div className="text-end">
              <i
                className="fas fa-times"
                onClick={() => setShowHeaderMenu(false)}
              ></i>
            </div>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>

            <div className="text-center">
              <span>Call +91 0000 000 000</span>
            </div>
          </div>
        </div>
      </header>

      <section className="RoyalSection">
        <div className="container-fluid">
          <div className="bdr tl">
            <img
              className="position-absolute top-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr tr">
            <img
              className="position-absolute top-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="row">
            <div className="bdr-l"></div>
            <div className="col-12">
              <div className="d-flex justify-content-between">
                <h3>Who we are</h3>
                <div className="title-bg">
                  <img src={sapphireLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <h2 className="mb-5">Welcome to Sapphire Premier</h2>
              <h4>
                Sapphire Premier is a premier matchmaking service designed for
                the eligible single & ???? families, HNIs, Industrialists,
                Businessman, Bureaucrats, Celebrities & Entrepreneurs, 100%
                confidential & personalized service pioneered b NobleShaadi
              </h4>
            </div>
            <div className="col-12 text-center">
              <div className="d-flex justify-content-center">
                <button className="bordered">Register Now</button>
              </div>

              <div className="mt-3">
                <span>Customer Care No - 0000000000</span>
              </div>
            </div>
            <div className="bdr-r"></div>
          </div>
          <div className="bdr bl">
            <img
              className="position-absolute bottom-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr br">
            <img
              className="position-absolute bottom-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
        </div>
        <div className="background">
          <img src={royalBg1Img} alt="" />
        </div>
      </section>

      <section className="RoyalSection">
        <div className="container-fluid">
          <div className="bdr tl">
            <img
              className="position-absolute top-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr tr">
            <img
              className="position-absolute top-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="row">
            <div className="bdr-l"></div>
            <div className="col-12">
              <div className="d-flex justify-content-between">
                <h3>What we do</h3>
                <div className="title-bg">
                  <img src={sapphireLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 text-start">
              <h4>
                With the 15+ years of experience in the matchmacking servics we
                brings to you the best and premium HNIs profiles here in our
                platform
              </h4>

              <ul>
                <li>Highly qualified & experienced consultants</li>
                <li>Handpicked matches from elite NobleShaadi Database</li>
                <li>100% Discreet & confidential</li>
                <li>Hign NRI base of our International presence</li>
                <li>Profile get-up & write-up</li>
                <li>Social media verification of all the selected profiles</li>
              </ul>
            </div>
            <div className="col-12 text-center">
              <div className="d-flex justify-content-center">
                <button className="bordered">Register Now</button>
              </div>

              <div className="mt-3">
                <span>Customer Care No - 0000000000</span>
              </div>
            </div>
            <div className="bdr-r"></div>
          </div>
          <div className="bdr bl">
            <img
              className="position-absolute bottom-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr br">
            <img
              className="position-absolute bottom-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
        </div>
        <div className="background">
          <img src={royalBg3Img} alt="" />
        </div>
      </section>

      <section className="RoyalSection">
        <div className="container-fluid">
          <div className="bdr tl">
            <img
              className="position-absolute top-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr tr">
            <img
              className="position-absolute top-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="row">
            <div className="bdr-l"></div>
            <div className="col-12">
              <div className="d-flex justify-content-between">
                <h3>How we do</h3>
                <div className="title-bg">
                  <img src={sapphireLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 text-start">
              <h4>
                Sapphire Premier team will appoint a relationship manager & will
                understand your requirements, make adjustments to your profile &
                reach out to potential matches on your behalf.
              </h4>

              <ul>
                <li>
                  Managers shares profiles on a weekly basis and also shares
                  alliances outside our database.
                </li>
                <li>
                  We advice our users to exercise their discretion while
                  reaching out to other users.
                </li>
                <li>
                  Payment once made shall stand appropriated and shall not be
                  refunded.
                </li>
                <li>
                  Our team are available on phone and email from Monday to
                  Saturday 10am to 6 pm.
                </li>
                <li>
                  Our managers will actively find profiles on Nobleshaadi And
                  find most relevant profiles for you.
                </li>
              </ul>
            </div>
            <div className="col-12 text-center">
              <div className="d-flex justify-content-center">
                <button className="bordered">Register Now</button>
              </div>

              <div className="mt-3">
                <span>Customer Care No - 0000000000</span>
              </div>
            </div>
            <div className="bdr-r"></div>
          </div>
          <div className="bdr bl">
            <img
              className="position-absolute bottom-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr br">
            <img
              className="position-absolute bottom-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
        </div>
        <div className="background">
          <img src={royalBg4Img} alt="" />
        </div>
      </section>

      <section className="RoyalSection h-100">
        <div className="container-fluid text-center">
          <div className="bdr tl">
            <img
              className="position-absolute top-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr tr">
            <img
              className="position-absolute top-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="row flex-wrap">
            <div className="bdr-l"></div>
            <div className="col-12 mb-5">
              <h1>Sapphire Premier Advantages</h1>
              <p className="mx-auto">
                We bring over 15+ years of expertise in pioneering the Premier
                matchmaking service and offer the most exclusive database of
                truly affluent HNI's matches for you around the world
              </p>
              <p className="mx-auto">
                At Sapphire Premier, we help you find the perfect life partner
                who matches your stature, aura, Sophistication in every sense of
                the world
              </p>
            </div>
            <div className="col-12">
              <div className="container">
                <div className="row gap-5 py-4">
                  <article className="col-lg">
                    <h4>PREMIER MANAGER</h4>
                    <p>
                      Dedicated matchmaking experts working exclusively for you
                    </p>
                  </article>

                  <article className="col-lg">
                    <h4>PREMIER MATCHES</h4>
                    <p>
                      Assured meetings with screened verified matches every week
                    </p>
                  </article>

                  <article className="col-lg">
                    <h4>PREMIER PRIVACY</h4>
                    <p>
                      100% Discretion and complete confindentiality of your
                      profiles
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-12 px-4 mt-4">
              <div className="container NsPrivilege">
                <div className="row mx-0">
                  <div className="d-flex justify-content-between align-items-center border-bottom">
                    <div className="nav-btns d-flex">
                      <div className="nav-btn active">
                        <div className="d-flex gap-2 align-items-baseline">
                          <h4>Sapphire</h4>
                          <span>Premier Package</span>
                        </div>
                      </div>
                    </div>

                    <span></span>
                  </div>
                </div>

                <div className="row mx-0 gap-3 pt-4">
                  <div className="col-lg text-start">
                    <ul>
                      {premierPlan?.benefits.map((i, index) => {
                        return (
                          <li key={index}>
                            <i className="fas fa-check me-2"></i>
                            {i}
                          </li>
                        );
                      })}
                    </ul>
                    <p>
                      Also get benefits of NS Boost and make your number visible
                      to free members
                    </p>
                  </div>

                  <div className="col-lg">
                    <div className="row">
                      {sapphirePremierPlans?.packages.map((i, index) => {
                        return (
                          <div
                            key={index}
                            className={`plan${
                              premierPlan.duration === i.duration
                                ? " active"
                                : ""
                            }`}
                            onClick={() => setPremierPlan(i)}
                          >
                            <h6 className="mb-0">{i.duration}</h6>
                            <p className="mb-0 fs-7 opacity-50 text-decoration-line-through">
                              {currencyFormater(i.price)}
                            </p>
                            <p className="mb-0 fw-bold">
                              {currencyFormater(i.offerPrice)}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="row pt-4">
                      <button className="px-4 py-3 fw-normal">
                        ₹ ***** | Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bdr-r"></div>
          </div>
          <div className="bdr bl">
            <img
              className="position-absolute bottom-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr br">
            <img
              className="position-absolute bottom-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="RoyalSection">
        <div className="container-fluid text-end">
          <div className="bdr tl">
            <img
              className="position-absolute top-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr tr">
            <img
              className="position-absolute top-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="row flex-wrap">
            <div className="bdr-l"></div>
            <div className="col-12">
              <div className="d-flex justify-content-end">
                <div className="title-bg">
                  <img src={sapphireAccentLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="container px-0">
                <div className="d-flex justify-content-end">
                  <div className="col-5">
                    <article className="form">
                      <h4 className="fw-bold">Sapphire Membership</h4>

                      <form className="row gap-3 mt-4" action="">
                        <div className="col-12">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            defaultValue={0}
                          >
                            <option value="0">I'm looking for a</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>

                        <div className="d-flex gap-3 col-12">
                          <input
                            className="col-lg"
                            type="text"
                            placeholder="age from"
                          />
                          <input
                            className="col-lg"
                            type="text"
                            placeholder="age to"
                          />
                        </div>

                        <div className="d-flex gap-3 col-12">
                          <input
                            className="col-lg"
                            type="text"
                            placeholder="of religion"
                          />

                          <select
                            className="form-select col-lg"
                            aria-label="Default select example"
                            defaultValue={0}
                          >
                            <option value="0">and mother tongue</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>

                        <button type="button" onClick={() => navigate(setUrlParam("modal", "register"))}>
                          Become A Sapphire Member
                        </button>
                      </form>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="bdr-r"></div>
          </div>
          <div className="bdr bl">
            <img
              className="position-absolute bottom-0 start-0"
              src={flowerImg}
              alt=""
            />
          </div>
          <div className="bdr br">
            <img
              className="position-absolute bottom-0 end-0"
              src={flowerImg}
              alt=""
            />
          </div>
        </div>
        <div className="background">
          <img src={royalBg2Img} alt="" />
        </div>
      </section>

      <section className="RoyalSection h-100">
        <div className="container-fluid text-center">
          <div className="row flex-wrap">
            <div className="col-12 mb-5">
              <h1>Sapphire Premier Reviews</h1>
            </div>
            <div className="col-12 py-4">
              <div className="container">
                <Swiper {...swiperProps(reviewPrev, reviewNext)}>
                  <SwiperSlide>
                    <article className="row p-0">
                      <div className="col-6 d-flex flex-column gap-3 p-4 text-start">
                        <h3>Travel Love</h3>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi rerum error tempore quaerat est iure
                          labore officiis eligendi saepe deleniti. Nostrum
                          quaerat consectetur rerum enim, eveniet sit, quidem,
                          eum dicta facilis amet deserunt. Nulla amet quidem
                          dignissimos aspernatur illo modi quasi sunt at
                          consequatur nam!
                        </p>
                        <h6>Matched by Anjali, VIP Consultant - Mumbai Team</h6>
                      </div>

                      <div className="col-6 p-0">
                        <img src={royalBg1Img} alt="" />
                      </div>
                    </article>
                  </SwiperSlide>

                  <SwiperSlide>
                    <article className="row p-0">
                      <div className="col-6 d-flex flex-column gap-3 p-4 text-start">
                        <h3>Travel Love</h3>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi rerum error tempore quaerat est iure
                          labore officiis eligendi saepe deleniti. Nostrum
                          quaerat consectetur rerum enim, eveniet sit, quidem,
                          eum dicta facilis amet deserunt. Nulla amet quidem
                          dignissimos aspernatur illo modi quasi sunt at
                          consequatur nam!
                        </p>
                        <h6>Matched by Anjali, VIP Consultant - Mumbai Team</h6>
                      </div>

                      <div className="col-6 p-0">
                        <img src={royalBg1Img} alt="" />
                      </div>
                    </article>
                  </SwiperSlide>

                  <SwiperSlide>
                    <article className="row p-0">
                      <div className="col-6 d-flex flex-column gap-3 p-4 text-start">
                        <h3>Travel Love</h3>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi rerum error tempore quaerat est iure
                          labore officiis eligendi saepe deleniti. Nostrum
                          quaerat consectetur rerum enim, eveniet sit, quidem,
                          eum dicta facilis amet deserunt. Nulla amet quidem
                          dignissimos aspernatur illo modi quasi sunt at
                          consequatur nam!
                        </p>
                        <h6>Matched by Anjali, VIP Consultant - Mumbai Team</h6>
                      </div>

                      <div className="col-6 p-0">
                        <img src={royalBg1Img} alt="" />
                      </div>
                    </article>
                  </SwiperSlide>
                </Swiper>

                <div className="col-12 mt-4 mx-3">
                  <div className="d-flex justify-content-end gap-2 px-3 mx-3">
                    <button
                      className="bordered px-3"
                      ref={reviewPrev}
                      style={{ color: "var(--light-background)" }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>

                    <button
                      className="bordered px-3"
                      ref={reviewNext}
                      style={{ color: "var(--light-background)" }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="RoyalFooter">
        <div className="container">
          <div className="row">
            <img src={logoPng} alt="" />
            <p>
              © 1996-2022 NobleShaadi.com, The World's No.1 Matchmaking Service™
              Passionately created by Reprar Group
            </p>
          </div>
        </div>
      </footer>

      <div className="snowfall">
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>
        <span className="snowflake"></span>

        {/* <span className="snowflake">
          <i className="far fa-gem"></i>
        </span> */}
      </div>
    </>
  );
};

export default SapphirePremier;
