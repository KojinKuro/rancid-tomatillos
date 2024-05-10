import "./Header.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header({ movies }) {
  return (
    <header className="header">
      <Logo />
      <SearchBar movies={movies} />
    </header>
  );
}
