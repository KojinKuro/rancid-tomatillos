import PropTypes from "prop-types";
import "./ErrorHandler.css";

export default function ErrorHandler({ errors }) {
  const errorElements = errors?.map((error) => {
    return <div className="error">{error}</div>;
  });

  return <div className="error-container">{errorElements}</div>;
}

Error.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};
