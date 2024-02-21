import React from 'react'
import{ useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Aos from 'aos'; 
import "aos/dist/aos.css";
const Intertainment = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchEntertainmentHeadlines = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in', // Assuming India for example
            category: 'entertainment', // Fetch only entertainment-related news
            apiKey: 'f39b6c8b8f074a929b85b1469cffea2f', // Replace with your NewsAPI key
          },
        });
        setHeadlines(response.data.articles);
        initializeAOS();
      } catch (error) {
        console.error('Error fetching entertainment headlines:', error);
      }
    };
    const initializeAOS = () => {
      if (window.Aos) {
        window.Aos.init(); // Initialize AOS if available
      }
    };


    fetchEntertainmentHeadlines();
    Aos.init();
  }, []);
  
  return (
    <div>
    <h1 className='heading'>Entertainment News</h1>
    <div className="card-container"data-aos="zoom-in-up"data-aos-duration="3000">
      {headlines.map((headline, index) => (
        <div className="card" key={index}>
          <img src={headline.urlToImage===null?"No Image":headline.urlToImage} alt={headline.title} />
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

export default Intertainment