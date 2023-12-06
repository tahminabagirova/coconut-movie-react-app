import React, { useState, useEffect } from "react";
import "./Homepage.scss";
// import { Link } from "react-router-dom";
import DblChevron from "../../Components/Svgs/Icons/DblChevron";
import MovieCard from "../../Components/MovieCard/MovieCard";

// import { Swiper, SwiperSlide } from "react-swipe";
// import { Pagination, Navigation } from "react-swipe";

const Homepage = () => {
  const [showBtnTop, setScroll] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-page-main">
      <button
        className={`btn-up ${showBtnTop ? "show" : ""}`}
        onClick={scrollTop}
      >
        <DblChevron />
      </button>

      <div className="container">
        <section className="main-section">
          <div className="row align-items-center">
            <div className="col-md-5 content-side">
              <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
              <p>
                Sunt est nihil consequatur, dolore, facere possimus blanditiis.
              </p>
              <button className="btn btn-outline mr-3">Apply</button>
              <button className="btn btn-brown">Free test</button>
            </div>
            <div className="col-md-7 image-side"></div>
          </div>
        </section>

        <section>
          <div className="row">
            {movies.map((movie) => {
              return (
                <div className="col-md-4" key={movie}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}



          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
