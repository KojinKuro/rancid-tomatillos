import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import movieData from "./moviesData";

function App() {
  const [moviesData, setMoviesData] = useState(movieData.movies);

  return (
    <div className="App">
      <Header movies={moviesData}/>
      <Hero />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
