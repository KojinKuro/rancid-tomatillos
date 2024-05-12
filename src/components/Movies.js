import Movie from "./Movie";
import "./Movies.css";
import PropTypes from 'prop-types';


export default function Movies({ movies, onMovieSelect }) {
  const movieElements = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} onSelect={onMovieSelect}/>;
  });

  return <div className="movies-container">{movieElements}</div>;
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    average_rating: PropTypes.number,
  })).isRequired,
  onMovieSelect: PropTypes.func.isRequired,
};