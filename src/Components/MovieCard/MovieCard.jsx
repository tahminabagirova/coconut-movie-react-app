import React, { useEffect } from "react";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=407de4dfd89db769eddb39c9ab90c177"
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-card">
      <img src="" alt="" />
      test
    </div>
  );
};

export default MovieCard;
