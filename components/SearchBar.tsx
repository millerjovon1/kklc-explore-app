"use client";

import React, { useState } from 'react';
import { Business, businessesData } from '../data/businessesData';
import { useRouter } from 'next/navigation'; // Dynamic navigation in Next.js

export interface SearchBarProps {
  mode: 'home' | 'page';
  onSuggestionClick?: (businessId: number) => void;
  onType?: (filteredBusinesses: Business[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ mode, onSuggestionClick, onType }) => {
  const [query, setQuery] = useState('');
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter(); // Hook for navigation

  // Set a cap for suggestions, e.g., 5 suggestions.
  const MAX_SUGGESTIONS = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value; // preserve original case in state
    setQuery(inputValue);
    const lowerInput = inputValue.toLowerCase();

    // Filter businesses using startsWith (or includes) as desired.
    const results = businessesData.filter(
      (business) =>
        business.name.toLowerCase().startsWith(lowerInput) ||
        business.subcategory.toLowerCase().startsWith(lowerInput)
    );

    // Limit the number of suggestions.
    const limitedResults = results.slice(0, MAX_SUGGESTIONS);
    setFilteredBusinesses(limitedResults);

    if (mode === 'page' && onType) {
      onType(limitedResults);
    }
  };

  // When the input gains focus, show the suggestions.
  const handleFocus = () => {
    setIsFocused(true);
  };

  // When the input loses focus, delay hiding suggestions so that clicks can register.
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const handleSuggestionClick = (businessId: number) => {
    // If the user defined their own handler, call it; otherwise, navigate to details page.
    if (onSuggestionClick) {
      onSuggestionClick(businessId);
    } else {
      router.push(`/business-details/${businessId}`);
    }
  };

  return (
    <div className="relative w-full max-w-md my-5 text-center">
      <input
        type="text"
        className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search by name or subcategory..."
        autoComplete="off"
      />
      {isFocused && query.trim().length > 0 && filteredBusinesses.length > 0 && (
        <ul className="absolute top-12 left-1/2 text-left transform -translate-x-1/2 w-full max-w-md bg-white border border-gray-300 rounded-md shadow-md z-10 text-black">
          {filteredBusinesses.map((business) => (
            <li
              key={business.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onMouseDown={() => handleSuggestionClick(business.id)}
            >
              {business.name} ({business.subcategory}) ({business.industry})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
