import "./Hero.css";

export default function Hero({ movie }) {
  const { title, average_rating, release_date, backdrop_path } = movie;

  return (
    <div className="hero" style={{ backgroundImage: `url(${backdrop_path})` }}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <div className="hero-details">
          <span className="hero-rating">{average_rating.toFixed(2)} / 5.0</span>
          <span className="hero-year">{new Date(release_date).getFullYear()}</span>
          <p className="hero-overview">
            Some overview that is full of buzzwords to attempt to entice you to watch this movie and so on and so forth. We'll add a realtagline later.
          </p>
          <button className="hero-more-info">More Info</button>
        </div>
      </div>
    </div>
  );
}