import React from "react";
import "./MovieCard.scss";
import "@flaticon/flaticon-uicons/css/all/all.css";
import 'react-tooltip/dist/react-tooltip.css';


const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
      <div className="overlay">
        <div className="tools">
          <button data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
            <i className="fi fi-br-plus"></i>
          </button>
        </div>
        <div className="content">
          <h4>{movie.original_title}</h4>
          <span className="lang">{movie.original_language}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
