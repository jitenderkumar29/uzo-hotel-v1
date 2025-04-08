// import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import couple2Jpg from "../Assets/images/couple2.jpg";

const PhotoGallery = () => {
  return (
    <>
      <Header />

      <section className="SweetStories-content">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>Photo Gallery</h2>
          </div>
        </div>
      </section>

      <section className="SweetStories-grid">
        <div className="container">
          <div className="row">
            {[...Array(10)].map((_, index) => {
              return (
                <div key={index} className="col-4 mb-4">
                  <div className="story-card">
                    <img src={couple2Jpg} alt="" />
                    <div className="mt-3">Glen Richard & Simi Tom</div>
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

export default PhotoGallery;
