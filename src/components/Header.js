import "./Header.css";
import React from "react";

export default function Header() {
  return (
  <header className="header">
    <h1 className="logo">
      RANCID <span className="green-logo"> T</span>O<span>MATILLOS</span>
    </h1>
    <div className="search-bar">
      <input type="text" placeholder="Search movies" />
      <button type="button" className="search-button">🔍</button>
    </div>
  </header>
  );
}
