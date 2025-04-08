import { useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import logoPng from "../Assets/icons/logo.png";
import couple2Jpg from "../Assets/images/couple2.jpg";

const Blogs = () => {
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

      <section className="Blogs-hero">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>Shaadi Blogs</h2>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg big px-2">
              <article className="blog">
                <div className="poster">
                  <Link to={"/blogs/big"}>
                    <img src={couple2Jpg} alt="" />
                  </Link>
                </div>
                <div className="badge">
                  <span>Featured Posts</span>
                </div>
                <div className="info">
                  <h4>
                    Taking every step to make sure we come out #StrongerTogether
                  </h4>
                  <div className="d-flex gap-2 justify-content-between">
                    <div className="d-flex publish">
                      <span className="author">admin</span>
                      <span className="date">Feb 24, 2022</span>
                    </div>
                    <span>
                      <i className="far fa-comment"></i>
                      &nbsp;
                      <span>0</span>
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg small px-2">
              {[...Array(4)].map((_, index) => {
                return (
                  <div key={index} className="col-6">
                    <article className="blog">
                      <Link to={`/blogs/${index}`}>
                        <div className="poster">
                          <img src={couple2Jpg} alt="" />
                        </div>
                        <div className="badge">
                          <span>Featured Posts</span>
                        </div>
                        <div className="info">
                          <h6>NobleShaadi.com does not discriminate</h6>
                        </div>
                      </Link>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="Blogs-main">
        <div className="container">
          <div className="row">
            <div className="col-lg px-2">
              <article className="blog big">
                <div className="poster">
                  <img src={couple2Jpg} alt="" />
                </div>
                <div className="badge">
                  <span>Trivia</span>
                </div>
                <div className="info">
                  <h4>5 One-of-a-Kind Date Ideas That Will Blow Your Mind!</h4>
                  <div className="d-flex gap-2 justify-content-between">
                    <div className="d-flex publish">
                      <span className="author">admin</span>
                      <span className="date">Feb 24, 2022</span>
                    </div>
                    <span>
                      <i className="far fa-comment"></i>
                      &nbsp;
                      <span>0</span>
                    </span>
                  </div>
                  <p>
                    1. Early morning Long-Drive We all have our secret spots in
                    the city where the sun looks way too pretty when it rises.
                    If you have a special someone, take them for an early
                    morning drive to your secret spot and lay back to watch the
                    sun filling up the sky. Blast the heat, sing along to the
                    music, …
                  </p>
                  <button>READ MORE</button>
                </div>
              </article>

              <div className="blog-list row">
                {[...Array(10)].map((i, index) => {
                  return (
                    <div key={index} className="col-6">
                      <article className="blog small">
                        <div className="poster">
                          <Link to={`/blogs/${index}`}>
                            <img src={couple2Jpg} alt="" />
                          </Link>
                        </div>
                        <div className="badge">
                          <span>Inspiring Stories</span>
                        </div>
                        <div className="info">
                          <h6>
                            Our Hearts Started Beating for Each Other - Jab We
                            Met
                          </h6>
                          <div className="d-flex gap-2 justify-content-between">
                            <div className="d-flex publish">
                              <span className="author">admin</span>
                              <span className="date">Feb 24, 2022</span>
                            </div>
                            <span>
                              <i className="far fa-comment"></i>
                              &nbsp;
                              <span>0</span>
                            </span>
                          </div>
                          <p>
                            I am thankful to shaadi.com for being instrumental
                            in making our love happen. Here's been our…
                          </p>
                          <button>Read More</button>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>

              <div className="col-12 pt-5 text-center">
                <button>Load More</button>
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

export default Blogs;
