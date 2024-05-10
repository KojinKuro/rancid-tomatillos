import "./Header.css";
import React, {useState} from "react";

export default function Header({ movies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]);
    }
  };

  return (
  <header className="header">
    <h1 className="logo">
      RANCID T<span className="green-logo">O</span>MATILLOS
    </h1>
    <div className="search-bar">
      <input type="text" placeholder="Search movies" value={searchTerm} onChange={handleSearchChange}/>
      <button type="button" className="search-button">🔍</button>
      {filteredMovies.length > 0 && (
        <ul className="search-results">
          {filteredMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}  
    </div>
  </header>
  );
}
