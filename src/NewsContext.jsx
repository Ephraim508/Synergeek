import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('en'); // Default language: English

  return (
    <NewsContext.Provider value={{ category, setCategory, searchQuery, setSearchQuery, language, setLanguage }}>
      {children}
    </NewsContext.Provider>
  );
};
