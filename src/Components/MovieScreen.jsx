import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({ watchList, page, setPage, movieList, addMovie }) => {
  const movieDisplay = movieList.map((movie) => {
    return <MovieCard addMovie={addMovie} movie={movie} />;
  });

  return (
    <div className="page">
      <h1>Anwar's Movie Theatre</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;