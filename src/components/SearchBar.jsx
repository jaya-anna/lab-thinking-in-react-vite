import React from "react";

function SearchBar({ query, setQuery, check, setCheck }) {
  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <div>
      <label>
        Search
        <input
          type="text"
          value={query}
          onChange={handleInput}
          placeholder="Enter search query"
        />
      </label>

      <label>
        Only show products in stock
        <input 
        type="checkbox" 
        checked={check} 
        onChange={handleCheck} />
      </label>
    </div>
  );
}

export default SearchBar;
