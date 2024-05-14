import "./Header.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header({ movies, onMovieSelect }) {
  return (
    <header className="header">
      <Logo />
      <SearchBar movies={movies} onSelect={onMovieSelect} />
    </header>
  );
}
