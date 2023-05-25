"use client";

import { useState } from "react";
import {
  FiArchive,
  FiHeart,
  FiHome,
  FiList,
  FiMenu,
  FiMessageSquare,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";
import "./navigation.css";

const SliderOptions = ({ toogleSlider }) => (
  <>
    <div className="slider_login">
      <div className="slider_cross">
        <FiX onClick={toogleSlider} />
      </div>
      <img src="/Avatar.png" alt="avatar" />
      <div>
        <button className="slider_login__btn">Sign in | Register</button>
      </div>
    </div>
    <div className="slider_middle">
      <div className="slider_middle__option">
        <FiHome />
        <span>Home</span>
      </div>
      <div className="slider_middle__option">
        <FiList />
        <span>Categories</span>
      </div>
      <div className="slider_middle__option">
        <FiHeart />
        <span>Favorites</span>
      </div>
      <div className="slider_middle__option">
        <FiArchive />
        <span>My orders</span>
      </div>
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
          <FiMenu onClick={toogleSlider} />
          <span>Brand</span>
        </div>

        <div className="navbar_search__big">
          <input type="search" placeholder="search" />
        </div>
        <div className="navbar_options__right">
          <span className="navbar_right__link">
            <FiShoppingCart />
            <span>Cart</span>
          </span>
          <span className="navbar_right__link">
            <FiUser />
            <span>Profile</span>
          </span>

          <span className="navbar_right__link big_div__icon">
            <FiMessageSquare />
            <span>Messages</span>
          </span>

          <span className="navbar_right__link big_div__icon">
            <FiHeart />
            <span>Orders</span>
          </span>
        </div>
      </div>
      <div className="navbar_search">
        <input type="search" placeholder="search" />
        <FiSearch className="search_icon" />
      </div>

      {/* slider menue  */}
      <div className={`slider ${isSliderOpen ? "slide_in" : "slide_out"}`}>
        <SliderOptions toogleSlider={toogleSlider} />
      </div>
    </nav>
  );
};

export default Navigation;
