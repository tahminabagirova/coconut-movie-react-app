import React from "react";
import "./Homepage.scss";
// import { Swiper, SwiperSlide } from "react-swipe";
// import { Pagination, Navigation } from "react-swipe";

const Homepage = () => {
  return (
    <div className="container">
      <div className="main-section">
          <div className="row align-items-center">
            <div className="col-md-5 content-side">
              <h1>Bütün işlərinizi bir hesabda birləşdirdik! </h1>
              <p>Müxtəlif sektorda olan sahibkarlara biznes proseslərinin idarəsini asanlaşdıracaq rəqəmsal biznes həlləri</p>
              <button class="btn btn-outline">Elə indi təklif al!</button>
            </div>
            <div className="col-md-7 image-side"></div>
          </div>
      </div>
    </div>
  );
};

export default Homepage;