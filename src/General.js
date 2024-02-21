import React from 'react'
import{ useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Aos from 'aos'; 
import "aos/dist/aos.css";

const General = ({headlines}) => {
  const [category, setCategory] = useState('general');
  const [headliness, setHeadliness] = useState([]);

  useEffect(() => {
    const fetchBusinessHeadlines = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=f39b6c8b8f074a929b85b1469cffea2f', {
          params: {
            country: 'in', // India
            category:'general', // Selected category
            // Replace with your NewsAPI key
          },
        });
        setHeadliness(response.data.articles);
        initializeAOS();
        console.log(response.data.articles);
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
    <div>
    <h1 className='heading'>General News</h1>
    <div className="card-container"data-aos="zoom-in-up"data-aos-duration="3000">
      {headliness.map((headline, index) => (
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

export default General