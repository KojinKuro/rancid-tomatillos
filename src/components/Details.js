import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";

import { getMovie, getMovieVideos } from "../apiCalls";
import "./Details.css";
import MovieRating from "./MovieRating";
import PropTypes from 'prop-types';


export default function Details({ movie, onReturnHome, addError }) {
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

  const [movieVideos, setMovieVideos] = useState([]);
  // get the video list from the server
  useEffect(() => {
    getMovieVideos(movie.id)
      .then((videos) => {
        // if there is no videos, set to a fake trailer
        if (!videos.length) {
          setMovieVideos([
            {
              id: 19,
              movie_id: 724495,
              key: "5BZLz21ZS_Y",
              site: "YouTube",
              type: "Trailer",
            },
          ]);
        } else setMovieVideos(videos);
      })
      .catch((error) => addError(`${error}`));
  }, [movie]);

  return (
    <>
      <div className="background-image" style={bgStyle}></div>
      <div className="movie-details--container">
        <button onClick={onReturnHome} className="return-home-button">
          <box-icon color="white" name="left-arrow-alt"></box-icon>Return Home
        </button>
        <MovieDetail addError={addError} movie={movie} />
        <MovieVideos movie={movie} videos={movieVideos} />
      </div>
    </>
  );
}

function MovieDetail({ movie, addError }) {
  const [movieInfo, setMovieInfo] = useState(movie);
  const {
    title,
    poster_path,
    average_rating,
    release_date,
    budget = 0,
    genres = [""],
    overview = "",
    revenue = 0,
    runtime = 0,
    tagline = "",
  } = movieInfo;

  // get the movie info from the server
  useEffect(() => {
    getMovie(movie.id)
      .then(setMovieInfo)
      .catch((error) => addError(`${error}`));
  }, [movie]);

  return (
    <section className="movie-details">
      <img src={poster_path} alt={`${title} poster`} />
      <div>
        <h1>{title}</h1>
        <div>{tagline}</div>
      </div>
      <MovieRating rating={average_rating} />
      <div>{overview}</div>

      {/* Contains placeholder data */}
      <table className="movie-info">
        <thead>
          <tr hidden>
            <th>Categories</th>
            <th>Descriptions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Release Date:</td>
            <td>{new Date(release_date).getFullYear()}</td>
          </tr>
          <tr>
            <td>Length:</td>
            <td>{runtime}min</td>
          </tr>
          <tr>
            <td>Genre:</td>
            <td>{genres.join(", ")}</td>
          </tr>
          <tr>
            <td>Budget:</td>
            <td>${budget}</td>
          </tr>
          <tr>
            <td>Revenue:</td>
            <td>${revenue}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function MovieVideos({ movie, videos }) {
  const videoElements = videos.map((video) => {
    return (
      <div className="react-player-container" key={video.id}>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={`https://www.youtube.com/watch?v=${video.key}`}
        />
      </div>
    );
  });

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      showIndicators={false}
      useKeyboardArrows={true}
      emulateTouch={true}
    >
      {videoElements}
    </Carousel>
  );
}

Details.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onReturnHome: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
};

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    average_rating: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
  addError: PropTypes.func.isRequired,
};

MovieVideos.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    movie_id: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    site: PropTypes.string,
    type: PropTypes.string,
  })).isRequired,
};

