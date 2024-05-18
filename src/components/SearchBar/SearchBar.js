import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import SearchKeyboard from "./SearchKeyboard";
import SearchMissing from "./SearchMissing";
import SearchResult from "./SearchResult";

export default function SearchBar({ movies }) {
  const [searchText, setSearchText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentIndex, setCurrentIndex] = useState(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (!searchText.length) return;

    setFilteredMovies(
      movies
        .toSorted((a, b) => a.title.localeCompare(b.title))
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchText.toLowerCase())
        )
    );
  }, [searchText, movies]);

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
    // on escape
    if (event.keyCode === 27) resetSearch();
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
    } else if (event.keyCode === 40) {
      // on arrow down
      if (currentIndex === null) {
        setCurrentIndex(0);
      } else if (currentIndex + 1 >= filteredMoviesElements.length) {
        setCurrentIndex(null);
      } else {
        setCurrentIndex((prevIndex) => ++prevIndex);
      }
    } else if (event.keyCode === 13) {
      // on enter
      if (currentIndex === null) return;

      navigate(`/${filteredMovies[currentIndex].id}`);
      resetSearch();
    }
  }

  function handleSearch(event) {
    setSearchText(event.target.value);
    setCurrentIndex(null);
  }

  function resetSearch() {
    setSearchText("");
    setCurrentIndex(null);
  }

  function handleButton() {
    inputRef.current.focus();
  }

  return (
    <div className="search-bar" onBlur={resetSearch} onKeyDown={handleKeyPress}>
      <input
        data-test-id="search-bar-input"
        ref={inputRef}
        type="text"
        placeholder="Search movies"
        value={searchText}
        onChange={handleSearch}
        style={{
          borderRadius: searchText.length ? "17px 17px 0 0" : "17px",
        }}
      />
      <button type="button" className="search-button" onClick={handleButton}>
        <box-icon color="#73CB3E" name="search-alt-2"></box-icon>
      </button>
      {searchText !== "" && (
        <ul className="search-results" data-test-id="search-results">
          {filteredMoviesElements}
          <SearchKeyboard />
        </ul>
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
