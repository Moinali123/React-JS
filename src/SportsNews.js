import React, { useState, useEffect } from 'react';

function App() {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState('');

  const apiKey = '3f388d99e9a249a9bb7f66f6dee60dc1';

  const fetchNewsData = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`)
    .then((response) => response.json())
      .then((data) => {
        setNewsData(data.articles); 
      })
      .catch((error) => {
        setError('An error occurred while fetching news data.');
      });
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-white">Top Headlines</h1>
      <div>
            <h2 className="rounded text-5xl text-center mt-4 mb-4 font-bold text-white">Sports News</h2>
        <ul>
        <h2 className="bg-gray-500 rounded text-5xl text-center mt-4 mb-4 font-bold text-white">Sports News</h2>
          {newsData.length > 0 ? (
            newsData.map((update, index) => (
              <li key={index} className=" ml-6">
                <h2 className="text-2xl bg-gray-300 rounded text-center font-semibold">{update.title}</h2>
                <p className="text-gray-700 text-center">{update.description}</p>
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

export default App;