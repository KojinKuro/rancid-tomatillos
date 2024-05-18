import PropTypes from "prop-types";
import "./Circle.css";

export default function Circle({ percentage = 100, size = "23px" }) {
  const style = {
    width: size,
    height: size,
  };

  return <div style={style} className={`circle${percentage}`}></div>;
}

Circle.propTypes = {
  percentage: PropTypes.number,
  size: PropTypes.string,
};
