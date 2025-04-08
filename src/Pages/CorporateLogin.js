import { Link } from "react-router-dom";
import { useStore } from "../Context/AppContext";

import { setUrlParam } from "../Tools/helper";

import Header from "../Components/_Header";
import FooterTop from "../Components/_FooterTop";
import Contact from "../Components/_Contact";
import Footer from "../Components/_Footer";

import logoPng from "../Assets/icons/logo.png";
import process1Png from "../Assets/icons/logingfx1.png";
import process2Png from "../Assets/icons/logingfx2.png";
import process3Png from "../Assets/icons/logingfx3.png";
import process4Png from "../Assets/icons/logingfx4.png";
import Feature from "../Components/_Feature";

const CorporateLogin = () => {
  const { navigate } = useStore();

  return (
    <>
      <Header />

      <section className="Auth corporate">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-4 align-self-center">
              <h1>Corporate Login !</h1>

              <h4>
                Find your Life Parter from 6 Lakhs + NobleShaadi Matrimony
                Profiles.
              </h4>
            </div>

            <div className="col-4">
              <div className="form">
                <div className="mx-auto">
                  <img src={logoPng} alt="" />
                </div>

                <select className="form-select" name="" id="">
                  <option defaultValue={""}>-Select Category-</option>
                  <option value="1">AONE</option>
                  <option value="1">DONE</option>
                  <option value="1">MONE</option>
                  <option value="1">SONE</option>
                </select>

                <input type="text" placeholder="Employee Id / Agent ID" />

                <input type="text" placeholder="Email or User ID" />

                <input type="password" placeholder="Password" />

                <div className="w-100 text-end">
                  <Link to={"/"}>Forget Password</Link>
                </div>

                <button>Log in</button>

                <div className="w-100 text-center">New on Corporate ?</div>

                <button onClick={() => navigate(setUrlParam("modal", "register"))}>
                  Register Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Process">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="d-flex align-items-center">
                <img src={process1Png} alt="" />
                <div className="ms-2">
                  <h6>Managed by CMI Priests</h6>
                  <span>Trusted by Millions</span>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="d-flex align-items-center">
                <img src={process2Png} alt="" />
                <div className="ms-2">
                  <h6>Managed by CMI Priests</h6>
                  <span>Trusted by Millions</span>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="d-flex align-items-center">
                <img src={process3Png} alt="" />
                <div className="ms-2">
                  <h6>Managed by CMI Priests</h6>
                  <span>Trusted by Millions</span>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="d-flex align-items-center">
                <img src={process4Png} alt="" />
                <div className="ms-2">
                  <h6>Managed by CMI Priests</h6>
                  <span>Trusted by Millions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Feature />
      <FooterTop />
      <Contact />
      <Footer />
    </>
  );
};

export default CorporateLogin;
