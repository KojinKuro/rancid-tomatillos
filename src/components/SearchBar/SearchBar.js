import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import SearchMissing from "./SearchMissing";
import SearchResult from "./SearchResult";

export default function SearchBar({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
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

  const filteredMoviesElements = filteredMovies.length ? (
    filteredMovies
      .map((movie, index) => (
        <SearchResult
          selected={index === currentIndex}
          key={movie.id}
          movie={movie}
        />
      ))
      .slice(0, 5)
  ) : (
    <SearchMissing />
  );

  function handleKeyPress(event) {
    if (!filteredMoviesElements.length) return;

    if (event.keyCode === 38) {
      // on arrow up
      if (currentIndex === null) {
        setCurrentIndex(filteredMoviesElements.length - 1);
      } else if (currentIndex - 1 < 0) {
        setCurrentIndex(null);
      } else {
        setCurrentIndex((prevIndex) => --prevIndex);
      }

      console.log("up");
    } else if (event.keyCode === 40) {
      // on arrow down
      if (currentIndex === null) {
        setCurrentIndex(0);
      } else if (currentIndex + 1 >= filteredMoviesElements.length) {
        setCurrentIndex(null);
      } else {
        setCurrentIndex((prevIndex) => ++prevIndex);
      }

      console.log("down");
    } else if (event.keyCode === 13) {
      console.log("enter");
    } else if (event.keyCode === 27) {
      // on escape
      resetSearch();
    }
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    setCurrentIndex(null);
  }

  console.log(currentIndex);

  function resetSearch() {
    setSearchTerm("");
    setCurrentIndex(null);
  }

  return (
    <div className="search-bar" onBlur={resetSearch} onKeyDown={handleKeyPress}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          borderRadius: searchTerm.length ? "17px 17px 0 0" : "17px",
        }}
      />
      <button
        type="button"
        className="search-button"
        onClick={() => inputRef.current.focus()}
      >
        <box-icon color="#73CB3E" name="search-alt-2"></box-icon>
      </button>
      {searchTerm !== "" && (
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
