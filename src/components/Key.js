export default function Key({ children, ...props }) {
  const { color = "#73cb3e", size = "30px", fontSize = "90%" } = props;

  const keyStyle = {
    width: size,
    height: size,
    fontSize: fontSize,
    color: color,
    outline: `1px solid ${color}`,
    borderBottom: `3px solid ${color}`,
    borderRadius: "10px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={keyStyle}>{children}</div>;
}
