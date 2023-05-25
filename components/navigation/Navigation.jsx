"use client";

import "./navigation.css";
import { BiMenu } from "react-icons/bi";
import { GrCart } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import { useState } from "react";

const SliderOptions = ({ toogleSlider }) => (
  <>
    <div className="slider_login">
      <div className="slider_cross">
        <FiX onClick={toogleSlider} />
      </div>
      <img src="/Avatar.png" alt="avatar" />
      <div>Sign in | Register</div>
    </div>
    <div className="slider_middle">
      <div className="slider_middle__option">Home</div>
      <div className="slider_middle__option">Categories</div>
      <div className="slider_middle__option">Favorites</div>
      <div className="slider_middle__option">My orders</div>
    </div>
    <div className="slider_last">
      <div className="slider_last__option">Contact us</div>
      <div className="slider_last__option">About us</div>
    </div>
  </>
);

const Navigation = () => {
  const [isSliderOpen, setSliderStatus] = useState(false);
  const toogleSlider = () => {
    isSliderOpen ? setSliderStatus(false) : setSliderStatus(true);
  };
  return (
    <nav className="navbar">
      <div className="navbar_options">
        <div className="navbar_options__left">
          <BiMenu onClick={toogleSlider} />
          <span>Brand</span>
        </div>

        <div className="navbar_options__right">
          <GrCart />
          <BsPerson />
        </div>
      </div>
      <div className="navbar_search">
        <input type="search" placeholder="search" />
      </div>

      {/* slider menue  */}
      <div className={`slider ${isSliderOpen ? "slide_in" : "slide_out"}`}>
        <SliderOptions toogleSlider={toogleSlider} />
      </div>
    </nav>
  );
};

export default Navigation;
