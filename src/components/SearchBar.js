import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  // 🎯 EXPLICATION : Gère le changement dans l'input
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    onSearch(input);
    setInput('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Entrez une ville (ex: Paris, London, Tokyo)..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        🔍 Rechercher
      </button>
    </form>
  );
};

export default SearchBar;