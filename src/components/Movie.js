import Circle from "./Circle";
import "./Movie.css";

export default function Movie({ movie }) {
  return (
    <section className="movie">
      <div className="movie--poster">
        <img src={movie.poster_path} alt={`${movie.title} poster`} />
        <div className="movie--overlay">
          <box-icon name="play-circle" color="#73cb3e" size="100px"></box-icon>
        </div>
      </div>
      <MovieRating rating={movie.average_rating} />
      <div className="movie--title">{movie.title}</div>
    </section>
  );
}

// code kept here because it does not need to be exported anywhere
function MovieRating({ rating }) {
  const formattedRating = rating.toFixed(1);
  let ratingElements = [];

  let testRating = Math.round(rating);
  for (let i = 0; i < 5; ++i) {
    if (testRating >= 2) {
      <Circle key={i} percentage={100} />;

      ratingElements.push(<Circle key={i} percentage={100} />);
      testRating -= 2;
    } else if (testRating >= 1) {
      ratingElements.push(<Circle key={i} percentage={50} />);
      testRating -= 1;
    } else {
      ratingElements.push(<Circle key={i} percentage={0} />);
    }
  }

  return (
    <div className="movie--rating">
      <span className="circle--container">{ratingElements}</span>
      <span>{formattedRating} / 10.0</span>
    </div>
  );
}
