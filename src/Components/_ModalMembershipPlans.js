// import { useState } from "react";
// import { Link } from "react-router-dom";
import { useStore } from "../Context/AppContext";

import { removeUrlParam } from "../Tools/helper";

const ModalMembershipPlans = () => {
  const { navigate } = useStore();

  const preventBubbling = (e) => {
    e?.stopPropagation();
    return false;
  };

  return (
    <div className="ModalMembershipPlans_content">
      <div className="ModalMembershipPlans_body" onClick={preventBubbling}>
        <div className="head mb-4">
          <div className="d-flex justify-content-between px-3">
            <i></i>
            <i className="fs-5 fas fa-times" onClick={() => navigate(removeUrlParam("modal"))}></i>
          </div>
        </div>

        <div className="main">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Benefits You Get</th>
                <th scope="col">Free</th>
                <th scope="col">Basic</th>
                <th scope="col">eRishta</th>
                <th scope="col">eAdvantage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  Browse unlimited profiles of members that you like
                </th>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Send interests to candidates of your choice
                </th>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">Send unlimited messages</th>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">Priority customer service</th>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">View contact numbers</th>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">Unlimited voice and video calls</th>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">Make your contact details visible</th>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">On top of search & daily recommendations</th>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Be shown in the match of the day notifications
                </th>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-times"></i>
                </td>
                <td>
                  <i className="fas fa-check"></i>
                </td>
              </tr>
              <tr>
                <th className="text-center" scope="row" colSpan="2">
                  Starts from
                </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModalMembershipPlans;
