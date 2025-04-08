import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import couple2Jpg from "../Assets/images/couple2.jpg";

const SweetStory = () => {
  return (
    <>
      <Header />

      <section className="SweetStories-story">
        <div className="container">
          <p>
            ChavaraMatrimony is a divine medium to meet your life partner. Our
            success flies in your wings of smile and satisfaction. We wish both
            of you a very happy and prosperous married life.
          </p>
          <h2>Success Story of Glen Richard &amp; Simi Tom</h2>
          <div className="row my-5">
            <div className="col-7 pe-0">
              <img src={couple2Jpg} alt="" />
            </div>
            <div className="col-5 p-4 d-flex justify-content-center flex-column gap-2">
              <div className="d-flex gap-2 justify-content-between">
                <span className="c-accent">Groom :</span>
                <p className="c-accent">Glen Richard</p>
              </div>
              <div className="d-flex gap-2 justify-content-between">
                <span className="c-accent">Bride :</span>
                <p className="c-accent">Simi Tom</p>
              </div>
              <div className="d-flex gap-2 justify-content-between border-bottom">
                <span className="c-accent">Wedding Date :</span>
                <p className="c-accent">06 Jan 2022</p>
              </div>
              <div className="d-flex flex-column gap-2">
                <span className="c-accent">
                  Glen Richard &amp; Simi Tom wrote :
                </span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt perspiciatis vel ullam sit culpa ex qui dolorum
                  debitis molestiae, accusantium deleniti esse impedit nam
                  dicta, sequi laudantium, reiciendis nulla repudiandae.
                </p>
              </div>
            </div>
          </div>
          <p>
            Chavara Matrimony.com Team congratulates Glen Richard &amp; Simi
            Tom. We wish both of you a happy future.
          </p>
        </div>
      </section>

      <section className="SweetStories-grid">
        <div className="container">
          <h5>Recent Success Stories</h5>
          <div className="row mt-4">
            {[...Array(3)].map((i, index) => {
              return (
                <div key={index} className="col-4 mb-4">
                  <Link to={`/sweet-stories/${index}`}>
                    <div className="story-card">
                      <img src={couple2Jpg} alt="" />
                      <div className="mt-3">Glen Richard & Simi Tom</div>
                    </div>
                  </Link>
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

export default SweetStory;
