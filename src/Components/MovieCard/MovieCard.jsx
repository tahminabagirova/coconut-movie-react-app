import React, { useEffect } from "react";
import ApiService from "../../api/axios";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
    </div>
  );
};

export default MovieCard;
