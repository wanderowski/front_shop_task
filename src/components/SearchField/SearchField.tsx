import { useState } from "react";
import "./searchField.scss";

const SearchField = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
  };
  return (
    <form className="searchField">
      <input
        type="search"
        placeholder="Size, Brands, Men’s, Women’s, Kid’s, etc."
        className="searchField__input"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <img
        onClick={handleSearch}
        className="searchField__icon"
        src="search.png"
      />
    </form>
  );
};

export default SearchField;
