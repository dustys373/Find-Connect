import React, { useState } from 'react';
import { debounce } from 'lodash';

const SearchForm = () => {
  const debouncedSearch = debounce((term) => {
    // Perform search
  }, 300);

  return (
    <input
      type="text"
      onChange={(e) => debouncedSearch(e.target.value)}
      placeholder="Search..."
    />
  );
};