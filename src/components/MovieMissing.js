import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieMissing.css";

export default function MovieMissing() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    if (countdown <= 0) navigate("/");
    else setTimeout(() => setCountdown((prevCount) => --prevCount), 1000);
  }, [countdown]);

  return (
    <div className="movie-missing--container">
      <h2 className="movie-missing--title">Whoops!</h2>
      <p className="movie-missing--message">
        Looks like you're trying to access a movie that doesn't exist!
      </p>
      <p>Redirecting in {countdown}...</p>
    </div>
  );
}
