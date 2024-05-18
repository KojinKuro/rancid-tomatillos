import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovie } from "../apiCalls";
import MovieInfo from "../components/MovieInfo";
import MovieMissing from "../components/MovieMissing";
import "./MoviePage.css";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const [movieError, setMovieError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId)
      .then((movie) => setMovie(movie))
      .catch(() => setMovieError(true));
  }, [movieId]);

  const backgroundImage = {
    backgroundImage: movie ? `url(${movie.backdrop_path})` : "",
  };

  return (
    <>
      <div className="background-image" style={backgroundImage} />
      <Link
        to="/"
        className="return-home-link"
        data-test-id="return-home-button"
      >
        <button className="return-home-button">
          <box-icon color="white" name="left-arrow-alt" />
          Return Home
        </button>
      </Link>
      {!movieError ? <MovieInfo movie={movie} /> : <MovieMissing />}
    </>
  );
}
