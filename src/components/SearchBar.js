import { useEffect, useRef, useState } from "react";
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

  const filteredMoviesElements = filteredMovies
    .map((movie) => <li key={movie.id}>{movie.title}</li>)
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
        🔍
      </button>
      {filteredMovies.length > 0 && (
        <ul className="search-results">{filteredMoviesElements}</ul>
      )}
    </div>
  );
}
