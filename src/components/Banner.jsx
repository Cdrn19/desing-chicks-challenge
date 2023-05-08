import React from "react";
import "../styles/Banner.scss"; 

import visa from "../assets/images/visa.svg";
import masterCard from "../assets/images/mastercard.svg";
import amex from "../assets/images/amex.svg";
import skrill from "../assets/images/skrill.svg";
import cripto from "../assets/images/crypto.svg";

const Banner = () => {
  return(
    <div className="banner__container">
      <div>
        <div className="banner__payments">
          <div className="banner__payments--images">
            <img src={visa} alt="" />
            <img src={masterCard} alt="" />
            <img src={amex} alt="" />
            <img src={skrill} alt="" />
            <img src={cripto} alt="" />
          </div>
          <div className="banner__payments--button">
            <button>
              <span>and 50+ more</span>
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;