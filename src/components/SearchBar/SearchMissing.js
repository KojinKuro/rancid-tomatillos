import "./SearchResult.css";

export default function SearchMissing() {
  const missingStyle = {
    color: "#8d8d8d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div data-test-id="search-missing" style={missingStyle}>
      There is no result
    </div>
  );
}
