import React from "react";
import "../styles/Header.scss";

import menu from "../assets/icons/menu.svg";
import logo from "../assets/images/chicks-logo-large.svg"
import arrowDown from "../assets/icons/arrow-down.svg";

const Header = () => {

  return (
    <div className="navigation__container">
      <div className="navigation__mobile">
        <button>
          <img src={menu} alt="" />
        </button>
      </div>
      <div className="navigation__logo">
        <a href="/">
          <img src={logo} width="155" alt="" />
        </a>
      </div>
      <div className="navigation__container--left">
        <nav className="navigation-bar">
          <ul>
            <li>
              <a href="#">
                <span>CURRENCY</span>
                <img src={arrowDown} width="11" height="7" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <span>ITEMS</span>
                <img src={arrowDown} width="11" height="7" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <span>ACCOUNTS</span>
                <img src={arrowDown} width="11" height="7" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <span>SERVICES</span>
                <img src={arrowDown} width="11" height="7" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <span>SWAP</span>
                <img src={arrowDown} width="11" height="7" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <span>SELL</span>
                <img src={arrowDown} width="11" height="7" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navigation-container--right">
        <div>
          <a href="#">
            <span>USD</span>
            <img src={arrowDown} width="11" height="7" alt="" />
          </a>
        </div>
        <div>
          <button>
            <span>SIGN IN</span>
            <img src="https://chicksgold.com/sign-in/profile.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;