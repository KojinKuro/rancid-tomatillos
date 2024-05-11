import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Circle from "./Circle";
import "./Hero.css";

export default function Hero({ movies, onMovieSelect }) {
  const movieElements = movies.map((movie) => {
    const { title, average_rating, release_date, backdrop_path, id } = movie;

    return (
      <div
        key={id}
        className="hero"
        style={{ backgroundImage: `url(${backdrop_path})` }}
      >
        <div className="hero-content">
          <div className="hero-title">{title}</div>
          <div className="hero-details">
            <span className="hero-rating">
              <Circle percentage={100} size={"1.5rem"} />{" "}
              {average_rating.toFixed(1)}/10.0
            </span>
            <span className="hero-year">
              {new Date(release_date).getFullYear()}
            </span>
          </div>
          <p className="hero-overview">
            Some overview that is full of buzzwords to attempt to entice you to
            watch this movie and so on and so forth. We'll add a realtagline
            later.
          </p>
          <button onClick={() => onMovieSelect(movie)}>
            <box-icon color="white" name="play-circle"></box-icon>More Info
          </button>
        </div>
      </div>
    );
  });

  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
    >
      {movieElements}
    </Carousel>
  );
}
