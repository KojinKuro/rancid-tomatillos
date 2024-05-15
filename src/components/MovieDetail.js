import PropTypes from "prop-types";
import MovieRating from "../components/MovieRating";
import "./MovieDetail.css";

export default function MovieDetail({ movie }) {
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
