import { useState } from "react";
import "./App.css";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import movieData from "./moviesData";

function App() {
  const [moviesData, setMoviesData] = useState(movieData.movies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleReturnHome = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <Header movies={moviesData} />
      {selectedMovie ? (
        <Details movie={selectedMovie} onReturnHome={handleReturnHome} />
      ) : (
        <>
          <Hero
            movies={moviesData.slice(0, 5)}
            onMovieSelect={handleMovieSelect}
          />
          <Movies movies={moviesData} onMovieSelect={handleMovieSelect} />
        </>
      )}
      {!selectedMovie ? <Footer /> : ""}
    </div>
  );
}

export default App;
