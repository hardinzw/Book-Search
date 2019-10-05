import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// This file exports the Input, TextArea, and FormBtn components

export function SearchForm({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form className="form-inline" role="form">
        <label htmlFor="Title" className="sr-only">
          Search Book Title
        </label>
        <input
          className="form-control heading-subtitle "
          id="Title"
          type="text"
          value={q}
          placeholder="Book Title..."
          name="q"
          size="52"
          onChange={handleInputChange}         
          required
        />
      <button
        onClick={handleFormSubmit}
        type="submit"
        className="btn search-btn heading-subtitle ml-2"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

export default SearchForm;