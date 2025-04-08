import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

const Grievance = () => {
  return (
    <>
      <Header />

      <section className="Documentation-content">
        <div className="container">
          <div className="d-flex flex-column gap-2">
            <h2>Grievance Officer</h2>
            <ul>
              <li>Ms. Niharika Dudeja</li>
              <li>B-78, Greater Kailash One</li>
              <li>South Delhi, New Delhi - 110048</li>
              <li>India</li>
              <li>Email : grievance@nobleshaadi.com</li>
            </ul>
          </div>
        </div>
      </section>

      <FooterTop />
      <Contact />
      <Footer />
    </>
  );
};

export default Grievance;
