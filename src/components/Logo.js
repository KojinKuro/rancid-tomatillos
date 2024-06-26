import PropTypes from "prop-types";

export default function Logo({ size = "2.5rem" }) {
  const style = {
    textTransform: "uppercase",
    fontSize: size,
    fontWeight: "bold",
  };

  return (
    <div style={style}>
      Rancid T<span style={{ color: "#73cb3e" }}>o</span>matillos
    </div>
  );
}

Logo.propTypes = {
  size: PropTypes.string,
};
