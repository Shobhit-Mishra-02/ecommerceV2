"use client";
import "./prodview.css";
import {
  FiMessageSquare,
  FiShoppingCart,
  FiShoppingBag,
  FiHeart,
  FiCheck,
  FiMapPin,
  FiGlobe,
} from "react-icons/fi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="/tShirt.png" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/tShirt.png" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/tShirt.png" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/tShirt.png" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/tShirt.png" alt="image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const ProductView = () => {
  return (
    <div className="container">
      <div className="prodview">
        <div className="prodview_display">
          <Slider />
        </div>
        <div className="prod_content">
          <div className="prod_desc">
            <div className="prod_desc__rating">
              <div className="stars">
                <img src="/coloredstar.png" alt="star image" />
                <img src="/coloredstar.png" alt="star image" />
                <img src="/coloredstar.png" alt="star image" />
                <img src="/coloredstar.png" alt="star image" />
                <img src="/coloredstar.png" alt="star image" />
              </div>
              <div className="dot"></div>
              <div className="review">
                <FiMessageSquare />
                <span>32 reviews</span>
              </div>
              <div className="dot"></div>
              <div className="sold">
                <FiShoppingBag />
                154 sold
              </div>
            </div>
            <div className="prod_desc__section">
              <h4 className="prod_title">Product name goes here</h4>
              <span className="prod_price">$129.95</span>
              <div className="prod_btn__section">
                <button className="btn-primary-expand">Send inquiry</button>
                <button className="prod_btn__heart">
                  <FiHeart />
                </button>
              </div>

              <div className="prod_points">
                <div className="prod_points__titles">
                  <span>Condition</span>
                  <span>Material</span>
                  <span>Category</span>
                  <span>Item num</span>
                </div>
                <div className="prod_points__values">
                  <span>Brand new</span>
                  <span>Plastic</span>
                  <span>Electronics</span>
                  <span>3241</span>
                </div>
              </div>

              <p className="prod_desc__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                numquam consequatur perspiciatis, ab voluptates...
              </p>
              <span className="readmore">Read more</span>
            </div>
          </div>
          <div className="supplier_desc">
            <div className="supplier_desc__upper">
              <div className="supplier_desc__icon"></div>
              <div className="supplier_info">
                <h4>Supplier</h4>
                <h3>Supplier name</h3>
              </div>
            </div>
            <div className="supplier_desc__location">
              <div className="supplier_country">
                <FiMapPin />
                <span>Germany</span>
              </div>
              <div className="supplier_verify">
                <FiCheck />
                <span>Verified</span>
              </div>
              <div className="supplier_shipping">
                <FiGlobe />
                <span>Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
