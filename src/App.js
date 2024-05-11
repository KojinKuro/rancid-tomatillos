import { useEffect, useState } from "react";
import "./App.css";
import { getMovie, getMovies } from "./apiCalls";
import Details from "./components/Details";
import ErrorHandler from "./components/ErrorHandler";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
// Old code for mock movie data
// import movieData from "./moviesData";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [heroMovies, setHeroMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [errors, setErrors] = useState([]);

  // call to the server for the movie data
  useEffect(() => {
    getMovies()
      .then(setMoviesData)
      .catch((error) => addError(`${error}`));
  }, []);

  useEffect(() => {
    const topMovies = moviesData.slice(0, 5);
    const heroMoviePromises = topMovies.map((movie) => getMovie(movie.id));
    Promise.all(heroMoviePromises)
      .then(setHeroMovies)
      .catch((error) => addError(`${error}`));
  }, [moviesData]);
  // removes errors
  useEffect(() => {
    if (errors.length) {
      setTimeout(() => {
        console.log("removed an error");
        setErrors((prevErrors) => prevErrors.slice(1));
      }, 1000);
    }
  }, [errors]);

  const addError = (error) => {
    setErrors((prevErrors) => [...prevErrors, error]);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleReturnHome = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <ErrorHandler errors={errors} />
      <Header movies={moviesData} onMovieSelect={handleMovieSelect} />
      {selectedMovie ? (
        <Details
          movie={selectedMovie}
          addError={addError}
          onReturnHome={handleReturnHome}
        />
      ) : (
        <>
          <Hero movies={heroMovies} onMovieSelect={handleMovieSelect} />
          <Movies movies={moviesData} onMovieSelect={handleMovieSelect} />
        </>
      )}
      {!selectedMovie ? <Footer /> : ""}
    </div>
  );
}

export default App;
