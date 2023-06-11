import React from "react";

const MovieCard = ({ movie, addMovie }) => {
  return (
    <div>
      <div className="movie-card">
        <img
          style={{
            height: "300px",
            width: "300px",
          }}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="movie poster image"
        />
        <h3>{movie.original_title}</h3>
      </div>
      <button onClick={() => addMovie(movie)}>Add to list</button>
    </div>
  );
};

export default MovieCard;
