import { useRef } from "react";
import { Link } from "react-router-dom";
import Circle from "../Circle";
import "./SearchResult.css";

export default function SearchResult({ movie, selected }) {
  const linkRef = useRef(null);
  const clickLinkRef = () => linkRef.current.click();

  const selectedStyle = {
    backgroundColor: selected ? "#334a26" : "",
  };

  return (
    <section
      data-test-id="search-result"
      style={selectedStyle}
      onMouseDown={clickLinkRef}
    >
      <Link className="result--container" to={`/${movie.id}`} ref={linkRef}>
        <img
          className="result--poster"
          src={movie.poster_path}
          alt={movie.title + " movie poster"}
        />
        <div className="result--info">
          <h3 className="result--info-title">{movie.title}</h3>
          <ul className="result--info-detail">
            <li>
              <Circle percentage={100} size={"15px"} />
              {movie.average_rating.toFixed(1)}/10.0
            </li>
            <li>{new Date(movie.release_date).getFullYear()}</li>
          </ul>
        </div>
      </Link>
    </section>
  );
}
