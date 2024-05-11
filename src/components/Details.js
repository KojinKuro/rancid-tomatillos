import React from 'react';
import Circle from './Circle';
import './Details.css';

export default function Details({ movie, onReturnHome }) {
  return (
    <div className="movie-details">
      <button onClick={onReturnHome} className="return-home">Return Home</button>
      <div className="details-container">
        <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} className="details-backdrop" />
        <img src={movie.poster_path} alt={`${movie.title} poster`} className="details-poster" />
        <h1>{movie.title}</h1>
        <div className="tagline"></div> Tagline: Movie info here soon 
        <div className="movie-rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <Circle key={index} percentage={index < Math.round(movie.average_rating) ? 100 : 0} size="23px" />
            ))}
            <span>{movie.average_rating.toFixed(1)} / 10.0</span>
        </div>
        <div className="movie-info">
          <p>Release Date: {new Date(movie.release_date).getFullYear()}</p>
          <p>Length: 150min</p> {/* Placeholder */}
          <p>Genre: Drama</p> {/* Placeholder */}
          <p>Budget: $5000000</p> {/* Placeholder */}
          <p>Revenue: $550000</p> {/* Placeholder */}
        </div>
      </div>
    </div>
  );
}