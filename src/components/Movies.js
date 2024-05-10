import Movie from "./Movie";
import "./Movies.css";

export default function Movies({ movies, onMovieSelect }) {
  const movieElements = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} onSelect={onMovieSelect}/>;
  });

  return <div className="movies-container">{movieElements}</div>;
}
