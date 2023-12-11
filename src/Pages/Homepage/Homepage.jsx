import React, { useEffect, useState } from "react";
import "./Homepage.scss";
import "../../assets/Style/General.scss";
import ApiService from "../../api/axios";
// import { Link } from "react-router-dom";
import DblChevron from "../../components/Svgs/Icons/DblChevron";
import MovieCard from "../../components/movieCard/MovieCard";

// import { Swiper, SwiperSlide } from "react-swipe";
// import { Pagination, Navigation } from "react-swipe";

const Homepage = () => {
  const [showBtnTop, setScroll] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });

    ApiService.get("3/discover/movie?api_key=407de4dfd89db769eddb39c9ab90c177").then((resp) => {
      setMovies(resp.data.results);
      console.log(resp.data.results);
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

      <div className="container coconut-section">
        <section>
          <div className="row">
            <div className="col-12">
              <div className="section-title">Discovered Movies</div>
            </div>
          {movies.length !== 0 ? (
            movies.map((item) => {
              return (
                <div className="col-md-2" key={item.id}>
                  <MovieCard movie={item} />
                </div>
              );
            })
          ) : (
            <h2>No data</h2>
          )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
