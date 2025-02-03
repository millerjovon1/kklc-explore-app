import { useState } from 'react';
import { businessesData } from './member_data.js';  // Import businesses data

interface SearchBarProps {
  mode: 'home' | 'page'; // 'home' for homepage, 'page' for other pages like restaurant
  onSuggestionClick?: (businessId: string) => void; // Function passed as a prop to handle clicks
  onType?: (filteredBusinesses: any[]) => void; // Function to pass filtered businesses for other pages
}

const SearchBar: React.FC<SearchBarProps> = ({ mode, onSuggestionClick, onType }) => {
  const [query, setQuery] = useState('');
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    setQuery(inputValue);

    // Filter businesses based on the input query
    const results = businessesData.filter(
      (business) =>
        business.name.toLowerCase().includes(inputValue) ||
        business.subcategory.toLowerCase().includes(inputValue)
    );

    setFilteredBusinesses(results);

    if (mode === 'page' && onType) {
      onType(results); // Pass the filtered businesses to the parent component for live updates
    }
  };

  // Handle clicking on a suggestion
  const handleSuggestionClick = (businessId: string) => {
    if (mode === 'home' && onSuggestionClick) {
      onSuggestionClick(businessId); // Redirect or handle as per Home page functionality
    }
  };

  return (
    <div className="relative w-full max-w-md my-5 text-center">
      <input
        type="text"
        className="w-full px-4 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        placeholder="Search by name or subcategory..."
        autoComplete="off"
      />

      {isFocused && filteredBusinesses.length > 0 && (
        <ul className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border border-gray-300 rounded-md shadow-md z-10 text-black">
          {filteredBusinesses.map((business) => (
            <li
              key={business.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(business.id)}
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
