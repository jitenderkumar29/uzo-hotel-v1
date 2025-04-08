import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useStore } from "../Context/AppContext";
import { removeUrlParam } from "../Tools/helper";


const userModel = {
  owner: "",
  gender: "",
  email: "",
  phone: "",
  password: ""
};

const SelectData = {
  owner: { 
    self: { id: "Self" }, 
    son: { id: "Son", gender: "male" }, 
    daughter: { id: "Daughter", gender: "female" }, 
    brother: { id: "Brother", gender: "male" }, 
    sister: { id: "Sister", gender: "female" }, 
    other: { id: "Relative / Friend / Client" } 
  },
};

const ModalSignUp = () => {
  const { login, navigate } = useStore();
  const [user, setUser] = useState({...userModel});
  const [showGender, setShowGender] = useState(false);

  const preventBubbling = (e) => {
    e?.stopPropagation();
    return false;
  };

  const handleInputChange = (name, e) => {
    const value = typeof e === "object" ? e.target.value : e;

    if (name === "owner" && value !== "") {
      const gender = SelectData.owner[value].gender ?? "";
      setUser((prevState) => ({...prevState, gender}));
      setShowGender(!gender);
    };

    setUser((prevState) => ({...prevState, [name]: value}));
  };

  const handleSubmit = () => navigate("/registration");

  if (login) return <Navigate to={"/"} />

  return (
    <div className="ModalSignUp_content">
      <div className="ModalSignUp_body" onClick={preventBubbling}>
        <div className="head mb-4">
          <div className="d-flex justify-content-between px-3">
            <i></i>
            <i className="fs-5 fas fa-times" onClick={() => navigate(removeUrlParam("modal"))}></i>
          </div>
        </div>

        <div className="main">
          <div className="text-center">
            <h4>
              Let's set up your account, while we find Matches for you!
            </h4>
          </div>

          <div className="w-100">
            <h5>Profle for</h5>

            <select className="form-select" name="profilefor" id="profilefor" onChange={handleInputChange.bind(this, "owner")}>
              <option value="">Select</option>
              {Object.entries(SelectData.owner).map(([k, {id}], index) => (
                <option key={index} value={k}>{id}</option>
              ))}
            </select>
          </div>

          {showGender && (
            <div className="w-100">
              <h5>Gender</h5>

              <div className="d-flex">
                <div className="col-4">
                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="gender" onChange={({target: {checked}}) => {
                      if (checked) handleInputChange("gender", "male")
                    }} checked={user.gender === "male"} />
                    <h5 className="m-0">Male</h5>
                  </label>
                </div>
                <div className="col-4">
                  <label className="d-flex align-items-center gap-2">
                    <input type="radio" name="gender" onChange={({target: {checked}}) => {
                      if (checked) handleInputChange("gender", "female")
                    }} checked={user.gender === "female"} />
                    <h5 className="m-0">Female</h5>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="w-100">
            <h5>Email ID</h5>
            <input className="form-control" type="text" />
          </div>

          <div className="w-100">
            <h5>Mobile number</h5>

            <div className="d-flex gap-2">
              <div className="col-4">
                <select
                  className="form-select"
                  name="profilefor"
                  id="profilefor"
                >
                  <option value="0">+91</option>
                  <option value="0">+91</option>
                  <option value="0">+91</option>
                  <option value="0">+91</option>
                  <option value="0">+91</option>
                </select>
              </div>
              <div className="col-lg">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Mobile number"
                />
              </div>
            </div>
          </div>

          <div className="w-100">
            <h5>Password</h5>

            <input className="form-control" type="text" placeholder="" />
          </div>

          <button className="w-100" onClick={handleSubmit}>
            Register Free
          </button>

          <div className="text-start">
            <p className="mb-0 fs-7">
              By clicking on Register Free, you confirm that you accept the
              <Link to={"/terms-of-use"}> Terms of Use </Link>
              and
              <Link to={"/privacy-policies"}> Privacy Policy </Link>
            </p>
          </div>

          <div className="text-center">
            <p>
              Already a Member ? &nbsp;
              <Link to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSignUp;
