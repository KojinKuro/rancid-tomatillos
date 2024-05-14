import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getMovie, getMovies } from "./apiCalls";
import ErrorHandler from "./components/ErrorHandler";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
// Old code for mock movie data
// import movieData from "./moviesData";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [heroMovies, setHeroMovies] = useState([]);
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

  return (
    <div className="App">
      <ErrorHandler errors={errors} />
      <Header movies={moviesData}></Header>
      <Routes>
        <Route
          path="/"
          element={<HomePage moviesData={moviesData} heroMovies={heroMovies} />}
        />
        <Route path="/:movieId" element={<MoviePage addError={addError} />} />
      </Routes>
    </div>
  );
}

export default App;
