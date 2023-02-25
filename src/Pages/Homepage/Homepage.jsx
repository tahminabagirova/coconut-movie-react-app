import React from "react";
import "./Homepage.scss";
import { Link } from "react-router-dom";
import kamurLogo from "../../Assets/Img/Logo/kamur.png";
import binaHesabiLogo from "../../Assets/Img/Logo/binahesabi.png";
import yerCloudlogo from "../../Assets/Img/Logo/yercloud.png";
import morLogo from "../../Assets/Img/Logo/mor.jpg";
import "../../Components/FeaturesCard/FeaturesCard.scss";
import FeaturesCard from "../../Components/FeaturesCard/FeaturesCard";
import DblChevron from "../../Components/Svgs/Icons/DblChevron";

import { motion, useViewportScroll, useTransform } from "framer-motion";

// import { Swiper, SwiperSlide } from "react-swipe";
// import { Pagination, Navigation } from "react-swipe";

const Homepage = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [1, 2], [0.2, 2]);

  return (
    <div className="home-page-main">

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
      </div>

      <section className="what-is-it-section section-ish" id="whatIsIt">
        <div className="shape"></div>
          <div className="container">
            <h2 className="section-title">Bütün biznes ehtiyaclarınız bir platformada</h2>
            <p>Müxtəlif sektorda olan sahibkarlara biznes proseslərinin  idarəsini <br /> asanlaşdıracaq rəqəmsal biznes həlləri</p>
            <Link className="btn btn-outline" to="">Sistemimizlə tanış olun</Link>
          </div>
        <div className="shape2"></div>
        <button className="btn-up"><DblChevron/></button>
      </section>

      <section className="features-section section-ish" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex">
              <div className="row flex-column m-0">
                  {/* <motion.div className="col-12" 
                  style={{
                    scaleY: scrollYProgress
                  }} >
                    <FeaturesCard/>
                  </motion.div> */}
                <div className="col-12"><FeaturesCard/></div>
                <div className="col-12"><FeaturesCard/></div>
              </div>
              <div className="row flex-column m-0 mt-5">
                <div className="col-12"><FeaturesCard/></div>
                <div className="col-12"><FeaturesCard/></div>
              </div>
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center">
              <h2 className="section-title">Özəlliklər</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aspernatur consequatur ea <br /> aperiam voluptatibus doloribus laboriosam. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section section-ish" id="partners">
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-flex flex-column justify-content-center">
              <h2 className="section-title">Müştərilər</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque laudantium porro maiores repudiandae esse rem id sunt ex tempore voluptates, atque praesentium at laboriosam velit delectus molestias possimus adipisci qui.</p>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                <Link className="logo-partners" to={"https://kamurgroup.az/"} target="_blank" rel="noreferrer">
                  <img src={kamurLogo} alt="" />
                </Link>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <Link className="logo-partners" to={"https://yer.cloud/"} target="_blank" rel="noreferrer">
                    <img src={yerCloudlogo} alt="" />
                  </Link>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <Link className="logo-partners" to={"https://binahesabi.com/"} target="_blank" rel="noreferrer">
                    <img src={binaHesabiLogo} alt="" />
                  </Link>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <Link className="logo-partners">
                    <img src={morLogo} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;