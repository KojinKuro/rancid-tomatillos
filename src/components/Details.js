import React from "react";
import ReactPlayer from "react-player";
import "./Details.css";
import MovieRating from "./MovieRating";

export default function Details({ movie, onReturnHome }) {
  const bgStyle = {
    position: "fixed",
    left: 0,
    right: 0,

    backgroundImage: `url(${movie.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "blur(7px)",

    opacity: "25%",

    zIndex: "1",
    display: "block",
    width: "100%",
    height: "100vh",
  };

  return (
    <>
      <div className="background-image" style={bgStyle}></div>
      <div className="movie-details--container">
        <button onClick={onReturnHome} className="return-home-button">
          <box-icon color="white" name="left-arrow-alt"></box-icon>Return Home
        </button>
        <MovieDetail movie={movie} />
        <div className="react-player-container">
          <div className="movie-trailer-name">{movie.title} trailer</div>
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          />
        </div>
      </div>
    </>
  );
}

function MovieDetail({ movie }) {
  const { title, poster_path, average_rating, release_date } = movie;

  return (
    <section className="movie-details">
      <img src={poster_path} alt={`${title} poster`} />
      <div>
        <h1>{title}</h1>
        <div>It’s a movie!</div>
      </div>
      <MovieRating rating={average_rating} />
      <div>
        Some overview that is full of buzzwords to attempt to entice you to
        watch this movie! Explosions! Drama! True love! Robots! A cute dog
      </div>

      {/* Contains placeholder data */}
      <table className="movie-info">
        <tr>
          <td>Release Date:</td>
          <td>{new Date(release_date).getFullYear()}</td>
        </tr>
        <tr>
          <td>Length:</td>
          <td>150min</td>
        </tr>
        <tr>
          <td>Genre:</td>
          <td>Drama</td>
        </tr>
        <tr>
          <td>Budget:</td>
          <td>$5000000</td>
        </tr>
        <tr>
          <td>Revenue:</td>
          <td> $550000</td>
        </tr>
      </table>
    </section>
  );
}
