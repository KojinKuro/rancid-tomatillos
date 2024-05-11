export function getMovieVideos(movieID) {
  return fetchData(`/movies/${movieID}/videos`, "videos");
}

export function getMovie(movieID) {
  return fetchData(`/movies/${movieID}`, "movie");
}

export function getMovies() {
  return fetchData("/movies", "movies");
}

function fetchData(endpoint, type) {
  const API_URL = "https://rancid-tomatillos.herokuapp.com/api/v2";
  return fetch(`${API_URL}${endpoint}`)
    .then((r) => {
      if (!r.ok)
        throw new Error(`This is an HTTP error: The status is ${r.status}`);
      return r.json();
    })
    .then((data) => data[type])
    .catch((error) => console.log(error));
}
