import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Circle from "./Circle";
import "./Hero.css";

export default function Hero({ heroMovies }) {
  const movieElements = heroMovies.map((movie) => {
    const {
      title,
      average_rating,
      release_date,
      backdrop_path,
      id,
      overview = "",
      runtime = 100,
      genres = [],
    } = movie;

    return (
      <div
        key={id}
        className="hero"
        style={{ backgroundImage: `url(${backdrop_path})` }}
      >
        <div className="hero-content">
          <div className="hero-title">{title}</div>
          <div className="hero-details">
            <div className="hero-rating">
              <Circle percentage={100} size={"1.5rem"} />{" "}
              {average_rating.toFixed(1)}/10.0
            </div>
            <div>{new Date(release_date).getFullYear()}</div>
            <div>{runtime} min</div>
            <div>{genres[0]}</div>
          </div>
          <p className="hero-overview">{overview}</p>
          <Link to={`/${id}`}>
            <button>
              <box-icon color="white" name="play-circle"></box-icon>More Info
            </button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <Carousel
      autoPlay={true}
      autoFocus={true}
      interval={3000}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true} /* causes a bug where hero starts at the end*/
      useKeyboardArrows={true}
    >
      {movieElements}
    </Carousel>
  );
}

Hero.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string,
      overview: PropTypes.string,
      runtime: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};
