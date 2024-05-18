import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getMovies } from "./apiCalls";
import ErrorHandler from "./components/ErrorHandler";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar/index";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
// Old code for mock movie data
// import movieData from "./moviesData";

export const ErrorContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [errors, setErrors] = useState([]);

  // call to the server for the movie data
  useEffect(() => {
    getMovies()
      .then(setMovies)
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
        <Header>
          <Logo />
          <SearchBar movies={movies} />
        </Header>
        <Routes>
          <Route path="/" element={<HomePage movies={movies} />} />
          <Route path="/:movieId" element={<MoviePage />} />
        </Routes>
      </ErrorContext.Provider>
      <ErrorHandler errors={errors} />
    </div>
  );
}

export default App;
