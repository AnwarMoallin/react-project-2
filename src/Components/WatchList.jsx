import React from "react";
import MovieCard from "./MovieCard";

const WatchList = ({ watchList }) => {
  const movieDisplay = watchList.map((watch) => {
    return <MovieCard />;
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default WatchList;
