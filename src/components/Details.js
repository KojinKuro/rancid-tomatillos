export default function Detail({ movie, onReturnHome }) {
    return (
      <div className="movie-detail">
        <button onClick={onReturnHome}>Return Home</button>
        <h1>{movie.title}</h1>
      </div>
    );
  }