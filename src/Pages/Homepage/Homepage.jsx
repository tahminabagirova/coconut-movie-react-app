import React from "react";
import "./Homepage.scss";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "react-swipe";
// import { Pagination, Navigation } from "react-swipe";

const Homepage = () => {
  return (
    <div className="home-page-main">
      <div className="container">
        <section className="main-section section-ish">
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
      </div>

      <section className="what-is-it-section section-ish" id="whatIsIt">
        <div className="shape"></div>
          <div className="container">
            <h2 className="section-title">Bütün biznes ehtiyaclarınız bir platformada</h2>
            <p>Müxtəlif sektorda olan sahibkarlara biznes proseslərinin  idarəsini <br /> asanlaşdıracaq rəqəmsal biznes həlləri</p>
            <Link className="btn btn-outline" to="">Sistemimizlə tanış olun</Link>
          </div>
        <div className="shape2"></div>
      </section>

      <section className="features-section section-ish" id="features">
        <div className="container">
          <h2 className="section-title">Özəlliklər</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aspernatur consequatur ea <br /> aperiam voluptatibus doloribus laboriosam. </p>
          <div className="row">
            <div className="col-md-4">
              <div className="card">

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;