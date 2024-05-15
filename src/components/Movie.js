import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";
import MovieRating from "./MovieRating";

export default function Movie({ movie }) {
  const { title, poster_path, average_rating, id } = movie;

  return (
    <section className="movie">
      <Link to={`/${id}`}>
        <div className="movie--poster">
          <img src={poster_path} alt={`${title} poster`} />
          <div className="movie--overlay">
            <box-icon
              name="play-circle"
              color="#73cb3e"
              size="100px"
            ></box-icon>
          </div>
        </div>
      </Link>
      <MovieRating rating={average_rating} />
      <div className="movie--title">{title}</div>
    </section>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
