import PropTypes from "prop-types";
import Movie from "./Movie";
import "./Movies.css";

export default function Movies({ movies }) {
  const movieElements = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });

  return <div className="movies-container">{movieElements}</div>;
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      average_rating: PropTypes.number,
    })
  ).isRequired,
};
