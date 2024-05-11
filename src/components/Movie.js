import "./Movie.css";
import MovieRating from "./MovieRating";

export default function Movie({ movie, onSelect }) {
  const { title, poster_path, average_rating } = movie;

  return (
    <section className="movie" onClick={() => onSelect(movie)}>
      <div className="movie--poster">
        <img src={poster_path} alt={`${title} poster`} />
        <div className="movie--overlay">
          <box-icon name="play-circle" color="#73cb3e" size="100px"></box-icon>
        </div>
      </div>
      <MovieRating rating={average_rating} />
      <div className="movie--title">{title}</div>
    </section>
  );
}
