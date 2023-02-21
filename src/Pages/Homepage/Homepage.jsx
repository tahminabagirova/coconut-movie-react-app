import React from "react";
import "./Homepage.scss";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "react-swipe";
// import { Pagination, Navigation } from "react-swipe";

const Homepage = () => {
  return (
    <div className="container">
      <section className="main-section">
          <div className="row align-items-center">
            <div className="col-md-5 content-side">
              <h1>Bütün işlərinizi bir hesabda birləşdirdik! </h1>
              <p>Müxtəlif sektorda olan sahibkarlara biznes proseslərinin idarəsini asanlaşdıracaq rəqəmsal biznes həlləri</p>
              <button className="btn btn-outline mr-3">Elə indi təklif al!</button>
              <button className="btn btn-brown">Pulsuz test et</button>
            </div>
            <div className="col-md-7 image-side"></div>
          </div>
      </section>

      <section className="what-is-it-section" id="whatIsIt">
          <h2>Bütün biznes ehtiyaclarınız bir platformada</h2>
          <p>Müxtəlif sektorda olan sahibkarlara biznes proseslərinin  idarəsini <br /> asanlaşdıracaq rəqəmsal biznes həlləri</p>
          <Link className="btn btn-outline" to="">Sistemimizlə tanış olun</Link>
      </section>
    </div>
  );
};

export default Homepage;