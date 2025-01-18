// SearchBar.tsx
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  // State of the input inside the search bar
  const [query, setQuery] = useState("");

  // Handles input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="m-4 self-stretch">
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </div>
  );
};

export default SearchBar;
