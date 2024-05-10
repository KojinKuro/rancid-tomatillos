import Movie from "./Movie";
import "./Movies.css";

export default function Movies({ movies }) {
  const movieElements = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });

  return <div className="movies-container">{movieElements}</div>;
}
