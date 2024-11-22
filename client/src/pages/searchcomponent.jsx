import React, { useState } from 'react';

const SearchComponent = ({ placeholder, onSearch }) => {
  const [searchField, setSearchField] = useState('');

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleButtonClick = () => {
    onSearch(searchField); // Trigger search when the button is clicked
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={searchField}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button onClick={handleButtonClick} className="search-button">Search</button>
    </div>
  );
};

export default SearchComponent;
