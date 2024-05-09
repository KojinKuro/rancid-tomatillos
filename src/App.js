import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
