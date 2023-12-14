import React from "react";
import ApiService from "../../api/axios";
import "./MovieCard.scss";
import "@flaticon/flaticon-uicons/css/all/all.css";
import 'react-tooltip/dist/react-tooltip.css';

const MovieCard = ({ movie }) => {
  const addToFavourites = (e) => {
    e.preventDefault();
    ApiService.post(`3/account/20694159/favorite?api_key=407de4dfd89db769eddb39c9ab90c177`).then((resp) => {
      window.location.reload();
      console.log(movie.id);
    });
  };
  return (
    <div className="movie-card">
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
      <div className="overlay">
        <div className="tools">
          <button onClick={(e) => addToFavourites(e, movie.id)}>
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
