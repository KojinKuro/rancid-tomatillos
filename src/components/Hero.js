import Circle from "./Circle";
import "./Hero.css";

export default function Hero({ movie }) {
  const { title, average_rating, release_date, backdrop_path } = movie;

  return (
    <div className="hero" style={{ backgroundImage: `url(${backdrop_path})` }}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <div className="hero-details">
          <span className="hero-rating">
            <Circle percentage={100} size={"1.5rem"} />{" "}
            {(average_rating / 2).toFixed(1)}/5.0
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
        <button>
          <box-icon color="white" name="play-circle"></box-icon>More Info
        </button>
      </div>
    </div>
  );
}
