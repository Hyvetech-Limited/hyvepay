import React, { useState } from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/svgs/flat-color-icons_google.svg";
import User from "../../assets/svgs/user.svg";
import Lock from "../../assets/svgs/lock.svg";
import Eye from "../../assets/svgs/eye.svg";
import Logo from "../../assets/svgs/hyve_logo.svg";
import Quote from "../../assets/svgs/blockquote.svg";
import AppBtn from "../../components/AppBtn/AppBtn";
import LoginModal from "../../components/modals/LoginModal";
import Login from "./Login";
import Register from "./Register";
import HighCloudSignIn from "./HighCloudSignIn";

const WelcomeAuthenticationPage = () => {
  const [modal, setModal] = useState(false);
  const [current, setShowCurrent] = useState(0);
  return (
    <>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-0">
        {/* login form */}
        <div className="flex  w-full flex-col">
          <div className="w-[100%] md:w-[50%] flex bg-white z-50 fixed justify-center md:justify-start py-5 pl-8">
            <img src={Logo} alt="logo" className="" />
          </div>

          <Login setModal={setModal} setShowCurrent={setShowCurrent} />
        </div>

        {/* image slider */}
        <div className="login_bg hidden md:flex sticky top-0 flex-col justify-between py-24 items-center px-24">
          <div className="w-full flex justify-between items-center">
            <img src={Quote} alt="" />
            <hr style={{ borderWidth: 0.5, width: 100 }} />
          </div>

          <div>
            <p className=" text-white slider-text font-montserrat">
              The automobile has not merely taken over the street, it has
              dissolved the living tissue of the city. Its appetite for space is
              absolutely insatiable; moving and parked, it devours urban land,
              leaving the buildings as mere islands of habitable space in a sea
              of dangerous and ugly traffic.
            </p>

            <div className="w-full flex justify-between items-center mt-8">
              <p className="base-text primary-color font-montserrat">
                James Marston Fitch
              </p>

              <div className="nav-btns flex gap-8">
                <button className="nav-left-btn">
                  {/* <img src={ArrowLeft} alt="" /> */}
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1528 9.39062L5.54199 19.0015L15.1528 28.6123"
                      stroke="#D9D9D9"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.458 19H5.81055"
                      stroke="#D9D9D9"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button className="nav-right-btn">
                  {/* <img src={ArrowRight} alt="" /> */}
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8472 9.39062L32.458 19.0015L22.8472 28.6123"
                      stroke="#D9D9D9"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.54195 19H32.1895"
                      stroke="#D9D9D9"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <LoginModal setModal={setModal} modal={modal} />
      </div>
    </>
  );
};

export default WelcomeAuthenticationPage;
