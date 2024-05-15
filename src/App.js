import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getMovie, getMovies } from "./apiCalls";
import ErrorHandler from "./components/ErrorHandler";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
// Old code for mock movie data
// import movieData from "./moviesData";

export const ErrorContext = createContext();

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [heroMovies, setHeroMovies] = useState([]);
  const [errors, setErrors] = useState([]);

  // call to the server for the movie data
  useEffect(() => {
    getMovies()
      .then((movies) => {
        // get all the movies
        setMoviesData(movies);
        // get all the data needed for the hero banners
        // abstract away the top 5 movies as the first 5 movies we get
        const topMovies = movies.slice(0, 5);
        Promise.all(topMovies.map((movie) => getMovie(movie.id)))
          .then(setHeroMovies)
          .catch((error) => addError(`${error}`));
      })
      .catch((error) => addError(`${error}`));
  }, []);

  // removes errors every 10 seconds
  useEffect(() => {
    if (!errors.length) return;

    setTimeout(() => {
      setErrors((prevErrors) => prevErrors.slice(1));
    }, 10000);
  }, [errors]);

  const addError = (error) => {
    setErrors((prevErrors) => [...prevErrors, error]);
  };

  return (
    <div className="App">
      <ErrorContext.Provider value={{ addError }}>
        <Header movies={moviesData}>
          <Logo />
          <SearchBar movies={moviesData} />
        </Header>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage moviesData={moviesData} heroMovies={heroMovies} />
            }
          />
          <Route path="/:movieId" element={<MoviePage />} />
        </Routes>
      </ErrorContext.Provider>
      <ErrorHandler errors={errors} />
    </div>
  );
}

export default App;
