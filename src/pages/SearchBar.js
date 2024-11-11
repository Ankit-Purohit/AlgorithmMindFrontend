// SearchBar.js
import React from 'react';

import '../css/SearchBar.css';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
