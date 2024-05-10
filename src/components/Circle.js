import "./Circle.css";

export default function Circle({ percentage = 100, size = "23px" }) {
  const style = {
    width: size,
    height: size,
  };

  return <div style={style} className={`circle${percentage}`}></div>;
}
