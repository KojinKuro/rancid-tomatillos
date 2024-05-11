import Circle from "./Circle";
import "./MovieRating.css";

export default function MovieRating({ rating }) {
  const formattedRating = rating.toFixed(1);
  let ratingElements = [];

  let testRating = Math.round(rating);
  for (let i = 0; i < 5; ++i) {
    if (testRating >= 2) {
      ratingElements.push(<Circle key={i} percentage={100} />);
      testRating -= 2;
    } else if (testRating >= 1) {
      ratingElements.push(<Circle key={i} percentage={50} />);
      testRating -= 1;
    } else {
      ratingElements.push(<Circle key={i} percentage={0} />);
    }
  }

  return (
    <div className="movie--rating">
      <span className="circle--container">{ratingElements}</span>
      <span>{formattedRating} / 10.0</span>
    </div>
  );
}
