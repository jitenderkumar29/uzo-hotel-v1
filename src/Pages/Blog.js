import { useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import logoPng from "../Assets/icons/logo.png";
import couple2Jpg from "../Assets/images/couple2.jpg";

const Blog = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.crossorigin = "anonymous";
    script2.nonce = "zZFNNk1z";
    script2.src =
      "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0";
    document.body.appendChild(script2);

    return function () {
      try {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
        document
          .querySelectorAll("iframe")
          .forEach((frame) => document.body.removeChild(frame));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <>
      <Header />

      <section className="Blogs-main">
        <div className="container">
          <div className="row">
            <div className="col-lg px-2">
              <article className="blog-page">
                <h4>5 One-of-a-Kind Date Ideas That Will Blow Your Mind!</h4>
                <div className="mt-2 mb-4">
                  <div className="d-flex publish">
                    <span className="author">admin</span>
                    <span className="date">Feb 24, 2022</span>
                    <span>
                      <i className="far fa-comment"></i>
                      &nbsp;
                      <span>0</span>
                    </span>
                  </div>
                </div>
                <div className="poster">
                  <img src={couple2Jpg} alt="" />
                </div>
                <h5>1. Early morning Long-Drive</h5>
                <p>
                  We all have our secret spots in the city where the sun looks
                  way too pretty when it rises. If you have a special someone,
                  take them for an early morning drive to your secret spot and
                  lay back to watch the sun filling up the sky. Blast the heat,
                  sing along to the music, and have considerable trouble
                  deciding whether to gaze at the perfect sky outside the
                  window, or each other. 😉
                </p>
                <h5>2. Explore the foodie in you - Together</h5>
                <p>
                  If you and your date happen to be big foodies who like to try
                  something new on their plate, this will be the ultimate date
                  plan. Going from one place to another and letting each other
                  pick the places and dishes will help you guys bond.
                </p>
                <h5>3. Midnight ice-cream Date</h5>
                <p>
                  Every city has a spot that is loved by everyone, that one
                  place that really makes you feel connected to it. It could be
                  Delhi's India Gate or Mumbai's Marine Drive, but walking along
                  these spots can really fill you up. And what better than
                  sharing that moment with your significant other with an
                  ice-cream at midnight?
                </p>
                <h5>4. Adventure park for some thrill</h5>
                <p>
                  There will be excitement, thrill and a reliving of your
                  childhood but with your sweetheart, this time around. Visit
                  the nearest adventure park for a date because there is nothing
                  like fighting over which ride to take or pushing your
                  significant other to overcome their fear. This is one of the
                  best things to bond over.
                </p>
                <h5>
                  5. Recreating your very first date (If you've been together
                  for a while)
                </h5>
                <p>
                  Relationships need maintenance and after a couple of years,
                  you need to spark up those first-meet vibes. Recreate the
                  first time you guys went on a date. The first sparks, the
                  first walk together and the first kiss, it was all magical,
                  right? It still will be.
                </p>
              </article>

              <div className="d-flex py-3 align-items-center justify-content-between border-bottom">
                <div className="d-flex gap-2 align-items-center social">
                  <span>
                    <i className="fas fa-share"></i>
                    <span className="ms-2">Share</span>
                  </span>
                  <Link to="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-google"></i>
                  </Link>
                </div>
                <span>
                  <i className="far fa-comment"></i>
                  &nbsp;
                  <span>0</span>
                </span>
              </div>

              <div className="d-flex py-3 gap-2 align-items-center justify-content-between">
                <span className="fs-5">
                  <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    <span className="ms-3">Prev Blog</span>
                  </Link>
                </span>

                <span className="fs-5">
                  <Link to="/">
                    <span className="me-3">Next Blog</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </span>
              </div>

              <div className="widget">
                <div className="py-3">
                  <h4 className="title d-flex align-items-center justify-content-between">
                    <span className="pe-3">You Might Also Like</span>
                    <span className="fs-6 ps-3">More From Author</span>
                  </h4>
                </div>
                <div className="related row">
                  {[...Array(3)].map((i, index) => {
                    return (
                      <div key={index} className="col-lg">
                        <article className="blog small">
                          <div className="poster">
                            <img src={couple2Jpg} alt="" />
                          </div>
                          <div className="badge">
                            <span>Inspiring Stories</span>
                          </div>
                          <div className="info">
                            <p className="mb-0">
                              I am thankful to shaadi.com for being instrumental
                              in making our love happen. Here's been our…
                            </p>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-4 px-2">
              <div className="d-flex flex-column gap-3">
                <div className="widget">
                  <div className="w-50 mx-auto">
                    <img src={logoPng} alt="" />
                  </div>
                  <div className="py-3">
                    <h4 className="text-center">Find Your Special Someone</h4>
                  </div>
                  <form action="">
                    <div className="mb-4">
                      <h5>I'm looking for a</h5>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="#781c4b">Open this select</option>
                        <option value="#93159e">One</option>
                        <option value="#c3127a">Two</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <h5>Aged Between</h5>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="#781c4b">Open this select</option>
                        <option value="#93159e">One</option>
                        <option value="#c3127a">Two</option>
                      </select>
                    </div>

                    <button>Let's Begin</button>
                  </form>
                </div>

                <div className="widget">
                  <div className="py-3">
                    <h4 className="title">
                      <span className="pe-3">Newsletter</span>
                    </h4>
                  </div>
                  <form action="">
                    <div className="mb-4">
                      <h5>Email Address *</h5>

                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>

                    <button>Subscribe</button>
                  </form>
                </div>

                <div className="widget">
                  <div className="py-3">
                    <h4 className="title">
                      <span className="pe-3">Youtube</span>
                    </h4>
                  </div>

                  <iframe
                    style={{ height: "315px", width: "100%" }}
                    src="https://www.youtube.com/embed/r2zFQos5gHw"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="widget">
                  <div className="py-3">
                    <h4 className="title">
                      <span className="pe-3">Twitter</span>
                    </h4>
                  </div>

                  <div className="twitter-embed">
                    <blockquote
                      className="twitter-tweet"
                      data-conversation="none"
                    >
                      <p lang="und" dir="ltr">
                        <a href="https://t.co/4FoQ6qbQWn">
                          pic.twitter.com/4FoQ6qbQWn
                        </a>
                      </p>
                      &mdash; Twitter (@Twitter) &nbsp;
                      <a href="https://twitter.com/Twitter/status/1483427748500717573?ref_src=twsrc%5Etfw">
                        January 18, 2022
                      </a>
                    </blockquote>
                  </div>
                </div>

                <div className="widget">
                  <div className="py-3">
                    <h4 className="title">
                      <span className="pe-3">Facebook</span>
                    </h4>
                  </div>

                  <div id="fb-root">
                    <div
                      style={{ width: "100%" }}
                      className="fb-page"
                      data-href="https://www.facebook.com/facebook"
                      data-tabs="timeline"
                      data-width="500"
                      data-height=""
                      data-small-header="false"
                      data-adapt-container-width="true"
                      data-hide-cover="false"
                      data-show-facepile="true"
                    >
                      <blockquote
                        cite="https://www.facebook.com/facebook"
                        className="fb-xfbml-parse-ignore"
                      >
                        <a href="https://www.facebook.com/facebook">Meta</a>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="widget">
                  <div className="py-3">
                    <h4 className="title">
                      <span className="pe-3">Tags</span>
                    </h4>
                  </div>

                  <div className="tags">
                    {[...Array(5)].map((_) =>
                      [
                        "Browsing",
                        "Commitment",
                        "Compatibility",
                        "Happily Married",
                        "Love",
                      ].map((j, indexJ) => {
                        return (
                          <Link key={indexJ} className="tag" to="/">
                            {j}
                          </Link>
                        );
                      })
                    )}
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

export default Blog;
