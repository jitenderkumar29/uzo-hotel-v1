import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import couple2Jpg from "../Assets/images/couple2.jpg";

const Chat = () => {
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [showChatWindow, setShowChatWindow] = useState(false);
  const [chatWidgetBoxTab, setChatWidgetBoxTab] = useState(1);
  const chatWidgetBox = useRef();
  const chatWindowBox = useRef();

  const handleOpenChatWidgetBox = (tabIndex) => {
    setChatWidgetBoxTab(tabIndex);
    setShowChatWidget(true);
    setTimeout(() => {
      chatWidgetBox.current.style.height = `${chatWidgetBox.current.children[0].offsetHeight}px`;
    });
  };

  const handleCloseChatWidgetBox = () => {
    chatWidgetBox.current.style.height &&
      chatWidgetBox.current.removeAttribute("style");
    setShowChatWidget(false);
  };

  const handleOpenChatWindowBox = () => {
    setShowChatWindow(true);
    setTimeout(() => {
      chatWindowBox.current.style.height = `${chatWindowBox.current.children[0].offsetHeight}px`;
    });
  };

  const handleMinimizeChatWindowBox = () => {
    chatWindowBox.current.style.height
      ? chatWindowBox.current.removeAttribute("style")
      : handleOpenChatWindowBox();
  };

  const handleCloseChatWindowBox = () => {
    setShowChatWindow(false);
  };

  return (
    <>
      <section className="ChatWidget">
        <div className="box" ref={chatWidgetBox}>
          <div className="content">
            <div className="head">
              <div className="d-flex h-100 gap-3 align-items-center justify-content-between">
                <div className="d-flex gap-2 align-items-center">
                  <i className="far fa-message"></i> I'm
                  <select className="form-select" name="" id="">
                    <option value="1">Online</option>
                    <option value="1">Offline</option>
                    <option value="1">Away</option>
                  </select>
                </div>

                <div
                  className="btn"
                  title="Minimize"
                  onClick={handleCloseChatWidgetBox}
                >
                  <i className="fas fa-minus"></i>
                </div>
              </div>
            </div>

            <div className="main">
              {chatWidgetBoxTab === 0 && (
                <div className="alerts-tab">
                  {[...Array(3)].map((_, index) => {
                    return (
                      <article key={index} className="profile-card">
                        <div className="avatar">
                          <img src={couple2Jpg} alt="" />
                        </div>
                        <div className="info">
                          <div>
                            <h6>
                              Surbhi Mittal
                              <span className="ms-2 fs-6 fw-normal c-light">
                                has viewed your invitation.
                              </span>
                            </h6>
                          </div>
                          <p>a few mins ago</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {chatWidgetBoxTab === 1 && (
                <div className="chats-tab">
                  {[...Array(14)].map((_, index) => {
                    return (
                      <article
                        key={index}
                        className="profile-card"
                        onClick={handleOpenChatWindowBox}
                      >
                        <div className="avatar">
                          <img src={couple2Jpg} alt="" />
                        </div>
                        <div className="info">
                          <div className="d-flex align-items-baseline justify-content-between">
                            <h6>Surbhi Mittal</h6>
                            <span className="fs-7 c-light">11:26 AM</span>
                          </div>
                          <p>
                            <i className="me-2 fas fa-check-double"></i>
                            {/* <i className="me-2 fas fa-check"></i> */}
                            Hello, I liked your profile as well. It would be
                            good to communicate and get to know each other
                            better. Please feel free to contact me to take this
                            conversation ahead. Warm Regards, D Sahoo
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {chatWidgetBoxTab === 2 && (
                <div className="active-tab">
                  {[...Array(6)].map((_, index) => {
                    return (
                      <article key={index} className="profile-card">
                        <div className="avatar">
                          <img src={couple2Jpg} alt="" />
                        </div>
                        <div className="info">
                          <div className="d-flex align-items-baseline justify-content-between">
                            <h6>Surbhi Mittal</h6>
                            <i className="fas fa-circle online"></i>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="foot">
          <div className="nav-btns">
            <div
              className={`nav-btn${
                showChatWidget && chatWidgetBoxTab === 0 ? " active" : ""
              }`}
              onClick={() => handleOpenChatWidgetBox(0)}
            >
              <i className="far fa-bell"></i>
              <span className="ms-2">Alerts</span>
            </div>

            <div
              className={`nav-btn${
                showChatWidget && chatWidgetBoxTab === 1 ? " active" : ""
              }`}
              onClick={() => handleOpenChatWidgetBox(1)}
            >
              <i className="far fa-message"></i>
              <span className="ms-2">Chats</span>
            </div>

            <div
              className={`nav-btn${
                showChatWidget && chatWidgetBoxTab === 2 ? " active" : ""
              }`}
              onClick={() => handleOpenChatWidgetBox(2)}
            >
              <i className="far fa-user"></i>
              <span className="ms-2">Active (69)</span>
            </div>
          </div>
        </div>
      </section>

      {showChatWindow && (
        <section className="ChatWindow">
          <div className="head">
            <div className="d-flex h-100 gap-3 align-items-center justify-content-between">
              <div className="d-flex gap-1 align-items-center">
                <i className="fs-7 me-2 fas fa-circle online"></i>

                <Link to={"#"}>
                  <h6>Surbhi Mittal</h6>
                </Link>
              </div>

              <div className="d-flex align-items-center">
                <div
                  className="btn"
                  title="Minimize"
                  onClick={handleMinimizeChatWindowBox}
                >
                  <i className="fas fa-minus"></i>
                </div>
                <div
                  className="btn"
                  title="Close"
                  onClick={handleCloseChatWindowBox}
                >
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box" ref={chatWindowBox}>
            <div className="content">
              <div className="main">
                <article className="profile-card">
                  <div className="avatar">
                    <img src={couple2Jpg} alt="" />
                  </div>

                  <div className="info">
                    <div className="w-75">
                      <p>34 , 5' 7",</p>
                      <p>Hindu , Kshatriya,</p>
                      <p>Not working,</p>
                      <p>Faridabad , India.</p>
                    </div>

                    <div className="w-25 d-flex flex-column justify-content-between text-end">
                      <div>
                        <i className="fas fa-user-check" title="Accepted"></i>
                      </div>

                      <div>
                        <i
                          className="text-center fas fa-triangle-exclamation"
                          title="Report Misuse"
                          style={{ width: "20px" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="messages px-3">
                  <div className="date">Today</div>
                  <div className="sent">
                    <p>
                      Hi, I found your profile to be interesting and would like
                      to connect with you. If you like my brother's profile,
                      kindly accept this Invitation. It would be good to get to
                      know each other better. Please feel free to contact me to
                      take this conversation ahead. Warm Regards, D Sahoo
                    </p>
                    <span>
                      10:48 AM
                      <i className="ms-2 confirm fas fa-check-double"></i>
                    </span>
                  </div>
                  <div className="recieved">
                    <p>
                      Hi, I found your profile to be interesting and would like
                      to connect with you. If you like my brother's profile,
                      kindly accept this Invitation. It would be good to get to
                      know each other better. Please feel free to contact me to
                      take this conversation ahead. Warm Regards, D Sahoo
                    </p>
                    <span>10:48 AM</span>
                  </div>
                  <div className="sent">
                    <p>
                      Hi, I found your profile to be interesting and would like
                      to connect with you. If you like my brother's profile,
                      kindly accept this Invitation. It would be good to get to
                      know each other better. Please feel free to contact me to
                      take this conversation ahead. Warm Regards, D Sahoo
                    </p>
                    <span>
                      10:48 AM
                      <i className="ms-2 confirm fas fa-check-double"></i>
                    </span>
                  </div>
                  <div className="date">Today</div>
                  <div className="recieved">
                    <p>
                      Hi, I found your profile to be interesting and would like
                      to connect with you. If you like my brother's profile,
                      kindly accept this Invitation. It would be good to get to
                      know each other better. Please feel free to contact me to
                      take this conversation ahead. Warm Regards, D Sahoo
                    </p>

                    <span>10:48 AM</span>
                  </div>
                </div>
              </div>

              <div className="foot">
                <div className="d-flex h-100 gap-2 align-items-center">
                  <div className="px-2">
                    <i className="far fa-message"></i>
                  </div>

                  <div className="col-lg">
                    <input
                      type="text"
                      className="form-control border-"
                      placeholder="Reply ... "
                    />
                  </div>

                  <div className="btn send">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Chat;
