import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import { Link, useParams } from "react-router-dom";
import { ErrorContext } from "../App";
import { getMovie, getMovieVideos } from "../apiCalls";
import MovieRating from "../components/MovieRating";
import "./MoviePage.css";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const [movieVideos, setMovieVideos] = useState([]);
  const { movieId } = useParams();
  const { addError } = useContext(ErrorContext);

  useEffect(() => {
    getMovie(movieId)
      .then(setMovie)
      .catch((error) => addError(`${error}`));
  }, [movieId]);

  // get the video list from the server
  useEffect(() => {
    // will get if there is no movie set
    if (!Object.keys(movie).length) return;

    getMovieVideos(movie.id)
      .then((videos) => {
        // if there is no videos, set to a fake trailer
        if (!videos.length) {
          setMovieVideos([
            {
              id: 1,
              movie_id: movie.id,
              key: "5BZLz21ZS_Y",
              site: "YouTube",
              type: "Error",
            },
          ]);
        } else setMovieVideos(videos);
      })
      .catch((error) => addError(`${error}`));
  }, [movie]);

  const bgStyle = {
    position: "fixed",
    left: 0,
    right: 0,

    backgroundImage: movie ? `url(${movie.backdrop_path})` : "",
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
      <Link to="/">
        <button className="return-home-button">
          <box-icon color="white" name="left-arrow-alt"></box-icon>Return Home
        </button>
      </Link>
      <div className="movie-details--container">
        <MovieDetail movie={movie} />
        <MovieVideos videos={movieVideos} />
      </div>
    </>
  );
}

function MovieDetail({ movie }) {
  const {
    title = "",
    poster_path = "",
    average_rating = 0,
    release_date = "2020-10-15",
    budget = 0,
    genres = [""],
    overview = "",
    revenue = 0,
    runtime = 0,
    tagline = "",
  } = movie;

  return (
    <section className="movie-details">
      <img src={poster_path} alt={`${title} poster`} />
      <div>
        <h1 data-test-id="movie-title">{title}</h1>
        <div data-test-id="movie-tagline">{tagline}</div>
      </div>
      <MovieRating data-test-id="movie-rating" rating={average_rating} />
      <div data-test-id="movie-overview">{overview}</div>

      <table className="movie-info">
        <thead>
          <tr hidden>
            <th>Categories</th>
            <th>Descriptions</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="movie-release">
            <td>Release Date:</td>
            <td>{new Date(release_date).getFullYear()}</td>
          </tr>
          <tr data-test-id="movie-length">
            <td>Length:</td>
            <td>{runtime}min</td>
          </tr>
          <tr data-test-id="movie-genres">
            <td>Genre{genres.length > 1 ? "s" : ""}:</td>
            <td>{genres.join(", ")}</td>
          </tr>
          <tr data-test-id="movie-budget">
            <td>Budget:</td>
            <td>${budget}</td>
          </tr>
          <tr data-test-id="movie-revenue">
            <td>Revenue:</td>
            <td>${revenue}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    average_rating: PropTypes.number,
    release_date: PropTypes.string,
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
  }).isRequired,
};

function MovieVideos({ videos }) {
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
      showIndicators={false}
      useKeyboardArrows={true}
      emulateTouch={true}
    >
      {videoElements}
    </Carousel>
  );
}

MovieVideos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, key: PropTypes.string })
  ).isRequired,
};
