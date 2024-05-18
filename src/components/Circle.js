import PropTypes from "prop-types";
import "./Circle.css";

export default function Circle({ percentage = 100 }) {
  return <div className={`circle${percentage}`}></div>;
}

Circle.propTypes = {
  percentage: PropTypes.number,
};
