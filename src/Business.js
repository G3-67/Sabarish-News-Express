import React from 'react'
import './index.css'
import{ useState, useEffect } from 'react';
import axios from 'axios';
import Aos from 'aos'; 
import "aos/dist/aos.css";
const Business = () => {
  const [category, setCategory] = useState('general');
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchBusinessHeadlines = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in', // India
            category:'business', // Selected category
            apiKey: 'f39b6c8b8f074a929b85b1469cffea2f', // Replace with your NewsAPI key
          },
        });
        setHeadlines(response.data.articles);
        initializeAOS();
      } catch (error) {
        console.error('Error fetching headlines:', error);
      }
    };
    const initializeAOS = () => {
      if (window.Aos) {
        window.Aos.init(); // Initialize AOS if available
      }
    };

    fetchBusinessHeadlines();
  }, [category]);
  
  return (
  <div className='Business'>
   <h1>Business News</h1>
   
    <div className="card-container"data-aos="zoom-in-up"data-aos-duration="3000" >
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

export default Business