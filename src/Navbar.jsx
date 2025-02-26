import React, { useContext, useState } from 'react';
import { NewsContext } from './NewsContext';

const Navbar = () => {
  const { setCategory, setSearchQuery, setLanguage } = useContext(NewsContext);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['general', 'business', 'sports', 'technology', 'entertainment'];

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSearchQuery(''); // Reset search query when switching categories
  };

  return (
    <header className="bg-white shadow-lg p-4 w-full" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-xl font-bold text-gray-900">Synergeek</span>
        </div>

        {/* Categories */}
        <nav className="hidden md:flex space-x-3">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className="px-4 py-2 bg-blue-500 text-white rounded-md transition hover:bg-blue-700"
              onClick={() => handleCategoryChange(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Search and Language */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex space-x-2">
            <input
              type="text"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Language Selection */}
          <div className="flex space-x-2">
            <button 
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition"
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition"
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Category List */}
      <div className="md:hidden mt-4 overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-2">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-700 transition"
              onClick={() => handleCategoryChange(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
