import Key from "../Key";
import "./SearchKeyboard.css";

export default function SearchKeyboard() {
  const keyboardStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "40px",
  };

  return (
    <div className="search-keyboard" style={keyboardStyle}>
      <span>
        <Key>
          <box-icon color="#73cb3e" type="solid" name="up-arrow" />
        </Key>
        <Key>
          <box-icon color="#73cb3e" type="solid" name="down-arrow" />
        </Key>
        <span>to navigate</span>
      </span>
      <span>
        <Key>
          <box-icon color="#73cb3e" name="subdirectory-left" />
        </Key>
        <span>to select</span>
      </span>
      <span>
        <Key fontSize="12px">esc</Key>
        <span>to exit</span>
      </span>
    </div>
  );
}
