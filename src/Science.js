import React from 'react'
import{ useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
const Science = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchScienceHeadlines = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in', // Assuming India for example
            category: 'science', // Fetch only science-related news
            apiKey: 'f39b6c8b8f074a929b85b1469cffea2f', // Replace with your NewsAPI key
          },
        });
        setHeadlines(response.data.articles);
      } catch (error) {
        console.error('Error fetching science headlines:', error);
      }
    };

    fetchScienceHeadlines();
  }, []);
  return (
    <div>
    <h1>Business News</h1>
    <div className="card-container">
      {headlines.map((headline, index) => (
        <div className="card" key={index}>
          <img src={headline.urlToImage} alt={headline.title} />
          <div className="card-content">
            <h2>{headline.title}</h2>
            <p>{headline.description}</p>
            <a href={headline.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Science