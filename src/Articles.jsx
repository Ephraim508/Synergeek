import React, { useContext, useEffect, useState } from 'react';
import { NewsContext } from './NewsContext';

const Articles = () => {
  const { category, searchQuery, language } = useContext(NewsContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const api = `https://newsapi.org/v2/top-headlines?category=${category}${searchQuery ? `&q=${searchQuery}` : ''}&language=${language}&apiKey=ad75522ef0604b72871786c4b9a5c0ac`;

      try {
        const response = await fetch(api);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    getArticles();
  }, [category, searchQuery, language]);

  return (
    <div className="p-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="border p-3 rounded shadow-lg bg-white w-full max-w-xs mx-auto"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            >
              <img 
                src={article.urlToImage || 'https://dummyimage.com/400x200'} 
                alt={article.title} 
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-md font-bold mt-2">{article.title}</h2>
              <p className="text-sm text-gray-600">{new Date(article.publishedAt).toLocaleDateString()}</p>
              <button 
                className="bg-blue-500 text-white px-3 py-1 mt-3 rounded hover:bg-blue-700 transition"
                onClick={() => window.open(article.url, '_blank')}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">Articles Not Found</p>
      )}
    </div>
  );
};

export default Articles;
