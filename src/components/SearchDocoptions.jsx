import React, { useState } from 'react';

const SearchBar = ({ options, onSearch }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Call the onSearch function passed from the parent component
    // Pass selectedOption and searchQuery as arguments
    onSearch(selectedOption, searchQuery);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Enter search query"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
