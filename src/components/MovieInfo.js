import MovieDetail from "../components/MovieDetail";
import MovieVideos from "../components/MovieVideos";
import "./MovieInfo.css";

export default function MovieInfo({ movie }) {
  return (
    <div className="movie-info--container">
      <MovieDetail movie={movie} />
      <MovieVideos movieId={movie.id} />
    </div>
  );
}
