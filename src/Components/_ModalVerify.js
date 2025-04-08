import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useStore } from "../Context/AppContext";
import { removeUrlParam } from "../Tools/helper";

const ModalSignUp = () => {
  const { login, setLogin, navigate } = useStore();
  const [otp, setOtp] = useState("");

  const preventBubbling = (e) => {
    e?.stopPropagation();
    return false;
  };

  const handleSubmit = () => {
    setLogin(true);
    navigate("/");
  };

  if (login) return <Navigate to={"/"} />;

  return (
    <div className="ModalSignUp_content">
      <div className="ModalSignUp_body py-5" onClick={preventBubbling}>
        <div className="main">
          <div className="text-center">
            <h4>Let's set up your account, while we find Matches for you!</h4>
          </div>

          <div className="w-100">
            <h5>Enter OTP</h5>

            <input
              className="form-control"
              type="text"
              onChange={({ target: { value } }) => setOtp(value)}
            />
          </div>

          <button className="w-100" onClick={handleSubmit}>
            Verify
          </button>

          <div className="text-start">
            <p className="mb-0 fs-7">
              By clicking on Register Free, you confirm that you accept the
              <Link to={"/terms-of-use"}> Terms of Use </Link>
              and
              <Link to={"/privacy-policies"}> Privacy Policy </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSignUp;
