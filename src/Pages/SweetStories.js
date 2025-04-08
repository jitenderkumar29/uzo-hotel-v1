import { Link } from "react-router-dom";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import couple2Jpg from "../Assets/images/couple2.jpg";

const SweetStories = () => {
  return (
    <>
      <Header />

      <section className="SweetStories-content">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>Christain Wedding Photos &amp; Success Stories</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              in corporis natus repellendus animi libero consectetur veritatis
              sint fugiat totam quibusdam odit placeat voluptatibus quos neque
              autem praesentium a voluptas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus, in corporis natus
              repellendus animi libero .
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              in corporis natus repellendus animi libero consectetur veritatis
              sint fugiat totam quibusdam odit placeat voluptatibus quos neque
              autem praesentium a voluptas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus, in corporis natus
              repellendus animi libero consectetur veritatis sint fugiat totam
              quibusdam odit placeat voluptatibus quos neque autem praesentium a
              voluptas.
            </p>
            <div className="mb-3">
              <button>Add Success Stories</button>
            </div>
            <ul className="d-flex gap-2 flex-wrap m-0">
              {[...Array(10)].map((i, index) => {
                return (
                  <li key={index} className="border-end">
                    <Link to={"#"} className="mx-2">
                      Year : 2022
                    </Link>
                  </li>
                );
              })}

              <li>
                <Link to={"#"} className="px-2">
                  Year: 2022 &amp; Older
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="SweetStories-grid">
        <div className="container">
          <div className="row">
            {[...Array(10)].map((_, index) => {
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

export default SweetStories;
