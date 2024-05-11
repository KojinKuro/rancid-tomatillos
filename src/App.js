import { useEffect, useState } from "react";
import "./App.css";
import { getMovies } from "./apiCalls";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
// Old code for mock movie data
// import movieData from "./moviesData";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // call to the server for the movie data
  useEffect(() => {
    getMovies().then(setMoviesData);
  }, []);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleReturnHome = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <Header movies={moviesData} onMovieSelect={handleMovieSelect} />
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
