import React from 'react';
import { NewsProvider } from './NewsContext';
import Navbar from './Navbar';
import Articles from './Articles';

const App = () => {
  return (
    <NewsProvider>
      <Navbar />
      <Articles />
    </NewsProvider>
  );
};

export default App;