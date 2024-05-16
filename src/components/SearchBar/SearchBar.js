import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import SearchResult from "./SearchResult";

export default function SearchBar({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!searchTerm.length) {
      setFilteredMovies([]);
      return;
    }

    setFilteredMovies(
      movies
        .sort((a, b) => a.title.localeCompare(b.title))
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [searchTerm, movies]);

  const filteredMoviesElements = filteredMovies
    .map((movie) => <SearchResult key={movie.id} movie={movie} />)
    .slice(0, 5);

  return (
    <div className="search-bar" onBlur={() => setSearchTerm("")}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          borderRadius: filteredMovies.length ? "17px 17px 0 0" : "17px",
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
      poster_path: PropTypes.string,
      average_rating: PropTypes.number,
    })
  ).isRequired,
};
