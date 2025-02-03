"use client";

import React from 'react';
import SearchBar from './SearchBar'; // Adjust the path if necessary

const ParentComponent: React.FC = () => {
  const handleSuggestionClick = (businessId: number) => {
    console.log("Business clicked:", businessId);
  };

  return (
    <div>
      <SearchBar mode="home" onSuggestionClick={handleSuggestionClick} />
    </div>
  );
};

export default ParentComponent;
