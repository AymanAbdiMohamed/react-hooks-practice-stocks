import React from "react";

function SearchBar({ sortType, setSortType, filterType, setFilterType }) {
  return (
    <div>
      <strong>Sort By:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sortType === "Alphabetically"}
          onChange={(e) => setSortType(e.target.value)}
        />
        Alphabetically
      </label>

      <label>
        <input
          type="radio"
          value="Price"
          checked={sortType === "Price"}
          onChange={(e) => setSortType(e.target.value)}
        />
        Price
      </label>

      <br />

      <label>
        <strong>Filter:</strong>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
