import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Movies from "../components/Movies";

export default function HomePage({ heroMovies, moviesData }) {
  return (
    <>
      <Hero heroMovies={heroMovies} />
      <Movies movies={moviesData} />
      <Footer />
    </>
  );
}
