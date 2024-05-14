import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    if (!searchTerm.length) {
      setFilteredMovies([]);
      return;
    }

    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, movies]);

  function handleSearchClick(movie) {
    setSearchTerm("");
  }

  const filteredMoviesElements = filteredMovies
    .map((movie) => (
      <li key={movie.id} onClick={() => handleSearchClick(movie)}>
        <Link to={`/${movie.id}`}>{movie.title}</Link>
      </li>
    ))
    .slice(0, 5);

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          borderRadius: filteredMovies.length ? "25px 25px 0 0" : "25px",
        }}
      />
      <button
        type="button"
        className="search-button"
        onClick={() => inputRef.current.focus()}
      >
        <box-icon color="#73CB3E" name="search-alt-2"></box-icon>
      </button>
      {filteredMovies.length > 0 && (
        <ul className="search-results">{filteredMoviesElements}</ul>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
