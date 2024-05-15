import { useContext, useEffect, useState } from "react";
import { ErrorContext } from "../App";
import { getMovie } from "../apiCalls";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Movies from "../components/Movies";

export default function HomePage({ moviesData }) {
  const [heroMovies, setHeroMovies] = useState([]);
  const { addError } = useContext(ErrorContext);

  useEffect(() => {
    const topMovies = moviesData.slice(0, 5);
    Promise.all(topMovies.map((movie) => getMovie(movie.id)))
      .then(setHeroMovies)
      .catch((error) => addError(`${error}`));
  }, [moviesData]);

  return (
    <>
      <Hero heroMovies={heroMovies} />
      <Movies movies={moviesData} />
      <Footer />
    </>
  );
}
